<?php

namespace Database\Seeders;

use App\Models\PensionFund;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PensionFundSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $funds = [
            ["230201", "ADMINISTRADORA DE FONDOS DE PENSIONES Y CESANTÍA PROTECCIÓN SA"],
            ["230301", "SOCIEDAD ADMINISTRADORA DE FONDOS DE PENSIONES Y CESANTÍAS PORVENIR SA"],
            ["230901", "OLD MUTUAL ADMINISTRADORA DE FONDOS DE PENSIONES Y CESANTÍAS SA"],
            ["230904", "OLD MUTUAL ALTERNATIVO"],
            ["231001", "COMPAÑIA COLOMBIANA ADMINISTRADORA DE FONDOS DE PENSIONES Y CESANTÍAS SA COLFONDOS"],
            ["25-14", "ADMINISTRADORA COLOMBIANA DE PENSIONES – COLPENSIONES"],
            ["25-2", "CAJA DE AUXILIOS Y PRESTACIONES DE LA ASOCIACIÓN COLOMBIANA DE AVIADORES CIVILES ACDAC CAXDAC"],
            ["25-3", "FONDO DE PREVISION SOCIAL DEL CONGRESO DE LA REPUBLICA FONPRECON"],
            ["25-7", "PENSIONES DE ANTIOQUIA"],
            ["RES002", "ECOPETROL"],
            ["RES004", "FONDO DE PRESTACIONES SOCIALES DEL MAGISTERIO"]
        ];

        PensionFund::withoutEvents(function () use ($funds) {
            foreach ($funds as $fund) {
                PensionFund::create([
                    'code' => $fund[0],
                    'name' => $fund[1]
                ]);
            }
        });
    }
}
