<?php

use Illuminate\Http\Request;

Route::post('login', 'Api\AuthController@login');
Route::post('register', 'Api\AuthController@register');

Route::group(['middleware' => 'auth:api'], function() {
	Route::get('logout', 'Api\AuthController@logout');
	Route::apiResources(['user' => 'Api\UserController']);
	Route::get('/users', 'Api\UserController@getUsers');
	Route::get('findUser', 'Api\UserController@search');
});
