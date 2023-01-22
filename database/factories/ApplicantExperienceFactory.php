<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\Applicant;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ApplicantExperience>
 */
class ApplicantExperienceFactory extends Factory
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
            'company_name' => fake()->company(),
            'position' => fake()->jobTitle(),
            'company_city_id' => City::all()->random()->id,
            'description' => fake()->text(),
            'start_date' => fake()->dateTimeBetween('-5 years', '-1 years')->format('Y-m-d'),
            'end_date' => fake()->dateTimeBetween('-1 years', 'now')->format('Y-m-d'),
            'currently_working' => fake()->boolean(),
        ];
    }
}
