<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained(); // Foreign key to link book with user
                $table->string('isbn')->unique();
                $table->string('title');
                $table->string('subtitle')->nullable();
                $table->string('author')->nullable();
                $table->dateTime('published')->nullable();
                $table->string('publisher')->nullable();
                $table->integer('pages')->nullable();
                $table->text('description')->nullable();
                $table->string('website')->nullable();
                $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('books');
    }
}
