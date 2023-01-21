<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\JobOffer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Observation>
 */
class ObservationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'content' => fake()->text(100),
            'job_offer_id' => JobOffer::all()->random()->id,
            'user_id' => User::all()->random()->id
        ];
    }
}
