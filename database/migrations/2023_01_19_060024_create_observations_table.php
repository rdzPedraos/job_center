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
        Schema::create('observations', function (Blueprint $table) {
            $table->comment('Guarda las observaciones realizadas a una oferta laboral');

            $table->unsignedMediumInteger('id', true);
            $table->unsignedMediumInteger('job_offer_id');
            $table->unsignedBigInteger('user_id');
            $table->text('content');
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('job_offer_id')->references('id')->on('job_offers');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('observations');
    }
};
