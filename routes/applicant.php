<?php

/**
 * Aqui están todas las rutas relacionadas al usuario "applicante"
 * este usuario hace referencia a quien se postula a una convocatoria.
 * 
 * Todas las rutas tienen como url antecedido applicante/
 */

use App\Http\Controllers\applicant\CurriculumController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Routes for applicant, begining with:
//Name: applicant.{name}
//Middlewares: Auth

Route::get('/bolsa-de-empleo', function () {
    return Inertia::render('Applicant/SearchJob');
})->name('searchJob');

Route::get('/mis-postulaciones', function () {
    return Inertia::render('Applicant/SeePostulations');
})->name('postulations');


Route::controller(CurriculumController::class)->group(function () {
    Route::get('/mi-hv', 'index')->name('cv');
    Route::patch('/mi-hv', 'update')->name('update');
    Route::post('/upload-hv', 'uploadCv')->name('cv.upload');
    Route::get('/download-hv', 'downloadCv')->name('cv.download');
});
