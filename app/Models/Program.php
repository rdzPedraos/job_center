<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    use HasFactory;

    protected $fillable = [
        'snies',
        'academic_program_name',
        'academic_faculty_name',
    ];

    protected $timestamps = false;

    /**
     * Retrieve the job offers associated with the program.
     */
    public function jobOffers()
    {
        return $this->hasMany(JobOffer::class);
    }
}
