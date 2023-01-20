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
        Schema::create('applicant_studies', function (Blueprint $table) {
            $table->comment('Almacena la información de los estudios de los solicitantes.');

            $table->unsignedInteger('id', true);
            $table->unsignedBigInteger('applicant_id');
            $table->unsignedTinyInteger('education_level_id');
            $table->string('degree');
            $table->string('record_number')->comment('Número de registro del acta de graduación del estudio que se registra.');
            $table->string('professional_card_number')->nullable();
            $table->string('institution_name');
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->boolean('finished')->default(false);
            $table->timestamps();

            $table->foreign('applicant_id')->references('id')->on('applicants');
            $table->foreign('education_level_id')->references('id')->on('education_levels');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applicant_studies');
    }
};
