<?php

namespace App\Models;

use App\Casts\DatabaseString;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobRequestStatus extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_active' => 'boolean',
        'name' => DatabaseString::class,
    ];

    /**
     * Retrieve the requests associated with the status
     */
    public function requests()
    {
        return $this->hasMany(JobRequest::class);
    }
}
