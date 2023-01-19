<?php

namespace Database\Seeders;

use App\Models\Arl;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ArlSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // * ----------------------------------------------------------------------
        // * These are the default document types, don't add or remove any of them.
        // * ----------------------------------------------------------------------

        $arls = [
            [
                'SEGUROS DE VIDA ALFA SA',
                '14-17',
            ],

            [
                'LIBERTY SEGUROS DE VIDA',
                '14-18',
            ],

            [
                'POSITIVA COMPAÑIA DE SEGUROS',
                '14-23',
            ],

            [
                'RIESGOS PROFESIONALES COLMENA SA COMPAÑIA DE SEGUROS DE VIDA',
                '14-25',
            ],

            [
                'ARP SURA',
                '14-28',
            ],

            [
                'LA EQUIDAD SEGUROS DE VIDA ORGANISMO COOPERATIVO LA EQUIDAD VIDA',
                '14-29',
            ],

            [
                'MAPFRE COLOMBIA VIDA SEGUROS SA',
                '14-30',
            ],

            [
                'SEGUROS DE VIDA COLPATRIA SA',
                '14-4',
            ],

            [
                'CIA DE SEGUROS BOLIVAR SA',
                '14-7',
            ],

            [
                'COMPAÑIA DE SEGUROS DE VIDA AURORA',
                '14-8',
            ],
        ];

        Arl::insert(
            array_map(
                fn ($arl) =>
                [
                    'name' => $arl[0],
                    'code' => $arl[1],
                ],
                $arls
            )
        );
    }
}
