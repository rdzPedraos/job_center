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

        Arl::create([
            'name' => 'SEGUROS DE VIDA ALFA SA',
            'code' => '14-17',
        ]);

        Arl::create([
            'name' => 'LIBERTY SEGUROS DE VIDA',
            'code' => '14-18',
        ]);

        Arl::create([
            'name' => 'POSITIVA COMPAÑIA DE SEGUROS',
            'code' => '14-23',
        ]);

        Arl::create([
            'name' => 'RIESGOS PROFESIONALES COLMENA SA COMPAÑIA DE SEGUROS DE VIDA',
            'code' => '14-25',
        ]);

        Arl::create([
            'name' => 'ARP SURA',
            'code' => '14-28',
        ]);

        Arl::create([
            'name' => 'LA EQUIDAD SEGUROS DE VIDA ORGANISMO COOPERATIVO LA EQUIDAD VIDA',
            'code' => '14-29',
        ]);

        Arl::create([
            'name' => 'MAPFRE COLOMBIA VIDA SEGUROS SA',
            'code' => '14-30',
        ]);

        Arl::create([
            'name' => 'SEGUROS DE VIDA COLPATRIA SA',
            'code' => '14-4',
        ]);

        Arl::create([
            'name' => 'CIA DE SEGUROS BOLIVAR SA',
            'code' => '14-7',
        ]);

        Arl::create([
            'name' => 'COMPAÑIA DE SEGUROS DE VIDA AURORA',
            'code' => '14-8',
        ]);
    }
}
