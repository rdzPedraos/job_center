<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['alpha', 'min:3', 'max:25'],
            'middle_name' => ['nullable', 'alpha', 'min:4', 'max:30'],
            'first_surname' => ['alpha', 'min:3', 'max:25'],
            'middle_surname' => ['nullable', 'alpha', 'min:4', 'max:30'],
            'document_type_id' => ['exists:document_types,id'],
            'document_number' => ['integer', 'min_digits:4', 'max_digits:10', Rule::unique(User::class)->ignore($this->user()->id)],
            'phone_number' => ['integer', 'digits:10', 'starts_with:3'],
            'email' => ['email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
        ];
    }
}
