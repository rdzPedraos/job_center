<?php

namespace Database\Factories;

use App\Models\Applicant;
use App\Models\EducationLevel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ApplicantStudy>
 */
class ApplicantStudyFactory extends Factory
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
            'education_level_id' => EducationLevel::all()->random()->id,
            'degree' => fake()->jobTitle(),
            'record_number' => fake()->randomNumber(8),
            'professional_card_number' => fake()->randomNumber(8),
            'institution_name' => fake()->company(),
            'start_date' => fake()->date(),
            'end_date' => fake()->date(),
            'finished' => fake()->boolean()
        ];
    }
}
