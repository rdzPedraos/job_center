<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\InvokableRule;

class onlyAlphaAndSpace implements InvokableRule
{
    /**
     * Run the validation rule.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     * @return void
     */
    public function __invoke($attribute, $value, $fail)
    {
        $regex = '/^[áéíóúÁÉÍÓÚñÑa-zA-Z ]*$/';
        if (!preg_match($regex, $value)) {
            $fail('El :attribute debe contener únicamente letras y espacios');
        }
    }
}
