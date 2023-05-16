<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\QandaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function ($route) {
    $route->group(['prefix' => 'auth'], function ($route) {
        $route->post('/logout', [AdminController::class, 'logout']);
    });

    $route->group(['prefix' => 'faq'], function ($route){
        $route->post('/store', [FaqController::class, 'store']);
        $route->post('/update/{id}', [FaqController::class, 'update']);
        $route->post('/delete/{id}', [FaqController::class, 'delete']);
    });

    Route::group(['prefix' => 'qandas'], function ($route){
        $route->get('/index', [QandaController::class, 'index']);
        $route->get('/download', [QandaController::class, 'download']);    
        $route->post('/store', [QandaController::class, 'store']);
        $route->post('/update/{id}', [QandaController::class, 'update']);
        $route->post('/delete/{id}', [QandaController::class, 'delete']);
        // $route->post('/register', [AdminController::class, 'login']);
    });
});

Route::group(['prefix' => 'chat'], function ($route){
    $route->get('/', [ChatController::class, 'index']);
    $route->post('/chatUsingML', [ChatController::class, 'chatUsingML']);
    $route->post('/chatUsingChatGPT', [ChatController::class, 'chatUsingChatGPT']);
    $route->post('/delete', [ChatController::class, 'delete']);
});

Route::group(['prefix' => 'faq'], function ($route){
    $route->get('/index', [FaqController::class, 'index']);
});

Route::group(['prefix' => 'auth'], function ($route){
    $route->post('/login', [AdminController::class, 'login']);    
    // $route->post('/register', [AdminController::class, 'login']);
});


