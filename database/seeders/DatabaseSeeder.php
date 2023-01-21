<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use Database\Seeders\ArlSeeder;
use Database\Seeders\EpsSeeder;
use Illuminate\Database\Seeder;
use Database\Seeders\CitySeeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\CountrySeeder;
use Database\Seeders\BloodTypeSeeder;
use Database\Seeders\DepartmentSeeder;
use Database\Seeders\PensionFundSeeder;
use Database\Seeders\DocumentTypeSeeder;
use Database\Seeders\MaritalStatusSeeder;
use Database\Seeders\AcademicFacultySeeder;
use Database\Seeders\AcademicProgramSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // * When the db is seeded, all the default seeders are executed in the order they are called.
        $this->call([
            DocumentTypeSeeder::class,
            UserSeeder::class,
            ArlSeeder::class,
            EpsSeeder::class,
            BloodTypeSeeder::class,
            MaritalStatusSeeder::class,
            PensionFundSeeder::class,
            CountrySeeder::class,
            DepartmentSeeder::class,
            CitySeeder::class,
            AcademicFacultySeeder::class,
            AcademicProgramSeeder::class,
            VinculationTypeSeeder::class,
            DedicationTimeSeeder::class,
            ContractTypeSeeder::class,
            TemplateContractDetailSeeder::class,
            JobOfferStatusSeeder::class,
            JobOfferSeeder::class,
            OfferDetailSeeder::class,
            ObservationSeeder::class,
        ]);
    }
}
