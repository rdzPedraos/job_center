<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\ContractType;
use App\Models\JobOfferStatus;
use App\Models\AcademicProgram;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\JobOffer>
 */
class JobOfferFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'academic_program_id' => AcademicProgram::all()->random()->id,
            'approved_at' => now(),
            'approver_user_id' => User::all()->random()->id,
            'contract_type_id' => ContractType::all()->random()->id,
            'description' => fake()->text(100),
            'host_user_id' => User::all()->random()->id,
            'job_start_date' => now()->addDays(12),
            'job_end_date' => now()->addMonths(6),
            'job_offer_start_date' => now(),
            'job_offer_end_date' => now()->addDay(5),
            'job_offer_status_id' => JobOfferStatus::all()->random()->id,
            'monthly_salary' => fake()->randomFloat(2, 1000, 10000),
        ];
    }
}
