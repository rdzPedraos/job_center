<?php

namespace App\Http\Controllers\Applicant;

use App\Http\Controllers\Controller;
use App\Models\AcademicProgram;
use App\Models\JobRequest;
use App\Models\JobRequestStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class JobApplicationController extends Controller
{
    public function index()
    {
        $JobStatuses = JobRequestStatus::all();
        $AcademicPrograms = AcademicProgram::select('id', 'name')->get();

        $JobRequests = JobRequest::select('job_offer_id', 'job_request_status_id', 'created_at')
            ->with('job:id,title,academic_program_id')
            ->selectSub(function ($query) {
                $query->selectRaw('COUNT(*)')
                    ->from('job_requests AS job_requests_2')
                    ->whereColumn('job_requests_2.job_offer_id', 'job_requests.job_offer_id');
            }, 'count')
            ->where('applicant_id', Auth()->user()->applicant->id)
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Applicant/ShowApplications/index', compact('JobStatuses', 'JobRequests', 'AcademicPrograms'));
    }
}
