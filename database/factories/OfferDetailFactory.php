<?php

namespace Database\Factories;

use App\Models\JobOffer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JobOfferDetail>
 */
class OfferDetailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'description' => fake()->text(100),
            'detail_type' => collect(['R', 'F'])->random(),
            'job_offer_id' => JobOffer::all()->random()->id
        ];
    }
}
