<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vaccine extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function applicants()
    {
        return $this->belongsToMany(Applicant::class)->withPivot('applicant_id');
    }
}
