<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function getCategoryList() {
        $categoryList = Category::get(['category_id', 'category_name']);
        $categoryList = $categoryList->toArray();
        $categoryList = json_encode($categoryList,JSON_UNESCAPED_UNICODE);
        return $categoryList;
    }
}
