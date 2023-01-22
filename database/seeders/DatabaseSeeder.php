<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\JobRequest;
use Database\Seeders\ArlSeeder;
use Database\Seeders\EpsSeeder;
use Illuminate\Database\Seeder;
use Database\Seeders\CitySeeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\AddressSeeder;
use Database\Seeders\CountrySeeder;
use Database\Seeders\VaccineSeeder;
use Database\Seeders\RoadTypeSeeder;
use Database\Seeders\ApplicantSeeder;
use Database\Seeders\BloodTypeSeeder;
use Database\Seeders\DepartmentSeeder;
use Database\Seeders\JobRequestSeeder;
use Database\Seeders\PensionFundSeeder;
use Database\Seeders\DocumentTypeSeeder;
use Database\Seeders\StreetPrefixSeeder;
use Database\Seeders\MaritalStatusSeeder;
use Database\Seeders\ApplicantChildSeeder;
use Database\Seeders\ApplicantStudySeeder;
use Database\Seeders\EducationLevelSeeder;
use Database\Seeders\AcademicFacultySeeder;
use Database\Seeders\AcademicProgramSeeder;
use Database\Seeders\ApplicantVaccineSeeder;
use Database\Seeders\JobRequestStatusSeeder;

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
            RoadTypeSeeder::class,
            StreetPrefixSeeder::class,
            AddressSeeder::class,
            EducationLevelSeeder::class,
            ApplicantSeeder::class,
            VaccineSeeder::class,
            ApplicantVaccineSeeder::class,
            ApplicantChildSeeder::class,
            ApplicantStudySeeder::class,
            ContractTypeSeeder::class,
            TemplateContractDetailSeeder::class,
            JobOfferStatusSeeder::class,
            JobOfferSeeder::class,
            OfferDetailSeeder::class,
            ObservationSeeder::class,
            JobRequestStatusSeeder::class,
            JobRequestSeeder::class
        ]);
    }
}
