<?php

namespace Database\Seeders;

use App\Models\BloodType;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class BloodTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bloodTypes = [
            'A+',
            'A-',
            'B+',
            'B-',
            'AB+',
            'AB-',
            'O+',
            'O-',
        ];

        BloodType::insert(
            array_map(
                fn ($bloodType) => ['name' => $bloodType],
                $bloodTypes
            )
        );
    }
}
