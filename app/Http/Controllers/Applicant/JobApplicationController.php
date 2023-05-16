<?php

namespace App\Http\Controllers\Applicant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobApplicationController extends Controller
{
    public function index()
    {
        $participant = Auth()->user()->participant;
        return Inertia::render('Applicant/ShowApplications/index', compact('participant'));
    }

    public function store()
    {
        return 'hola';
    }

    public function destroy()
    {
        return 'mundo';
    }
}
