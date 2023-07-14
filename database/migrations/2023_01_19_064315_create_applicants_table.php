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
        Schema::create('applicants', function (Blueprint $table) {
            $table->comment('Contiene todos los usuarios que ingresen con el fin de postularse a un cargo');

            $table->unsignedInteger('id')->primary();
            $table->string('biografy_title', 100)->nullable();
            $table->text('biografy_content')->nullable();
            $table->text('cv_url')->nullable();

            $table->unsignedInteger('birth_location_id')->nullable();
            $table->date('birth_date')->nullable();
            
            $table->unsignedInteger('document_expedition_location_id')->nullable();
            $table->date('document_expedition_date')->nullable();

            $table->string('address', 255)->nullable();
            $table->enum('gender', ['M', 'F'])->nullable();
            $table->string('family_contact_name', 100)->nullable();
            $table->string('family_contact_phone', 15)->nullable();
            $table->string('family_contact_relationship', 50)->nullable();

            $table->timestamps();
            $table->unsignedInteger('deleted_by')->nullable();
            $table->softDeletes();
            


            $table->foreign('id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('birth_location_id')->references('id')->on('locations');
            $table->foreign('document_expedition_location_id')->references('id')->on('locations');
            $table->foreign('deleted_by')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applicants');
    }
};
