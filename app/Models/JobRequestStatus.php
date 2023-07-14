<?php

namespace App\Models;

use App\Casts\DatabaseString;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobRequestStatus extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'is_active',
        'color'
    ];

    public $timestamps = false;


    /**
     * Retrieve the requests associated with the status
     */
    public function requests()
    {
        return $this->hasMany(JobRequest::class);
    }
}
