<?php

use App\Http\Controllers\UserController;

// Authentication routes
Route::post('/api/register', [UserController::class, 'register']);
Route::post('/api/login', [UserController::class, 'login']);

// Protected routes (require authentication)
Route::middleware('auth:api')->group(function () {
    Route::post('/api/user/logout', [UserController::class, 'logout']);
    Route::get('/api/user', [UserController::class, 'index']);
    Route::get('/api/user/{id}', [UserController::class, 'show']);
    Route::put('/api/user/{id}', [UserController::class, 'update']);
    Route::delete('/api/user/{id}', [UserController::class, 'destroy']);
});
