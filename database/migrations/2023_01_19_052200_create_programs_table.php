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
        Schema::create('programs', function (Blueprint $table) {
            $table->comment('Contiene un historial de los programas académicos que se han relacionado (internos a la u). El listado completo debe ser consumido de otro lado.');
            $table->char('snies', 12)->primary()->comment('Almacena el código SNIES del programa');
            $table->string('academic_program_name', 255)->comment('Almacena el nombre del programa académico');
            $table->string('academic_facultie_name', 255)->comment('Almacena el nombre de la facultad a la que pertenece el programa');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('programs');
    }
};
