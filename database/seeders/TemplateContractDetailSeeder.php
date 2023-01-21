<?php

namespace Database\Seeders;

use App\Models\TemplateContractDetail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TemplateContractDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TemplateContractDetail::factory(10)->create();
    }
}
