<?php

namespace Database\Seeders;

use App\Models\DocumentType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DocumentTypeSeeder extends Seeder
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

        DocumentType::create([
            'name' => 'CÉDULA DE CIUDADANÍA',
            'acronym' => 'CC',
        ]);

        DocumentType::create([
            'name' => 'TARJETA DE IDENTIDAD',
            'acronym' => 'TI',
        ]);

        DocumentType::create([
            'name' => 'DOCUMENTO DE IDENTIDAD EXTRANJERÍA',
            'acronym' => 'DE',
        ]);

        DocumentType::create([
            'name' => 'CÉDULA DE EXTRANJERÍA',
            'acronym' => 'CE',
        ]);

        DocumentType::create([
            'name' => 'PASAPORTE',
            'acronym' => 'PS',
        ]);

        DocumentType::create([
            'name' => 'CERTIFICADO CABILDO',
            'acronym' => 'CA',
        ]);
    }
}
