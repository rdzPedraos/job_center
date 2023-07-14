<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $fillable = [
        'country',
        'province',
        'city',
    ];

    /**
     * Retrieve the applicants associated with the location.
     */
    public function applicants(){
        return $this->hasMany(Applicant::class);
    }

    /**
     * Retrieve the studies associated with the location.
     */
    public function studies(){
        return $this->hasMany(ApplicantStudy::class);
    }

    /**
     * Retrieve the experiences associated with the location.
     */
    public function experiences(){
        return $this->hasMany(ApplicantExperience::class);
    }
}
