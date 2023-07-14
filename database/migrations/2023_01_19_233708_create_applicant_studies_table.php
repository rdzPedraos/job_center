<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public $modalities = [
        'PRESENCIAL',
        'SEMIPRESENCIAL',
        'DISTANCIA',
    ];

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applicant_studies', function (Blueprint $table) {
            $table->comment('Almacena la información de los estudios de los solicitantes.');

            $table->unsignedInteger('id')->primary();
            $table->unsignedInteger('applicant_id');
            $table->string('education_level', 255);
            $table->string('degree', 255);
            $table->string('record_number', 255)->comment('Número de registro del acta de graduación del estudio que se registra.');
            $table->string('professional_card_number', 255)->nullable();
            $table->string('institution_name', 255);
            $table->enum('modality', $this->modalities);
            $table->unsignedInteger('location_id')->nullable();

            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->boolean('finished')->default(false);
            
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('applicant_id')->references('id')->on('applicants')->onDelete('cascade');
            $table->foreign('location_id')->references('id')->on('locations')->onDelete('restrict');
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
