<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicProgram extends Model
{
    use HasFactory;

    public $timestamps = false;

    /**
     * Retrieve the academic faculty associated with the academic program.
     */
    public function academicFaculty()
    {
        return $this->belongsTo(AcademicFaculty::class);
    }
}
