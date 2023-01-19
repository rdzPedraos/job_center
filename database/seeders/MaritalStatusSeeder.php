<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
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
        $maritalStatuses = [
            "Soltero/a",
            "Casado/a",
            "Unión libre o unión de hecho",
            "Separado/a",
            "Divorciado/a",
            "Viudo/a"
        ];

        MaritalStatus::insert(
            array_map(
                fn ($maritalStatus) => ['name' => Str::upper($maritalStatus)],
                $maritalStatuses
            )
        );
    }
}
