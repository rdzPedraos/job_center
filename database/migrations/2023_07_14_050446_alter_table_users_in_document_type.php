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
        Schema::create('document_types', function (Blueprint $table) {
            $table->comment('Almacena lost tipos de documento de los usuarios. Solo va guardando la información que vaya consumiendo de otro servicio');
            $table->unsignedTinyInteger('id')->primary();
            $table->string('name', 35);
            $table->string('acronym', 10);
        });

        Schema::table('users', function (Blueprint $table) {
            $table->unsignedTinyInteger('document_type_id')->after('id');
            $table->foreign('document_type_id')->references('id')->on('document_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['document_type_id']);
            $table->dropColumn('document_type_id');
        });

        Schema::dropIfExists('document_types');
    }
};
