<?php

namespace App\Http\Controllers\Applicant;

use App\Http\Controllers\Controller;
use App\Models\ApplicantExperience;
use App\Models\ApplicantStudy;
use App\Models\City;
use App\Models\EducationLevel;
use App\Rules\onlyAlphaAndSpace;
use App\Rules\text;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CurriculumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): Response
    {
        $applicant = Auth()->user()->applicant;
        return Inertia::render('Applicant/Cv/index', [
            'applicant' => $applicant,
            'experience' => $applicant->experiences,
            'academicStudies' => $applicant->studies,
            'education_levels' => EducationLevel::all(),
            'cities' => City::all()
        ]);
    }

    protected function setBiografy(Request $request)
    {
        $validated = $request->validate([
            'biografy_title' => ['required', new onlyAlphaAndSpace, 'max:100', 'min:3'],
            'biografy_content' => ['required', new text, 'max:1000', 'min:3']
        ]);

        $applicant = $request->user()->applicant;
        $applicant->update($validated); //$request->only('biografy_title', 'biografy_content')

        redirect()->route('applicant.cv.index');
    }

    protected function setExperiencie(Request $request)
    {
        $validated = $request->validate([
            'id' => ['numeric', 'exists:applicant_experiences'],
            'company_name' => ['required', new onlyAlphaAndSpace],
            'company_city_id' => ['required', 'exists:cities,id'],
            'position' => ['required', new onlyAlphaAndSpace],
            'description' => ['required', new text, 'max:1000', 'min:3'],
            'start_date' => ['required', 'date'],
            'end_date' => ['date']
        ]);


        if (isset($validated['id'])) {
            ApplicantExperience::where('id', $validated['id'])->update($validated);
        } else {
            $validated['applicant_id'] = $request->user()->applicant->id;
            ApplicantExperience::insert($validated);
        }
    }

    protected function setAcademicStudies(Request $request)
    {
        $validated = $request->validate([
            'id' => ['numeric', 'exists:applicant_studies'],
            'education_level_id' => ['required', 'exists:education_levels,id'],
            'degree' => ['required', new onlyAlphaAndSpace],
            'institution_name' => ['required', new onlyAlphaAndSpace],
            'record_number' => ['numeric', 'max_digits:20', 'min_digits:3'],
            'professional_card_number' => ['numeric'],
            'start_date' => ['required', 'date'],
            'end_date' => ['date']
        ]);

        if (isset($validated['id'])) {
            ApplicantStudy::where('id', $validated['id'])->update($validated);
        } else {
            $validated['applicant_id'] = $request->user()->applicant->id;
            ApplicantStudy::insert($validated);
        }
    }

    public function update(Request $request)
    {
        $request->validate(['info_to_update' => ['required', 'in:biografy,laboral_experiencie,academic_studies']]);
        switch ($request->info_to_update) {
            case 'biografy':
                $this->setBiografy($request);
                break;
            case 'laboral_experiencie':
                $this->setExperiencie($request);
                break;
            case 'academic_studies':
                $this->setAcademicStudies($request);
                break;
        }

        redirect()->route('applicant.cv.index')->with('msg', ['status' => 'success', 'content' => 'Información actualizada con éxito']);
    }
}
