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
        Schema::create('contract_types', function (Blueprint $table) {
            $table->unsignedSmallInteger('id', true);
            $table->string('name', 100)->unique();
            $table->unsignedTinyInteger('dedication_time_id');
            $table->unsignedTinyInteger('vinculation_type_id');
            $table->timestamps();

            $table->foreign('vinculation_type_id')->references('id')->on('vinculation_types');
            $table->foreign('dedication_time_id')->references('id')->on('dedication_times');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contract_types');
    }
};
