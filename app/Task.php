<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $guarded = [];

    public function Project()
    {
        return $this->belongsTo('App\Project');
    }
}
