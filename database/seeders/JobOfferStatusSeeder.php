<?php

namespace Database\Seeders;

use App\Models\JobOfferStatus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JobOfferStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        JobOfferStatus::insert(
            [
                [
                    'name' => 'PENDIENTE',
                    'description' => 'La oferta está pendiente de aprobación',
                ],
                [
                    'name' => 'APROBADA',
                    'description' => 'La oferta ha sido aprobada',
                ],
                [
                    'name' => 'RECHAZADA',
                    'description' => 'La oferta ha sido rechazada',
                ],
            ]
        );
    }
}
