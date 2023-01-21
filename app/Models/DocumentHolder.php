<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DocumentHolder extends Model
{
    use HasFactory;

    /**
     * Defines the model as a result of a polymorphic relationship
     */
    public function documentable()
    {
        return $this->morphTo();
    }
}
