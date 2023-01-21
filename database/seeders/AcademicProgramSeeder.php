<?php

namespace Database\Seeders;

use App\Models\AcademicFaculty;
use App\Models\AcademicProgram;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AcademicProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $programs = [
            'INGENIERÍA DE SISTEMAS POR CICLOS PROPEDÉUTICOS',
            'CONTADURÍA PÚBLICA',
            'MEDICINA VETERINARIA Y ZOOTECNIA',
            'DERECHO',
            'INGENIERÍA AGROINDUSTRIAL',
            'INGENIERÍA AGROFORESTAL',
            'ESPECIALIZACIÓN EN EVALUACIÓN Y GESTIÓN AMBIENTAL',
            'INGENIERÍA CIVIL',
            'ARQUITECTURA',
            'INGENIERÍA DE ENERGÍAS',
        ];

        $faculties = AcademicFaculty::all(['id']);

        AcademicProgram::insert(array_map(fn ($program) => [
            'name' => $program,
            'academic_faculty_id' => $faculties->random()->id
        ], $programs));
    }
}
