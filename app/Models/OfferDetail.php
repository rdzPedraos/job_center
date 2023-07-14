<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfferDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_offer_id',
        'description',
        'detail_type'
    ];

    public $timestamps = false;

    /**
     * Retrieve the job offer associated with the offer detail.
     */
    public function jobOffer()
    {
        return $this->belongsTo(JobOffer::class);
    }
}
