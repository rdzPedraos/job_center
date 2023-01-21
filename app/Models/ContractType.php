<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContractType extends Model
{
    use HasFactory;

    public $timestamps = false;

    /**
     * Retrieve the vinculation type associated with the contract type.
     */
    public function vinculationType()
    {
        return $this->belongsTo(VinculationType::class);
    }

    /**
     * Retrieve the dedication time associated with the contract type.
     */
    public function dedicationTime()
    {
        return $this->belongsTo(DedicationTime::class);
    }

    /**
     * Retrieve the template contract details associated with the contract type.
     */
    public function templateContractDetails()
    {
        return $this->hasMany(TemplateContractDetail::class);
    }
}
