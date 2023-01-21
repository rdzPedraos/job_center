<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicFaculty extends Model
{
    use HasFactory;

    public $timestamps = false;

    /**
     * Retrieve the academic programs associated with the academic faculty.
     */
    public function academicPrograms()
    {
        return $this->hasMany(AcademicProgram::class);
    }
}
