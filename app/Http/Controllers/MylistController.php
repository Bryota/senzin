<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mylist;

class MylistController extends Controller
{
    public function setMylistData(Request $request) {
        $mylist = new Mylist;
        $mylist->post_id = $request->postId;
        $mylist->user_id = $request->userId;
        $mylist->save();
        redirect('api/setMylistData');
    }

    public function getMylistDataTotalNum($user_id) {
        $mylistData = MyList::where('user_id', $user_id)->with('post:post_id,title,category_id,username,content')->with('post.category:category_id,category_name')->get(['mylist_id']);
        $mylistData = $mylistData->toArray();
        $mylistDataTotalNum = count($mylistData);
        return $mylistDataTotalNum;
    }

    public function getMylistData($user_id) {
        $mylistData = MyList::where('user_id', $user_id)->with('post:post_id,title,category_id,username,content')->with('post.category:category_id,category_name')->simplePaginate(6);
        $mylistData = $mylistData->toArray();
        $mylistData = json_encode($mylistData,JSON_UNESCAPED_UNICODE);
        return $mylistData;
    }

    public function getMylistDataFromCategoryIdTotalNum($user_id, $category_id) {
        $mylistData = MyList::where('user_id', $user_id)
        ->with('post:post_id,title,category_id,username,content')
        ->whereHas('post', function($query) use($category_id){
            $query->where('category_id', $category_id);
        })
        ->with('post.category:category_id,category_name')
        ->get(['mylist_id']);
        $mylistData = $mylistData->toArray();
        $mylistDataTotalNum = count($mylistData);
        return $mylistDataTotalNum;
    }

    public function getMylistDataFromCategoryId($user_id, $category_id) {
        $mylistData = MyList::where('user_id', $user_id)
        ->with('post:post_id,title,category_id,username,content')
        ->whereHas('post', function($query) use($category_id){
            $query->where('category_id', $category_id);
        })
        ->with('post.category:category_id,category_name')
        ->simplePaginate(6);
        $mylistData = $mylistData->toArray();
        $mylistData = json_encode($mylistData,JSON_UNESCAPED_UNICODE);
        return $mylistData;
    }
}
