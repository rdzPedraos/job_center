<?php

namespace Database\Seeders;

use App\Models\ApplicantExperience;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ApplicantExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ApplicantExperience::factory(1)->create();
    }
}
