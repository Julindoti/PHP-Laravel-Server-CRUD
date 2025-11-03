<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

Route::get('/signin', function () {
    return Inertia::render('SignInPage');
});
Route::get('/signup', function(){
    return Inertia::render('SignUpPage');
});
Route::get('/homepage', function(){
    return Inertia::render('HomePage');
});
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/api/user/create', [UserController::class , 'store'])->name('user.create');

Route::post('/api/user/login', [UserController::class, 'login'])->name('user.login');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
