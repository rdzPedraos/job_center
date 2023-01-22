<?php

namespace Database\Seeders;

use App\Models\StreetPrefix;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class StreetPrefixSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $streetPrefixes = ['A', 'B', 'C', 'BIS'];

        StreetPrefix::insert(array_map(
            fn ($streetPrefix) => [
                'name' => $streetPrefix,
            ],
            $streetPrefixes
        ));
    }
}
