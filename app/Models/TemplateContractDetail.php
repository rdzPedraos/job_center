<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TemplateContractDetail extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'description',
        'contract_type_id',
        'detail_type'
    ];

    public $timestamps = false;

    /**
     * Retrieve the contract type associated with the template contract detail.
     */
    public function contractType()
    {
        return $this->belongsTo(ContractType::class);
    }
}
