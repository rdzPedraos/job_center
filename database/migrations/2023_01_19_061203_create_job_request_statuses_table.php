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
            $table->unsignedTinyInteger('id', true);
            $table->string('name', 30);
            $table->text('description')->nullable();
            $table->string('color', 7)->default('#fff');
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
