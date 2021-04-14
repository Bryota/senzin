<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Mylist extends Model
{
    public function post() {
        return $this->belongsTo('App\Models\Post', 'post_id', 'post_id');
    }
}
