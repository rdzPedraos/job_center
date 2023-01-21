<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DedicationTime extends Model
{
    use HasFactory;

    public $timestamps = false;

    /**
     * Retrieve the contract types associated with the dedication time.
     */
    public function contractTypes()
    {
        return $this->hasMany(ContractType::class);
    }
}
