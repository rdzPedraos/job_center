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
        Schema::table('users', function (Blueprint $table) {
            $table->unsignedInteger('document_number')->unique();
            $table->string('first_name', 30);
            $table->string('middle_name', 30)->nullable();
            $table->string('first_surname', 30);
            $table->string('middle_surname', 30)->nullable();
            #$table->string('phone_number', 15)->unique();
            $table->string('phone_number', 15);
            $table->boolean('is_active')->default(true);
            $table->string('photo_url')->nullable();
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
            $table->dropColumn('document_number');
            $table->dropColumn('first_name');
            $table->dropColumn('middle_name');
            $table->dropColumn('first_surname');
            $table->dropColumn('middle_surname');
            $table->dropColumn('phone_number');
            $table->dropColumn('is_active');
        });
    }
};
