<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\JobRequestStatus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class JobRequestStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        JobRequestStatus::insert([
            [
                'name' => 'PENDIENTE',
                'description' => 'Aún no se revisa la postulación',
            ],
            [
                'name' => 'SELECCIONADO',
                'description' => 'Está formalmente postulado',
            ],
            [
                'name' => 'RECHAZADO',
                'description' => 'Ha sido rechazado para la vacante',
            ],
            [
                'name' => 'APROBADO',
                'description' => 'Ha sido aceptado para el cargo'
            ]
        ]);
    }
}
