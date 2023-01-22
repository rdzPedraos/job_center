<?php

namespace Database\Factories;

use App\Models\Arl;
use App\Models\Eps;
use App\Models\City;
use App\Models\User;
use App\Models\Address;
use App\Models\BloodType;
use App\Models\PensionFund;
use App\Models\MaritalStatus;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Applicant>
 */
class ApplicantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => fake()->unique()->randomElement(User::all()->pluck('id')),
            'birth_place_id' => City::all()->random()->id,
            'birth_date' => fake()->date(),
            'document_issue_city_id' => City::all()->random()->id,
            'document_expedition_date' => fake()->date(),
            'address_id' => Address::all()->random()->id,
            'marital_status_id' => MaritalStatus::all()->random()->id,
            'blood_type_id' => BloodType::all()->random()->id,
            'gender' => fake()->randomElement(['M', 'F']),
            'eps_id' => Eps::all()->random()->id,
            'pension_fund_id' => PensionFund::all()->random()->id,
            'arl_id' => Arl::all()->random()->id,
            'military_passbook_number' => fake()->randomNumber(9),
            'family_contact_name' => fake()->name(),
            'family_contact_phone' => fake()->numberBetween(1000000, 9999999),
            'family_contact_relationship' => fake()->randomElement(['PADRE', 'MADRE', 'HERMANO', 'HERMANA', 'TIO', 'TIA', 'ABUELO', 'ABUELA', 'OTRO']),
        ];
    }
}
