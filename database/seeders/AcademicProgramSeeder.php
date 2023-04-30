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
            ['INGENIERÍA DE SISTEMAS POR CICLOS PROPEDÉUTICOS', 1],
            ['CONTADURÍA PÚBLICA', 3],
            ['MEDICINA VETERINARIA Y ZOOTECNIA', 6],
            ['DERECHO', 2],
            ['INGENIERÍA AGROINDUSTRIAL', 1],
            ['INGENIERÍA AGROFORESTAL', 1],
            ['ESPECIALIZACIÓN EN EVALUACIÓN Y GESTIÓN AMBIENTAL', 6],
            ['INGENIERÍA CIVIL', 1],
            ['ARQUITECTURA', 5],
            ['INGENIERÍA DE ENERGÍAS', 1],
        ];


        AcademicProgram::insert(array_map(fn ($p) => [
            'name' => $p[0],
            'academic_faculty_id' => $p[1]
        ], $programs));
    }
}
