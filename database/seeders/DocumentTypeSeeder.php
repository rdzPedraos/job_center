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

        $documentTypes = [
            [
                'CÉDULA DE CIUDADANÍA',
                'CC',
            ],
            [
                'TARJETA DE IDENTIDAD',
                'TI',
            ],
            [
                'DOCUMENTO DE IDENTIDAD EXTRANJERÍA',
                'DE',
            ],
            [
                'CÉDULA DE EXTRANJERÍA',
                'CE',
            ],
            [
                'PASAPORTE',
                'PS',
            ],
            [
                'CERTIFICADO CABILDO',
                'CA',
            ]
        ];

        DocumentType::insert(array_map(
            fn ($documentType) => [
                'name' => $documentType[0],
                'acronym' => $documentType[1],
            ],
            $documentTypes
        ));
    }
}
