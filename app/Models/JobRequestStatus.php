<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobRequestStatus extends Model
{
    use HasFactory;

    public $timestamps = false;

    /**
     * Retrieve the requests associated with the status
     */
    public function requests()
    {
        return $this->hasMany(JobRequest::class);
    }
}
