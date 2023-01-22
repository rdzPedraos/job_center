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
        Schema::create('job_requests', function (Blueprint $table) {
            $table->comment('Aplicaciones que un participante hace a una oferta de trabajo. (Una oferta puede tener muchas aplicaciones, y un participante puede aplicar a muchas ofertas.');

            $table->unsignedMediumInteger('id', true);
            $table->unsignedBigInteger('applicant_id');
            $table->unsignedTinyInteger('job_request_status_id');
            $table->unsignedMediumInteger('job_offer_id');
            $table->json('applicant_history')->nullable();
            $table->timestamp('created_at')->useCurrent();

            $table->foreign('applicant_id')->references('id')->on('applicants');
            $table->foreign('job_request_status_id')->references('id')->on('job_request_statuses');
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
        Schema::dropIfExists('job_requests');
    }
};
