<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    public $timestamps = false;

    /**
     * Retrieve the country associated with the department.
     */
    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    /**
     * Retrieve the cities associated with the department.
     */
    public function cities()
    {
        return $this->hasMany(City::class);
    }
}
