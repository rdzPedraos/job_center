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
        BloodType::withoutEvents(function () {
            $this->createBloodTypes();
        });
    }

    private function createBloodTypes()
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

        foreach ($bloodTypes as $bloodType) {
            BloodType::create(['name' => $bloodType]);
        }
    }
}
