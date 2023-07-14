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
        Schema::create('documents', function (Blueprint $table) {
            $table->comment('Almacena los documentos del sistema');

            $table->unsignedInteger('id')->primary();
            $table->unsignedInteger('documentable_id');
            $table->string('documentable_type', 50);
            $table->string('url', 255);

            $table->timestamps();
            $table->unsignedInteger('deleted_by')->nullable()->comment('Usuario que eliminó el registro');
            $table->softDeletes();

            $table->foreign('deleted_by')->references('id')->on('users')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('documents');
    }
};
