<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class JobOffer extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'program_id',
        'contract_type_id',
        'title',
        'description',
        'vacancies',
        'monthly_salary',
        'job_start_date',
        'job_end_date',
        'job_offer_start_date',
        'job_offer_end_date',
        'host_user_id',
        'job_offer_status_id',
        'approver_user_id',
        'approved_at',
        'deleted_by'
    ];

    /**
     * Retrieve the details associated wit the offer
     */
    public function details()
    {
        return $this->hasMany(OfferDetail::class);
    }

    /**
     * Retrieve the status of the offer
     */
    public function status()
    {
        return $this->belongsTo(JobOfferStatus::class, 'job_offer_status_id');
    }

    /**
     * Retrieve the observations associated with the offer
     */
    public function observations()
    {
        return $this->hasMany(Observation::class);
    }

    /**
     * Retrieve the user that has created the offer
     */
    public function host()
    {
        return $this->belongsTo(User::class, 'host_user_id');
    }

    /**
     * Retrieve the user that has approved the offer
     */
    public function approver()
    {
        return $this->belongsTo(User::class, 'approver_user_id');
    }

    /**
     * Retrieve the academic program associated with the offer
     */
    public function program()
    {
        return $this->belongsTo(Program::class);
    }

    /**
     * Retrieve the contract type associated with the offer
     */
    public function contractType()
    {
        return $this->belongsTo(ContractType::class);
    }

    /**
     * Retrieve the requests uploaded to the offer
     */
    public function requests()
    {
        return $this->hasMany(JobRequest::class, 'job_offer_id');
    }
}
