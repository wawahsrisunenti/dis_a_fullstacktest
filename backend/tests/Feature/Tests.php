<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Book;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ApiTest extends TestCase
{
    use RefreshDatabase;
    
    public function testUserRegistration()
    {
        $response = $this->postJson('/api/register', [
            'name' => 'Wawah Sri Sunenti',
            'email' => 'wawahsrisunenti@gmail.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response->assertStatus(201);
    }

    public function testUserLogin()
    {
        $user = User::factory()->create();

        $response = $this->postJson('/api/login', [
            'email' => $user->email,
            'password' => 'password',
        ]);

        $response->assertStatus(200);
        $this->assertArrayHasKey('token', $response->json());
    }

    public function testUserLogout()
    {
        $user = User::factory()->create();
        $token = $user->createToken('test-token')->plainTextToken;

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->deleteJson('/api/user/logout');

        $response->assertStatus(200);
    }

    public function testCreateBook()
    {
        $user = User::factory()->create();
        $token = $user->createToken('test-token')->plainTextToken;

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->postJson('/api/books/add', [
            'isbn' => '9781491943533',
            'title' => 'Practical Modern JavaScript',
            'author' => 'Nicolás Bevacqua',
        ]);

        $response->assertStatus(200);
        $this->assertArrayHasKey('book', $response->json());
    }

    public function testGetBooks()
    {
        $user = User::factory()->create();
        $token = $user->createToken('test-token')->plainTextToken;

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->getJson('/api/books');

        $response->assertStatus(200);
    }

    public function testUpdateBook()
    {
        $user = User::factory()->create();
        $token = $user->createToken('test-token')->plainTextToken;

        $book = Book::factory()->create(['user_id' => $user->id]);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->putJson('/api/books/' . $book->id . '/edit', [
            'title' => 'Updated Title',
        ]);

        $response->assertStatus(200);
    }

    public function testDeleteBook()
    {
        $user = User::factory()->create();
        $token = $user->createToken('test-token')->plainTextToken;

        $book = Book::factory()->create(['user_id' => $user->id]);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->deleteJson('/api/books/' . $book->id);

        $response->assertStatus(200);
    }
}
