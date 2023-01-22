<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class JobRequest extends Model
{
    use HasFactory;

    public $timestamps = false;

    /**
     * Retrieve the job offer associated with the request
     */
    public function job()
    {
        return $this->belongsTo(JobOffer::class, 'job_offer_id');
    }

    /**
     * Retrieve the applicant that has made the request
     */
    public function applicant()
    {
        return $this->belongsTo(Applicant::class);
    }

    public function status()
    {
        return $this->belongsTo(JobRequestStatus::class, 'job_request_status_id');
    }
}
