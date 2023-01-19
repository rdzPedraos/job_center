<?php

namespace Database\Seeders;

use App\Models\MaritalStatus;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MaritalStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MaritalStatus::withoutEvents(function () {
            $this->createMaritalStatuses();
        });
    }

    private function createMaritalStatuses()
    {
        $maritalStatuses = [
            "Soltero/a",
            "Casado/a",
            "Unión libre o unión de hecho",
            "Separado/a",
            "Divorciado/a",
            "Viudo/a"
        ];

        foreach ($maritalStatuses as $maritalStatus) {
            MaritalStatus::create([
                'name' => $maritalStatus
            ]);
        }
    }
}
