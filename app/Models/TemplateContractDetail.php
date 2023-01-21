<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TemplateContractDetail extends Model
{
    use HasFactory;

    public $timestamps = false;

    /**
     * Retrieve the contract type associated with the template contract detail.
     */
    public function contractType()
    {
        return $this->belongsTo(ContractType::class);
    }
}
