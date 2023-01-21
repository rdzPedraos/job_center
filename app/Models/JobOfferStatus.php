<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobOfferStatus extends Model
{
    use HasFactory;

    public $timestamps = false;

    /**
     * Retrieve the job offers associated with the status.
     */
    public function jobOffers()
    {
        return $this->hasMany(JobOffer::class);
    }
}
