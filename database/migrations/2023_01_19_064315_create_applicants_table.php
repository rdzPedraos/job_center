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

            $table->unsignedBigInteger('id', true);
            $table->unsignedBigInteger('user_id')->unique()->comment('Llave foránea de la tabla users');

            $table->unsignedSmallInteger('birth_place_id')->nullable();
            $table->date('birth_date')->nullable();
            $table->unsignedSmallInteger('document_issue_city_id')->nullable();
            $table->date('document_expedition_date')->nullable();
            $table->unsignedMediumInteger('address_id')->nullable();
            $table->unsignedTinyInteger('marital_status_id')->nullable();
            $table->unsignedTinyInteger('blood_type_id')->nullable();
            $table->enum('gender', ['M', 'F'])->nullable();
            $table->unsignedTinyInteger('eps_id')->nullable();
            $table->unsignedTinyInteger('pension_fund_id')->nullable();
            $table->unsignedTinyInteger('arl_id')->nullable();
            $table->string('military_passbook_number', 20)->nullable();
            $table->string('family_contact_name', 100)->nullable();
            $table->string('family_contact_phone', 15)->nullable();
            $table->string('family_contact_relationship', 50)->nullable();
            $table->timestamps();
            $table->string('biografy_title', 100)->nullable();
            $table->string('biografy_content', 1000)->nullable();

            $table->text('cv_url')->nullable();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('birth_place_id')->references('id')->on('cities');
            $table->foreign('document_issue_city_id')->references('id')->on('cities');
            $table->foreign('address_id')->references('id')->on('addresses');
            $table->foreign('marital_status_id')->references('id')->on('marital_statuses');
            $table->foreign('blood_type_id')->references('id')->on('blood_types');
            $table->foreign('eps_id')->references('id')->on('eps');
            $table->foreign('pension_fund_id')->references('id')->on('pension_funds');
            $table->foreign('arl_id')->references('id')->on('arls');
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
