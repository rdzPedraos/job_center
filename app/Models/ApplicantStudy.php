<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantStudy extends Model
{
    use HasFactory;
    protected $fillable = [
        'education_level_id',
        'degree',
        'institution_name',
        'record_number',
        'professional_card_number',
        'start_date',
        'end_date'
    ];

    /**
     * Retrieve the documents uploaded as part of the studies of the applicant
     */
    public function documentHolders()
    {
        return $this->morphMany(DocumentHolder::class, 'documentable');
    }

    /**
     * Retrieve the education level associated with the study.
     */
    public function educationLevel()
    {
        return $this->belongsTo(EducationLevel::class);
    }

    /**
     * Retrieve the applicant associated with the study.
     */
    public function applicant()
    {
        return $this->belongsTo(Applicant::class);
    }
}
