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

            $table->unsignedMediumInteger('id')->primary();
            $table->char('program_id', 12)->nullable()->comment('Programa al que va dirigida la oferta');
            $table->unsignedSmallInteger('contract_type_id')->comment('Tipo de contrato que tomará de base (dedicación y vinculación que hay)');

            $table->char('title', 100)->comment('Titutlo o encabezado de la oferta laboral.');
            $table->text('description')->comment('Descripción de la oferta laboral.');
            $table->unsignedSmallInteger('vacancies')->comment('Número de vacantes de la oferta laboral.')->nullable();

            $table->unsignedDecimal('monthly_salary', 10, 2)->nullable()->comment('Salario a devengar mensualmente (si hay)');
            $table->date('job_start_date')->nullable()->comment('Inicio del contrato');
            $table->date('job_end_date')->nullable()->comment('Finalización del contrato (si la hay)');
            $table->date('job_offer_start_date')->comment('Fecha de inicio de la oferta');
            $table->date('job_offer_end_date')->nullable()->comment('Fecha de finalización de la oferta');

            $table->unsignedTinyInteger('job_offer_status_id')->comment('Estado de la oferta');
            $table->unsignedInteger('approver_user_id')->nullable()->comment('Usuario que aprueba la oferta');
            $table->timestamp('approved_at')->nullable()->comment('Fecha de aprobación de la oferta');
            $table->unsignedInteger('created_by')->comment('Usuario que crea la oferta');
            $table->timestamps();
            $table->unsignedInteger('deleted_by')->nullable()->comment('Usuario que eliminó la oferta');
            $table->softDeletes();

            $table->foreign('program_id')->references('snies')->on('programs')->onDelete('restrict');
            $table->foreign('contract_type_id')->references('id')->on('contract_types')->onDelete('restrict');
            $table->foreign('job_offer_status_id')->references('id')->on('job_offer_statuses')->onDelete('restrict');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('restrict');
            $table->foreign('approver_user_id')->references('id')->on('users')->onDelete('restrict');
            $table->foreign('deleted_by')->references('id')->on('users')->onDelete('restrict');
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
