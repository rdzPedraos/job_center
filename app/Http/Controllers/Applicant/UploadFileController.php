<?php

namespace App\Http\Controllers\Applicant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadFileController extends Controller
{
    protected function uploadCv(Request $request)
    {
        $validated = $request->validate([
            'file' => ['required', 'file', 'mimes:pdf']
        ]);

        $user = $request->user();
        $fileName = "cv_" . date('dmY') . '.' . $request->file->extension();
        $path = $user->document_number;

        $validated['file']->storeAs($path, $fileName, 'applicant');
        $user->applicant->update(['cv_url' => "$path/$fileName"]);

        return redirect()->route('applicant.cv.index')->with('msg', ['status' => 'success', 'content' => 'Hoja de vida cargada con éxito']);
    }

    protected function downloadCv(Request $request)
    {
        $fileName = $request->user()->applicant->cv_url;
        $file = Storage::get(config('filesystems.disks.applicant._base') . "/$fileName");
        return response($file, 200, ['Content-Type' => 'application/pdf']);
    }
}
