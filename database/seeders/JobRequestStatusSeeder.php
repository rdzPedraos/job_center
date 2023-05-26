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
                'color' => '#3b82f6'
            ],
            [
                'name' => 'REVISADO',
                'description' => 'Su Postulación ha sido vista',
                'color' => '#fb923c'
            ],
            [
                'name' => 'RECHAZADO',
                'description' => 'Ha sido rechazado para la vacante',
                'color' => '#c51e3a'
            ],
            [
                'name' => 'APROBADO',
                'description' => 'Su postulación fue aceptada para el cargo',
                'color' => '#18c27a'
            ]
        ]);
    }
}
