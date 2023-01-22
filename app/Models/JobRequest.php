<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobRequest extends Model
{
    use HasFactory;

    public $timestamps = false;

    /**
     * Retrieve the job offer associated with the request
     */
    public function job()
    {
        return $this->belongsTo(JobOffer::class);
    }

    /**
     * Retrieve the applicant that has made the request
     */
    public function applicant()
    {
        return $this->belongsTo(Applicant::class);
    }
}
