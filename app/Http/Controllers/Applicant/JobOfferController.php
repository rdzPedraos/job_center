<?php

namespace App\Http\Controllers\Applicant;

use App\Http\Controllers\Controller;
use App\Models\JobOffer;
use App\Models\JobOfferStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class JobOfferController extends Controller
{
    protected function filters($filters, &$sql)
    {
        if (!empty($filters)) {
            $sql->where('title', 'LIKE', '%' . $filters['title'] . '%');
        }

        return $sql;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request): Response
    {
        $filters = $request->validate([
            'title' => ['nullable', 'alpha']
        ]);

        $sql = JobOffer::with('academicProgram:id,name,academic_faculty_id', 'academicProgram.academicFaculty:id,name,color')
            ->select('id', 'title', 'description', 'vacancies', 'monthly_salary', 'job_offer_start_date', 'job_offer_end_date', 'job_start_date', 'job_end_date', 'academic_program_id')
            ->where('job_offer_end_date', '>=', now());
        $this->filters($filters, $sql);

        $jobs = $sql->take(5)->get();
        return Inertia::render('Applicant/JobOffer/index', ['JobOffers' => $jobs, 'filters' => $filters]);
    }

    public function filter(Request $request)
    {
        return ['hola' => 'hola'];
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }
}
