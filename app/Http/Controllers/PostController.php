<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function setPostData(Request $request) {
        $post = new Post;
        $post->category_id = $request->category;
        $post->user_id = $request->user;
        $post->content = $request->content;
        $post->save();
        return redirect('api/setPostData');
    }
}
