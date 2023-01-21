<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DocumentType extends Model
{
    use HasFactory;
    public $timestamps = false;

    /**
     * Retrieve the users associated with the document type.
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
