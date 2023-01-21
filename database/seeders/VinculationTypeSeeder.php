<?php

namespace Database\Seeders;

use App\Models\VinculationType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VinculationTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        VinculationType::insert([
            [
                'name' => 'VINCULACIÓN CATEDRÁTICO',
                'acronym' => 'VC',
                'description' => fake()->realText()
            ],
            [
                'name' => 'VINCULACIÓN DE PLANTA',
                'acronym' => 'VP',
                'description' => fake()->realText()
            ]
        ]);
    }
}
