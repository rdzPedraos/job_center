<?php

namespace Database\Seeders;

use App\Models\ApplicantStudy;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ApplicantStudySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ApplicantStudy::factory(2)->create();
    }
}
