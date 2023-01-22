<?php

namespace Database\Factories;

use App\Models\City;
use App\Models\RoadType;
use App\Models\StreetPrefix;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'road_type_id' => RoadType::all()->random()->id,
            'road_number' => fake()->numberBetween(1, 100),
            'road_prefix_id' => StreetPrefix::all()->random()->id,
            'generator_road_number' => fake()->numberBetween(1, 100),
            'generator_road_prefix_id' => StreetPrefix::all()->random()->id,
            'plate_number' => fake()->numberBetween(1, 100),
            'city_id' => City::all()->random()->id,
        ];
    }
}
