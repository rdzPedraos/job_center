<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantStudy extends Model
{
    use HasFactory;

    /**
     * Retrieve the documents uploaded as part of the studies of the applicant
     */
    public function documentHolders()
    {
        return $this->morphMany(DocumentHolder::class, 'documentable');
    }
}
