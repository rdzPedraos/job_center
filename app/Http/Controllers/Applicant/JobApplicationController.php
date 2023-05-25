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
        $JobRequests = JobRequest::with('job:id,title,description,academic_program_id', 'job.academicProgram:id,name')
            ->where('applicant_id', Auth()->user()->applicant->id)
            ->get();

        return Inertia::render('Applicant/ShowApplications/index', compact('JobStatuses', 'JobRequests'));
    }
}
