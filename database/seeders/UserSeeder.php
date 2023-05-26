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
            'first_name' => 'Participante',
            'middle_name' => '',
            'first_surname' => 'Participante',
            'middle_surname' => 'Posgrado',
            'document_type_id' => 1,
            'document_number' => 123456789,
            'phone_number' => 3124602837,
            'password' => Hash::make('password'),
            'email' => 'participante@yopmail.com'
        ]);
    }
}
