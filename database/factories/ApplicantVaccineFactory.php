<?php

namespace Database\Factories;

use App\Models\Vaccine;
use App\Models\Applicant;
use Illuminate\Support\Facades\App;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ApplicantVaccine>
 */
class ApplicantVaccineFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'applicant_id' => Applicant::all()->random()->id,
            'vaccine_id' => Vaccine::all()->random()->id,
        ];
    }
}
