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
            $table->integer('document_number')->unique()->unsigned();
            $table->string('first_name', 30);
            $table->string('middle_name', 30)->nullable();
            $table->string('first_surname', 30);
            $table->string('middle_surname', 30)->nullable();
            $table->string('phone_number', 15)->unique();
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
        });
    }
};
