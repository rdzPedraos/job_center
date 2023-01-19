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
        Schema::create('applicant_children', function (Blueprint $table) {
            $table->comment('Información de los hijos de los solicitantes');

            $table->unsignedMediumInteger('id', true);
            $table->unsignedBigInteger('applicant_id');
            $table->date('birth_date');
            $table->enum('gender', ['F', 'M']);
            $table->string('first_name', 50);
            $table->string('middle_name', 50)->nullable();
            $table->string('first_surname', 50);
            $table->string('middle_surname', 50)->nullable();
            $table->timestamps();

            $table->foreign('applicant_id')->references('id')->on('applicants');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applicant_children');
    }
};
