<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobOffer extends Model
{
    use HasFactory;

    /**
     * Retrieve the details associated wit the offer
     */
    public function details()
    {
        return $this->hasMany(OfferDetail::class);
    }

    /**
     * Retrieve the status of the offer
     */
    public function status()
    {
        return $this->belongsTo(JobOfferStatus::class);
    }

    /**
     * Retrieve the observations associated with the offer
     */
    public function observations()
    {
        return $this->hasMany(Observation::class);
    }

    /**
     * Retrieve the user that has created the offer
     */
    public function host()
    {
        return $this->belongsTo(User::class, 'host_user_id');
    }

    /**
     * Retrieve the user that has approved the offer
     */
    public function approver()
    {
        return $this->belongsTo(User::class, 'approver_user_id');
    }
}
