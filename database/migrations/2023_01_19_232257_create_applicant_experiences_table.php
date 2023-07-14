<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public $modalities = [
        'TIEMPO COMPLETO',
        'MEDIO TIEMPO',
        'FREELANCE',
        'PASANTÍA',
        'VOLUNTARIADO',
        'CONTRATO',
        'OTRO',
    ];

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applicant_experiences', function (Blueprint $table) {
            $table->comment('Almacena la información de las experiencias laborales de los solicitantes.');

            $table->unsignedInteger('id')->primary();
            $table->unsignedInteger('applicant_id');
            $table->string('company_name', 255);
            $table->enum('modality', $this->modalities);
            $table->unsignedInteger('location_id')->nullable();
            $table->string('position', 255);
            $table->text('description')->nullable();
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->boolean('currently_working')->default(false);

            $table->timestamps();

            $table->foreign('applicant_id')->references('id')->on('applicants');
            $table->foreign('location_id')->references('id')->on('locations');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applicant_experiences');
    }
};
