<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Casts\DatabaseString;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'document_type_id',
        'document_number',
        'email',
        'password',
        'first_name',
        'middle_name',
        'first_surname',
        'middle_surname',
        'phone_number',
        'photo_url',
    ];
    protected $appends = ['name'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_active' => 'boolean',
        'first_name' => DatabaseString::class,
        'middle_name' => DatabaseString::class,
        'first_surname' => DatabaseString::class,
        'middle_surname' => DatabaseString::class,
    ];

    public function getNameAttribute(): string
    {
        $n = $this->first_name . ($this->middle_name ? ' ' : '') . $this->middle_name;
        $n .= ' ' . $this->first_surname . ($this->middle_surname ? ' ' : '') . $this->middle_surname;
        return $n;
    }


    /**
     * Retrieve the applicant associated with the user.
     */
    public function applicant()
    {
        return $this->hasOne(Applicant::class);
    }

    /**
     * Retrieve the documents type of the user.
     */
    public function documentType(){
        return $this->belongsTo(DocumentType::class);
    }

    /**
     * Retrieve the observations made by the user.
     */
    public function observations()
    {
        return $this->hasMany(Observation::class);
    }

     /**
     * Retrieve the applicants deleted by the user.
     */
    public function applicantsDeleted()
    {
        return $this->hasMany(Applicant::class, 'deleted_by');
    }

    /**
     * Retrieve the documents deleted by the user.
     */
    public function documentsDeleted(){
        return $this->hasMany(Document::class, 'deleted_by');
    }
}
