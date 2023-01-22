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
        $statuses = [
            'SIN REVISAR',
            'SELECCIONADO',
            'RECHAZADA',
            'CANCELADA',
        ];

        JobRequestStatus::insert(
            array_map(
                fn ($status) => ['name' => $status],
                $statuses
            )
        );
    }
}
