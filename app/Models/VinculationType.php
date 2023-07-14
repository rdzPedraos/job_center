<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VinculationType extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'acronym',
        'description',
        'is_active',
    ];

    public $timestamps = false;

    /**
     * Retrieve the contract types associated with the vinculation type.
     */
    public function contractTypes()
    {
        return $this->hasMany(ContractType::class);
    }
}
