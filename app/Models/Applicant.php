<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Applicant extends Model
{
    use HasFactory;

    protected $fillable = [
        'biografy_title',
        'biografy_content',
        'cv_url'
    ];


    /**
     * Retrieve the user associated with the applicant.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Retrieve the blood type associated with the applicant.
     */
    public function bloodType()
    {
        return $this->belongsTo(BloodType::class);
    }

    /**
     * Retrieve the pension fund associated with the applicant.
     */
    public function pensionFund()
    {
        return $this->belongsTo(PensionFund::class);
    }

    /**
     * Retrieve the eps associated with the applicant.
     */
    public function eps()
    {
        return $this->belongsTo(Eps::class);
    }

    /**
     * Retrieve the marital status associated with the applicant.
     */
    public function maritalStatus()
    {
        return $this->belongsTo(MaritalStatus::class);
    }

    /**
     * Retrieve the arl associated with the applicant.
     */
    public function arl()
    {
        return $this->belongsTo(Arl::class);
    }

    /**
     * Retrieve the requests made by the applicant.
     */
    public function requests()
    {
        return $this->hasMany(JobRequest::class, 'applicant_id');
    }

    /**
     * Retrieve the vaccines associated with the applicant.
     */
    public function vaccines()
    {
        return $this->belongsToMany(Vaccine::class)->withPivot('vaccine_id');
    }

    /**
     * Retrieve the children associated with the applicant.
     */
    public function children()
    {
        return $this->hasMany(ApplicantChild::class);
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
