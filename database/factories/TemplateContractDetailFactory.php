<?php

namespace Database\Factories;

use App\Models\ContractType;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TemplateContractDetail>
 */
class TemplateContractDetailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'description' => $this->faker->sentence,
            'contract_type_id' => ContractType::all()->random()->id,
            'detail_type' => collect(['R', 'F'])->random(),
        ];
    }
}
