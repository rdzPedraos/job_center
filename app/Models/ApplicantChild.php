<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantChild extends Model
{
    use HasFactory;

    /**
     * Retrieve the applicant associated with the child.
     */
    public function applicant()
    {
        return $this->belongsTo(Applicant::class);
    }
}
