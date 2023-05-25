<?php

namespace App\Http\Controllers\Applicant;

use App\Http\Controllers\Controller;
use App\Models\JobRequest;
use App\Models\JobRequestStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobApplicationController extends Controller
{
    public function index()
    {
        $JobStatuses = JobRequestStatus::all();
        $JobRequests = JobRequest::select('id', 'job_offer_id', 'job_request_status_id')
            ->with(
                'job:id,title,description,academic_program_id',
                'job.academicProgram:id,name,academic_faculty_id',
                'job.academicProgram.academicFaculty:id,name,color'
            )
            ->where('applicant_id', Auth()->user()->applicant->id)
            ->get();

        return Inertia::render('Applicant/ShowApplications/index', compact('JobStatuses', 'JobRequests'));
    }
}
