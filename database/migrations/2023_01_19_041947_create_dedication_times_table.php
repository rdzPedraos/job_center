<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dedication_times', function (Blueprint $table) {
            $table->comment('Esta tabla contiene todos los tipos de tiempos de dedicación. Ex: tiempo completo');

            $table->unsignedTinyInteger('id', true);
            $table->string('name', 50)->unique();
            $table->string('acronym', 10)->unique();
            $table->text('description');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dedication_times');
    }
};
