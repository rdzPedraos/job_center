<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
    use HasFactory;

    /**
     * Retrieve the user associated with the applicant.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
