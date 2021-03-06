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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/getPostData', 'PostController@getPostData');
Route::post('/setPostData', 'PostController@setPostData');

Route::get('/getCategoryName/{category_id}', 'CategoryController@getCategoryName');
Route::get('/getPostDataTotalNumInCategory/{category_id}', 'PostController@getPostDataTotalNumInCategory');
Route::get('/getPostDataInCategory/{category_id}', 'PostController@getPostDataInCategory');
Route::post('/getResultPostDataTotalNum', 'PostController@getResultPostDataTotalNum');
Route::post('/getResultPostData', 'PostController@getResultPostData');
Route::get('/getSinglePostData/{id}', 'PostController@getSinglePostData');
Route::post('/setNewUser', 'RegisterController@create');
Route::post('/checkLoginUser', 'LoginController@checkLoginUser');
Route::post('/setMylistData', 'MylistController@setMylistData');
Route::get('/getMylistDataTotalNum/{user_id}', 'MylistController@getMylistDataTotalNum');
Route::get('/getMylistData/{user_id}', 'MylistController@getMylistData');
Route::get('/getMylistDataFromCategoryIdTotalNum/{user_id}/{category_id}', 'MylistController@getMylistDataFromCategoryIdTotalNum');
Route::get('/getMylistDataFromCategoryId/{user_id}/{category_id}', 'MylistController@getMylistDataFromCategoryId');
Route::get('/checkMylistData/{user_id}/{post_id}', 'MylistController@checkMylistData');
