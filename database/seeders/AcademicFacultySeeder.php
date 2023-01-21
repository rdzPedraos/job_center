<?php

namespace Database\Seeders;

use App\Models\AcademicFaculty;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AcademicFacultySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faculties = [
            'FACULTAD DE INGENIERÍAS',
            'FACULTAD DE DERECHO Y CIENCIAS POLÍTICAS',
            'FACULTAD DE CIENCIAS',
            'FACULTAD DE CIENCIAS ECONÓMICAS Y ADMINISTRATIVAS',
            'FACULTAD DE ARTES',
            'ESCUELA DE CIENCIAS DEL LENGUAJE',
            'ESCUELA DE CIENCIAS HUMANAS'
        ];

        AcademicFaculty::insert(array_map(fn ($faculty) => ['name' => $faculty], $faculties));
    }
}
