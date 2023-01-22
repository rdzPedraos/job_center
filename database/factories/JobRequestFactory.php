<?php

namespace Database\Factories;

use App\Models\JobOffer;
use App\Models\Applicant;
use App\Models\JobRequestStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JobRequest>
 */
class JobRequestFactory extends Factory
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
            'job_offer_id' => JobOffer::all()->random()->id,
            'job_request_status_id' => JobRequestStatus::all()->random()->id,
            'applicant_history' => $this->faker->json(),
        ];
    }
}
