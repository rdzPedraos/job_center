<?php

/**
 * Aqui están todas las rutas relacionadas al usuario "participante"
 * este usuario hace referencia a quien se postula a una convocatoria.
 * 
 * Todas las rutas tienen como url antecedido participante/
 */

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Routes for participant, begining with:
//Name: participant.{name}
//Middlewares: Auth
Route::get('/bolsa-de-empleo', function () {
    return Inertia::render('Applicant/SearchJob');
})->name('searchJob');

Route::get('/mis-postulaciones', function () {
    return Inertia::render('Applicant/SeePostulations');
})->name('postulations');

Route::get('/mi-hv', function () {
    return Inertia::render('Applicant/Cv');
})->name('cv');
