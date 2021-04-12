<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getPostData', 'PostController@getPostData');
Route::post('/setPostData', 'PostController@setPostData');

Route::get('/getCategoryName/{category_id}', 'CategoryController@getCategoryName');
Route::get('/getPostDataTotalNumInCategory/{category_id}', 'PostController@getPostDataTotalNumInCategory');
Route::get('/getPostDataInCategory/{category_id}', 'PostController@getPostDataInCategory');