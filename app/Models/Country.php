<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    public $timestamps = false;

    /**
     * Retrieve the departments associated with the country.
     */
    public function departments()
    {
        return $this->hasMany(Department::class);
    }
}
