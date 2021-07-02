<?php

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


Route::post('register','UserController@register');
Route::post('login','UserController@userLogin');
Route::get('getdetails/{id}','UserController@getDetails');


Route::middleware('auth:passport')->get('/user', function (Request $request) {
    return $request->user();


});
//CRUDS
Route::resource('products','ProductController');

