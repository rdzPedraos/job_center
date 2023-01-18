<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Database\Seeders\ArlSeeder;
use Database\Seeders\EpsSeeder;
use Illuminate\Database\Seeder;
use Database\Seeders\DocumentTypeSeeder;

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
        $this->call([DocumentTypeSeeder::class, ArlSeeder::class, EpsSeeder::class]);
    }
}
