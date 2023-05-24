<?php

use App\Http\Controllers\applicant\CurriculumController;
use App\Http\Controllers\Applicant\JobOfferController;
use App\Http\Controllers\Applicant\UploadFileController;
use App\Http\Controllers\Applicant\JobApplicationController;
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
        Route::post('/bolsa-de-empleo/inscribirse', 'store')->name('store');
        Route::post('/bolsa-de-empleo/{job}', 'show')->name('show');
    });

    Route::group([
        'as' => 'applications.',
        'controller' => JobApplicationController::class
    ], function () {
        Route::get('/mis-postulaciones', 'index')->name('index');
        Route::post('/add-postulation', 'store')->name('add');
        Route::post('/remove-postulation', 'destroy')->name('remove');
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
