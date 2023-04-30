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
        Schema::create('academic_faculties', function (Blueprint $table) {
            $table->unsignedTinyInteger('id', true);
            $table->string('name', 50)->unique();
            $table->string('color', 7)->unique()->comment('Este atributo es usado como identificador a la hora de filtrar o mostrar las ofertas, debe ser almacenado como hexadecimal');
            $table->string('description')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('academic_faculties');
    }
};
