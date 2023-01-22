<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory(10)->create();

        User::create([
            'first_name' => 'Admin',
            'middle_name' => 'Admin',
            'first_surname' => 'Admin',
            'middle_surname' => 'Admin',
            'document_type_id' => 1,
            'document_number' => 123456789,
            'phone_number' => 123456789,
            'password' => Hash::make('password'),
            'email' => 'participante@yopmail.com'
        ]);
    }
}
