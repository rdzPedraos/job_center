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
        Schema::create('vinculation_types', function (Blueprint $table) {
            $table->comment('Esta tabla contiene todos los tipos de vinculación que existen ej: Contratista, Por planta');

            $table->unsignedTinyInteger('id')->primary();
            $table->string('name', 50)->unique();
            $table->string('acronym', 10)->unique();
            $table->text('description');
            $table->boolean('is_active')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vinculation_types');
    }
};
