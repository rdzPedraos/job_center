<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ApplicantExperience extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'company_name',
        'modality',
        'location_id',
        'position',
        'description',
        'start_date',
        'end_date',
        'currently_working'
    ];


    /**
     * Retrieve the documents uploaded as part of the experience of the applicant
     */
    public function documents()
    {
        return $this->morphMany(Document::class, 'documentable');
    }

    /**
     * Retrieve the applicant associated with the experience.
     */
    public function applicant()
    {
        return $this->belongsTo(Applicant::class);
    }

    /**
     * Retrieve the location associated with the experience.
     */
    public function location(){
        return $this->belongsTo(Location::class);
    }
}
