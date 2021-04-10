<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function getCategoryName($category_id) {
        $categoryName = Category::where('category_id', $category_id)->first(['category_name']);
        return $categoryName;
    }
}
