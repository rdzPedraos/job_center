<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    public $timestamps = false;

    /**
     * Retrieve the department associated with the city.
     */
    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
