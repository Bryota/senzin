<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function getPostData() {
        $postData = Post::with('category:category_id,category_name')->inRandomOrder()->get(['post_id', 'title', 'category_id', 'username', 'content']);
        $postData = $postData->toArray();
        $postData = json_encode($postData,JSON_UNESCAPED_UNICODE);
        return $postData;
    }
    public function setPostData(Request $request) {
        $post = new Post;
        $post->title = $request->title;
        $post->category_id = $request->category;
        $post->username = $request->username;
        $post->content = $request->content;
        $post->save();
        return redirect('api/setPostData');
    }

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
}
