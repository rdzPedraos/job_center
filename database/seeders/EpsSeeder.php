<?php

namespace Database\Seeders;

use App\Models\Eps;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class EpsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $data = [
            [
                "name" => "COOSALUD EPS-S",
                "nit" => "900226715"
            ],
            [
                "name" => "NUEVA EPS",
                "nit" => "900156264"
            ],
            [
                "name" => "MUTUAL SER",
                "nit" => "806008394"
            ],
            [
                "name" => "ALIANSALUD EPS",
                "nit" => "830113831"
            ],
            [
                "name" => "SALUD TOTAL EPS S.A.",
                "nit" => "800130907"
            ],
            [
                "name" => "EPS SANITAS",
                "nit" => "800251440"
            ],
            [
                "name" => "EPS SURA",
                "nit" => "800088702"
            ],
            [
                "name" => "FAMISANAR",
                "nit" => "830003564"
            ],
            [
                "name" => "SERVICIO OCCIDENTAL DE SALUD EPS SOS",
                "nit" => "805001157"
            ],
            [
                "name" => "SALUD MIA",
                "nit" => "900914254"
            ],
            [
                "name" => "COMFENALCO VALLE",
                "nit" => "890303093"
            ],
            [
                "name" => "COMPENSAR EPS",
                "nit" => "860066942"
            ],
            [
                "name" => "EPM - EMPRESAS PUBLICAS DE MEDELLIN",
                "nit" => "890904996"
            ],
            [
                "name" => "FONDO DE PASIVO SOCIAL DE FERROCARRILES NACIONALES DE COLOMBIA",
                "nit" => "800112806"
            ],
            [
                "name" => "CAJACOPI ATLANTICO",
                "nit" => "890102044"
            ],
            [
                "name" => "CAPRESOCA",
                "nit" => "891856000"
            ],
            [
                "name" => "COMFACHOCO",
                "nit" => "891600091"
            ],
            [
                "name" => "COMFAMILIAR DE LA  GUAJIRA",
                "nit" => "892115006"
            ],
            [
                "name" => "COMFAORIENTE",
                "nit" => "890500675"
            ],
            [
                "name" => "EPS FAMILIAR DE COLOMBIA (Antes ComfaSucre)",
                "nit" => "901543761"
            ],
            [
                "name" => "ASMET  SALUD",
                "nit" => "900935126"
            ],
            [
                "name" => "ECOOPSOS ESS EPS-S",
                "nit" => "901093846"
            ],
            [
                "name" => "EMSSANAR E.S.S.",
                "nit" => "901021565"
            ],
            [
                "name" => "CAPITAL SALUD EPS-S",
                "nit" => "900298372"
            ],
            [
                "name" => "SAVIA SALUD EPS",
                "nit" => "900604350"
            ],
            [
                "name" => "DUSAKAWI EPSI",
                "nit" => "824001398"
            ],
            [
                "name" => "ASOCIACION INDIGENA DEL CAUCA EPSI",
                "nit" => "817001773"
            ],
            [
                "name" => "ANAS WAYUU EPSI",
                "nit" => "839000495"
            ],
            [
                "name" => "MALLAMAS EPSI",
                "nit" => "837000084"
            ],
            [
                "name" => "PIJAOS SALUD EPSI",
                "nit" => "809008362"
            ]
        ];

        Eps::insert($data);
    }
}
