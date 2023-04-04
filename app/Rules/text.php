<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\InvokableRule;

class text implements InvokableRule
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
        $regex = '/^[áéíóúÁÉÍÓÚñÑa-zA-Z0-9-.,;\'\"\n ]*$/';
        if (!preg_match($regex, $value)) {
            $fail('El :attribute debe contener únicamente letras, espacios, números, puntos, comas o comillas');
        }
    }
}
