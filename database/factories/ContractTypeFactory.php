<?php

namespace Database\Factories;

use App\Models\DedicationTime;
use App\Models\VinculationType;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ContractType>
 */
class ContractTypeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->unique()->jobTitle(),
            'dedication_time_id' => DedicationTime::all()->random()->id,
            'vinculation_type_id' => VinculationType::all()->random()->id
        ];
    }
}
