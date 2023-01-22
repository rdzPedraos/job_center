<?php

namespace Database\Seeders;

use App\Models\RoadType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoadTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roadTypes = [['CALLE', 'CL'], ['CARRERA', 'KR'], ['DIAGONAL', 'DG'], ['TRANSVERSAL', 'TV'], ['AVENIDA', 'AV']];

        RoadType::insert(array_map(
            fn ($roadType) => [
                'name' => $roadType[0],
                'acronym' => $roadType[1],
            ],
            $roadTypes
        ));
    }
}
