<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;

    protected $fillable = [
        'documentable_id',
        'documentable_type',
        'document_url',
        //'deleted_by'
    ];


    /**
     * Defines the model as a result of a polymorphic relationship
     */
    public function documentable()
    {
        return $this->morphTo();
    }

    /**
     * Retrieve the remover user associated with the document.
     */
    public function remover(){
        return $this->belongsTo(User::class, 'deleted_by');
    }
}
