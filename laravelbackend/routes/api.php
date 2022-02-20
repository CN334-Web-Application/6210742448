<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MyinfoController;

Route::get('/myinfo', [MyinfoController::class, 'index']);
// Route::resource('/edit-myinfo', [MyinfoController::class, 'update']);
Route::resource("edit-myinfo", "App\Http\Controllers\MyinfoController");