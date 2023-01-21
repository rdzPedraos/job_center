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
        // * This is a polymorphic table that stores the documents of the applicants and can be owned by a ApplicantExperience Model or an ApplicantStudy Model

        Schema::create('document_holders', function (Blueprint $table) {
            $table->comment('Almacena los documentos de experiencia laboral y estudios realizados cargados por los aspirantes');

            $table->unsignedInteger('id', true);
            $table->unsignedInteger('documentable_id');
            $table->string('documentable_type', 50);
            $table->string('url');
            $table->timestamp('created_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('document_holders');
    }
};
