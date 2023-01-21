<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cities = [
            [
                'name' => 'Yopal',
                'department_id' => 1,
                'zip_code' => '8500'
            ],
            [
                'name' => 'Aguazul',
                'department_id' => 1,
                'zip_code' => '8560'
            ],
            [
                'name' => 'Maní',
                'department_id' => 1,
                'zip_code' => '8540'
            ]
        ];

        City::insert($cities);
    }
}
