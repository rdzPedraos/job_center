<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Applicant extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'biografy_title',
        'biografy_content',
        'cv_url',
        'birth_location_id',
        'birth_date',
        'document_expedition_location_id',
        'document_expedition_date',
        'address',
        'gender',
        'family_contact_name',
        'family_contact_phone',
        'family_contact_relationship',
        //'deleted_by'
    ];


    /**
     * Retrieve the user associated with the applicant.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'id');
    }

    /**
     * Retrieve the bith location associated with the applicant.
     */
    public function birthLocation(){
        return $this->belongsTo(Location::class, 'birth_location_id');
    }

    /**
     * Retrieve the document expedition location associated with the applicant.
     */
    public function documentExpeditionLocation(){
        return $this->belongsTo(Location::class, 'document_expedition_location_id');
    }

    /**
     * Retrieve the requests associated with the applicant.
     */
    public function requests()
    {
        return $this->hasMany(JobRequest::class, 'applicant_id');
    }

    /**
     * Retrieve the studies associated with the applicant.
     */
    public function studies()
    {
        return $this->hasMany(ApplicantStudy::class);
    }

    /**
     * Retrieve the experiences associated with the applicant.
     */
    public function experiences()
    {
        return $this->hasMany(ApplicantExperience::class);
    }
}
