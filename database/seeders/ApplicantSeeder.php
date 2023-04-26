<?php

namespace Database\Seeders;

use App\Models\Applicant;
use App\Models\User;
use Database\Factories\ApplicantFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ApplicantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Applicant::factory(1)->create(['user_id' => User::all()->last()->id]);
        //Applicant::factory(5)->create();
    }
}
