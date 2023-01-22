<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DocumentHolder>
 */
class DocumentHolderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'documentable_id' => 1,
            'documentable_type' => fake()->randomElement(['App\Models\ApplicantExperience', 'App\Models\ApplicantStudy']),
            'url' => fake()->url(),
        ];
    }
}
