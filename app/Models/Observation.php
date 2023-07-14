<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Observation extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_offer_id',
        'user_id',
        'content',
    ];

    public $timestamps = false;

    /**
     * Retrieve the job offer associated with the observation.
     */
    public function jobOffer()
    {
        return $this->belongsTo(JobOffer::class);
    }

    /**
     * Retrieve the user associated with the observation.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
