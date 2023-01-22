<?php

namespace Database\Factories;

use App\Models\Applicant;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ApplicantChild>
 */
class ApplicantChildFactory extends Factory
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
            'birth_date' => fake()->date(),
            'gender' => fake()->randomElement(['M', 'F']),
            'first_name' => fake()->firstName(),
            'middle_name' => fake()->firstName(),
            'first_surname' => fake()->lastName(),
            'middle_surname' => fake()->lastName(),
        ];
    }
}
