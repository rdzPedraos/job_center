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
        Schema::create('users', function (Blueprint $table) {
            $table->unsignedInteger('id')->primary();
            $table->unsignedInteger('document_number');
            $table->string('email', 255)->unique();
            $table->string('password', 255);
            
            $table->string('first_name', 30);
            $table->string('middle_name', 30)->nullable();
            $table->string('first_surname', 30);
            $table->string('middle_surname', 30)->nullable();

            $table->string('phone', 20)->nullable();
            $table->string('photo_url', 255)->nullable();

            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
