<?php

namespace App\Http\Controllers\Applicant;

use App\Http\Controllers\Controller;
use App\Models\AcademicFaculty;
use App\Models\AcademicProgram;
use App\Models\DedicationTime;
use App\Models\JobOffer;
use App\Models\JobRequest;
use App\Models\VinculationType;
use App\Rules\onlyAlphaAndSpace;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response;

class JobOfferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): Response
    {
        $academicPrograms = AcademicProgram::all();
        $academicFaculties = AcademicFaculty::all();
        $vinculationTypes = VinculationType::all();
        $dedicationTimes = DedicationTime::all();

        $jobOffers = JobOffer::where('job_offer_end_date', '>=', now());
        $salaryLimits = [
            'min' => $jobOffers->min('monthly_salary'),
            'max' => $jobOffers->max('monthly_salary')
        ];

        return Inertia::render('Applicant/JobOffer/index', compact(
            'academicPrograms',
            'academicFaculties',
            'salaryLimits',
            'vinculationTypes',
            'dedicationTimes'
        ));
    }

    public function filter(Request $request)
    {
        $filters = $request->validate([
            'title' => ['nullable', new onlyAlphaAndSpace],
            'faculty' => ['nullable', new onlyAlphaAndSpace],
            'academic_program' => ['nullable', new onlyAlphaAndSpace],
            'salary' => ['nullable'],
            'laboral_experience' => ['nullable'],
            'academic_experience' => ['nullable'],
            'vinculation_type' => ['nullable'],
            'dedication_time' => ['nullable'],
        ]);

        $pagination = $request->validate([
            'page' => ['required', 'integer'],
            'per_page' => ['required', 'integer']
        ]);

        //? Todo lo que deseamos traer de la base de datos:
        $sql = JobOffer::with(
            'academicProgram:id,name,academic_faculty_id',
            'academicProgram.academicFaculty:id,name,color'
        )
            ->select('job_offers.id', 'title', 'job_offers.description', 'vacancies', 'monthly_salary', 'job_offer_start_date', 'job_offer_end_date', 'job_start_date', 'job_end_date', 'academic_program_id')
            ->join('contract_types', 'job_offers.contract_type_id', '=', 'contract_types.id')
            ->orderBy('job_offer_end_date', 'desc')
            ->where('job_offer_end_date', '>=', now());

        /**
         * Aqui se parametriza cada uno de los filtros posibles.
         * id => 'Nombre del filtro',
         * value => función anónima con dos parametros ($query, $valores del filtro)
         */
        $params = [
            'title' => fn (&$q, $v) => $q->where('title', 'LIKE', '%' . $v . '%'),
            'faculty' => fn (&$q, $v) => $q->whereHas('academicProgram.academicFaculty', fn ($q) => $q->where('name', 'LIKE', '%' . $v . '%')),
            'academic_program' => fn (&$q, $v) => $q->whereHas('academicProgram', fn ($q) => $q->where('name', 'LIKE', '%' . $v . '%')),
            'salary' => fn (&$q, $v) => $q->where([
                ['monthly_salary', '>', $v[0]],
                ['monthly_salary', '<', $v[1]]
            ]),
            /* 'laboral_experience' => fn() => 1,
            'academic_experience' => fn()=>1,*/

            'vinculation_type' => fn (&$q, $v) => $q->where(
                function ($query) use ($v) {
                    foreach ($v as $_v) $query->orWhere('contract_types.vinculation_type_id', '=', $_v);
                }
            ),

            'dedication_time' => fn (&$q, $v) => $q->where(
                function ($query) use ($v) {
                    foreach ($v as $_v) $query->orWhere('contract_types.dedication_time_id', '=', $_v);
                }
            )
        ];

        if (!empty($filters)) {
            foreach ($params as $f => $condition) {
                if (isset($filters[$f])) {
                    $condition($sql, $filters[$f]);
                }
            }
        }

        $data = $sql->paginate($pagination['per_page'], ['*'], 'page', $pagination['page']);
        return response()->json($data);
    }


    public function show(JobOffer $job)
    {
        $job = JobOffer::select(
            'id',
            'title',
            'description',
            'vacancies',
            'monthly_salary',
            'job_start_date',
            'job_end_date',
            'job_offer_start_date',
            'job_offer_end_date',

            'academic_program_id',
            'contract_type_id',
        )->find($job->id)
            ->load(
                'contractType',
                'contractType.vinculationType',
                'contractType.dedicationTime',
                'academicProgram',
                'academicProgram.academicFaculty',
                'details',
                'requests'
            );

        $job['is_registered'] = $job->requests->pluck('applicant_id')->contains(Auth()->user()->applicant->id);
        unset($job['requests']);

        return response()->json($job);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = Validator::validate($request->all(), [
            'id' => [
                'required', 'exists:job_offers,id',
                function ($attribute, $value, $fail) use ($request) {
                    $job = JobOffer::find($value);

                    if (!$job) {
                        $fail("El ID proporcionado no existe.");
                    } else {
                        if ($job->requests->pluck('applicant_id')->contains($request->user()->applicant->id)) {
                            $fail('El usuario ya se encuentra postulado.');
                        }

                        // Aplicar las reglas de fecha al modelo existente
                        if ($job->job_offer_start_date > now()) {
                            $fail("La fecha de inicio debe ser menor o igual a la fecha actual.");
                        }

                        if ($job->job_offer_end_date < now()) {
                            $fail("La fecha de finalización debe ser mayor o igual a la fecha actual");
                        }
                    }
                },
            ],
        ]);

        JobRequest::create([
            'applicant_id' => $request->user()->applicant->id,
            'job_offer_id' => $validated['id'],
            'job_request_status_id' => 1 #SIN REVISAR 
        ]);

        return response('success');
    }
}
