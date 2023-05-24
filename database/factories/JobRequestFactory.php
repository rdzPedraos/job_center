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
            'job_offer_id' => fake()->unique()->randomElement(JobOffer::all()->pluck('id')),
            'job_request_status_id' => JobRequestStatus::all()->random()->id,
            'applicant_history' => json_encode([
                'test_history' => 'test_history',
                'test_history_2' => 'test_history'
            ]),
        ];
    }
}
