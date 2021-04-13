<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    //top
    public function getPostData() {
        $postData = Post::with('category:category_id,category_name')->inRandomOrder()->get(['post_id', 'title', 'category_id', 'username', 'content']);
        $postData = $postData->toArray();
        $postData = json_encode($postData,JSON_UNESCAPED_UNICODE);
        return $postData;
    }

    //post
    public function setPostData(Request $request) {
        $post = new Post;
        $post->title = $request->title;
        $post->category_id = $request->category;
        $post->username = $request->username;
        $post->content = $request->content;
        $post->save();
        return redirect('api/setPostData');
    }

    //category
    public function getPostDataTotalNumInCategory($category_id) {
        $totalDataNum = Post::where('category_id', $category_id)->get('post_id');
        $totalDataNum = $totalDataNum->toArray();
        $totalDataNum = count($totalDataNum);
        return $totalDataNum;
    }

    public function getPostDataInCategory($category_id) {
        $postData = Post::where('category_id', $category_id)->simplePaginate(6);
        return $postData;
    }

    //search
    public function getResultPostDataTotalNum(Request $request) {
        $category_id = $request->category_id;
        $freeword = $request->freeword;
        $resultPostData = Post::where('category_id', $category_id)->where('content', 'like', "%$freeword%")->get();
        $resultPostData = $resultPostData->toArray();
        $resultPostDataTotalNum = count($resultPostData);
        return $resultPostDataTotalNum;
    }

    public function getResultPostData(Request $request) {
        $category_id = $request->category_id;
        $freeword = $request->freeword;
        $resultPostData = Post::where('category_id', $category_id)->where('content', 'like', "%$freeword%")->with('category:category_id,category_name')->simplePaginate(6);
        $resultPostData = $resultPostData->toArray();
        $resultPostData = json_encode($resultPostData,JSON_UNESCAPED_UNICODE);
        return $resultPostData;
    }
}
