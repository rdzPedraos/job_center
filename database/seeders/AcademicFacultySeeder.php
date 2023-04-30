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
            ['FACULTAD DE INGENIERÍAS', '#18c27a'],
            ['FACULTAD DE DERECHO Y CIENCIAS POLÍTICAS', '#C51E3A'],
            ['FACULTAD DE CIENCIAS', '#2d7fdf'],
            ['FACULTAD DE CIENCIAS ECONÓMICAS Y ADMINISTRATIVAS', '#007FFF'],
            ['FACULTAD DE ARTES', '#00563B'],
            ['ESCUELA DE CIENCIAS DEL LENGUAJE', '#50C878'],
            ['ESCUELA DE CIENCIAS HUMANAS', '#B284BE'],
        ];

        AcademicFaculty::insert(array_map(fn ($f) => ['name' => $f[0], 'color' => $f[1]], $faculties));
    }
}
