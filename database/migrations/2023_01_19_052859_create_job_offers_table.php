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
        Schema::create('job_offers', function (Blueprint $table) {
            $table->comment('Almacena todas las ofertas laborales que hayan en el tiempo. Considerando todo su proceso, desde las que están en borrador, activas, o inactivas.');

            $table->unsignedMediumInteger('id', true);
            $table->unsignedTinyInteger('academic_program_id')->comment('Programa al que va dirigida la oferta');
            $table->unsignedSmallInteger('contract_type_id')->comment('Tipo de contrato que tomará de base (dedicación y vinculación que hay)');;
            $table->text('description')->comment('Descripción de la oferta laboral.');

            $table->unsignedInteger('monthly_salary')->nullable()->comment('Salario a devengar mensualmente (si hay)');

            $table->date('job_start_date')->nullable()->comment(('Inicio del contrato'));
            $table->date('job_end_date')->nullable()->comment('Finalización del contrato (si la hay)');
            $table->date('job_offer_start_date')->comment('Fecha de inicio de la oferta');
            $table->date('job_offer_end_date')->nullable()->comment('Fecha de finalización de la oferta');

            $table->unsignedBigInteger('host_user_id')->comment('Usuario que crea la oferta');
            $table->unsignedTinyInteger('job_offer_status_id')->comment('Estado de la oferta');
            $table->unsignedBigInteger('approver_user_id')->nullable()->comment('Usuario que aprueba la oferta');
            $table->timestamp('approved_at')->nullable()->comment('Fecha de aprobación de la oferta');

            $table->timestamps();

            $table->foreign('academic_program_id')->references('id')->on('academic_programs');
            $table->foreign('contract_type_id')->references('id')->on('contract_types');
            $table->foreign('host_user_id')->references('id')->on('users');
            $table->foreign('job_offer_status_id')->references('id')->on('job_offer_statuses');
            $table->foreign('approver_user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('job_offers');
    }
};
