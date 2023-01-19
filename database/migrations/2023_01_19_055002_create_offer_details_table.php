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
        Schema::create('offer_details', function (Blueprint $table) {
            $table->unsignedInteger('id', true);
            $table->text('description');
            $table->unsignedMediumInteger('job_offer_id');
            $table->enum('detail_type', ['R', 'F'])->comment('Almacena si el detalle es: R) Requisito para el cargo, F) Función del cargo');

            $table->foreign('job_offer_id')->references('id')->on('job_offers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offer_details');
    }
};
