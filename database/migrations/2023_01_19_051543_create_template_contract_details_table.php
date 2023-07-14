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
        Schema::create('template_contract_details', function (Blueprint $table) {
            $table->comment('Contiene todos los detalles que de norma general tiene un tipo de contrato (tomando sólo la información como una plantilla)');

            $table->unsignedInteger('id')->primary();
            $table->text('description');
            $table->unsignedSmallInteger('contract_type_id');
            $table->enum('detail_type', ['R', 'F'])->comment('Almacena si el detalle es: R) Requisito para el cargo, F) Función del cargo');

            $table->foreign('contract_type_id')->references('id')->on('contract_types')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('template_contract_details');
    }
};
