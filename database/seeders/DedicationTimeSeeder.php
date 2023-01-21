<?php

namespace Database\Seeders;

use App\Models\DedicationTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DedicationTimeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DedicationTime::insert([
            ['name' => 'TIEMPO COMPLETO', 'acronym' => 'TC', 'description' => fake()->realText()],
            ['name' => 'MEDIO TIEMPO', 'acronym' => 'MT', 'description' => fake()->realText()],
            ['name' => 'TIEMPO PARCIAL', 'acronym' => 'TP', 'description' => fake()->realText()]
        ]);
    }
}
