<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Middleware\RedirectIfAuthenticatedApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(RedirectIfAuthenticatedApi::class)->group(function(){
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
});

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
});