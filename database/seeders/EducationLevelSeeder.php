<?php

namespace Database\Seeders;

use App\Models\EducationLevel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EducationLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $levels = [
            ['TÉCNICA', 'PRE'],
            ['TECNOLÓGICA', 'PRE'],
            ['PROFESIONAL', 'PRE'],
            ['ESPECIALIZACIÓN', 'POS'],
            ['MAESTRÍA', 'POS'],
            ['DOCTORADO', 'POS'],
        ];

        EducationLevel::insert(array_map(
            fn ($level) =>
            [
                'name' => $level[0],
                'type' => $level[1],
            ],
            $levels
        ));
    }
}
