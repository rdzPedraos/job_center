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
            ["COOSALUD EPS-S", "900226715"],
            ["NUEVA EPS", "900156264"],
            ["MUTUAL SER", "806008394"],
            ["ALIANSALUD EPS", "830113831"],
            ["SALUD TOTAL EPS S.A.", "800130907"],
            ["EPS SANITAS", "800251440"],
            ["EPS SURA", "800088702"],
            ["FAMISANAR", "830003564"],
            ["SERVICIO OCCIDENTAL DE SALUD EPS SOS", "805001157"],
            ["SALUD MIA", "900914254"],
            ["COMFENALCO VALLE", "890303093"],
            ["COMPENSAR EPS", "860066942"],
            ["EPM - EMPRESAS PUBLICAS DE MEDELLIN", "890904996"],
            ["FONDO DE PASIVO SOCIAL DE FERROCARRILES NACIONALES DE COLOMBIA", "800112806"],
            ["CAJACOPI ATLANTICO", "890102044"],
            ["CAPRESOCA", "891856000"],
            ["COMFACHOCO", "891600091"],
            ["COMFAMILIAR DE LA  GUAJIRA", "892115006"],
            ["COMFAORIENTE", "890500675"],
            ["EPS FAMILIAR DE COLOMBIA (Antes ComfaSucre)", "901543761"],
            ["ASMET  SALUD", "900935126"],
            ["ECOOPSOS ESS EPS-S", "901093846"],
            ["EMSSANAR E.S.S.", "901021565"],
            ["CAPITAL SALUD EPS-S", "900298372"],
            ["SAVIA SALUD EPS", "900604350"],
            ["DUSAKAWI EPSI", "824001398"],
            ["ASOCIACION INDIGENA DEL CAUCA EPSI", "817001773"],
            ["ANAS WAYUU EPSI", "839000495"],
            ["MALLAMAS EPSI", "837000084"],
            ["PIJAOS SALUD EPSI", "809008362"]
        ];

        Eps::insert(array_map(
            fn ($eps) =>
            [
                'name' => $eps[0],
                'nit' => $eps[1],
            ],
            $data
        ));
    }
}
