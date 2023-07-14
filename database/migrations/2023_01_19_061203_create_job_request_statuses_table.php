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
        Schema::create('job_request_statuses', function (Blueprint $table) {
            $table->comment('Estados en los que puede estar una solicitud de trabajo');

            $table->unsignedTinyInteger('id')->primary();
            $table->string('name', 30);
            $table->text('description')->nullable();
            $table->string('color', 7)->default('#fff')->comment('Color en hexadecimal representativo. Con el se muestra en la web con color.');
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
        Schema::dropIfExists('job_request_statuses');
    }
};
