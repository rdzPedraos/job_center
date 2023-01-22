<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantExperience extends Model
{
    use HasFactory;

    /**
     * Retrieve the documents uploaded as part of the experience of the applicant
     */
    public function documentHolders()
    {
        return $this->morphMany(DocumentHolder::class, 'documentable');
    }

    /**
     * Retrieve the applicant associated with the experience.
     */
    public function applicant()
    {
        return $this->belongsTo(Applicant::class);
    }
}
