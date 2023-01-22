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
        Schema::create('addresses', function (Blueprint $table) {
            $table->comment('Contiene toda la información de una dirección');

            $table->unsignedMediumInteger('id', true);
            $table->unsignedTinyInteger('road_type_id')->comment('Tipo de vía principal');
            $table->string('road_number', 5)->comment('Número de vía principal');
            $table->unsignedTinyInteger('road_prefix_id')->nullable()->comment('Prefijo de vía principal');
            $table->string('generator_road_number', 5)->comment('Número de vía generadora');
            $table->unsignedTinyInteger('generator_road_prefix_id')->nullable()->comment('Prefijo de vía generadora');
            $table->string('plate_number', 5)->comment('Número de la vivienda');
            $table->unsignedSmallInteger('city_id');

            $table->foreign('road_type_id')->references('id')->on('road_types');
            $table->foreign('road_prefix_id')->references('id')->on('street_prefixes');
            $table->foreign('generator_road_prefix_id')->references('id')->on('street_prefixes');
            $table->foreign('city_id')->references('id')->on('cities');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
};
