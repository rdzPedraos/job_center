<?php

use App\Http\Controllers\applicant\CurriculumController;
use App\Http\Controllers\Applicant\JobOfferController;
use App\Http\Controllers\Applicant\UploadFileController;
use App\Models\JobOffer;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/**
 * Aqui están todas las rutas relacionadas al usuario "applicante"
 * este usuario hace referencia a quien se postula a una convocatoria.
 * 
 * As: applicant.
 * Middlewares: Auth
 */

Route::get('/mis-postulaciones', function () {
    return Inertia::render('Applicant/SeePostulations');
})->name('postulations');


Route::as('job.')->group(function () {
    Route::group([
        'as' => 'offer.',
        'controller' => JobOfferController::class
    ], function () {
        Route::get('/bolsa-de-empleo', 'index')->name('index');
        Route::post('/bolsa-de-empleo', 'filter')->name('filter');
    });
});

Route::as('cv.')->group(function () {
    Route::controller(CurriculumController::class)->group(function () {
        Route::get('/mi-hv', 'index')->name('index');
        Route::patch('/mi-hv', 'update')->name('update');
    });

    Route::controller(UploadFileController::class)->group(function () {
        Route::post('/subir-hv', 'uploadCv')->name('upload');
        Route::get('/ver-hv', 'downloadCv')->name('download');
    });
});
