<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ApplicantStudy extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'education_level_id',
        'degree',
        'record_number',
        'professional_card_number',
        'institution_name',
        'modality',
        'location_id',
        'start_date',
        'end_date',
        'finished'
    ];

    /**
     * Retrieve the documents uploaded as part of the studies of the applicant
     */
    public function documents()
    {
        return $this->morphMany(Document::class, 'documentable');
    }

    /**
     * Retrieve the applicant associated with the study.
     */
    public function applicant()
    {
        return $this->belongsTo(Applicant::class);
    }

    /**
     * Retrieve the location associated with the study.
     */
    public function location(){
        return $this->belongsTo(Location::class);
    }

    /**
     * Retrieve the education level associated with the study.
     */
    public function educationLevel()
    {
        //Consumir APIDATA
        return [];
    }
}
