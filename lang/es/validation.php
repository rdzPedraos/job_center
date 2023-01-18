<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => 'El :attribute debe ser aceptado.',
    'accepted_if' => 'El :attribute debe ser aceptado cuando :other es :value.',
    'active_url' => 'El :attribute no es una URL válida.',
    'after' => 'El :attribute debe ser una fecha después de :date.',
    'after_or_equal' => 'El :attribute debe ser una fecha después o igual a :date.',
    'alpha' => 'El :attribute solo debe contener letras.',
    'alpha_dash' => 'El :attribute solo debe contener letras, números, guiones y subrayados.',
    'alpha_num' => 'El :attribute solo debe contener letras y números.',
    'array' => 'El :attribute debe ser un arreglo.',
    'ascii' => 'El :attribute solo debe contener caracteres alfanuméricos y símbolos de un byte.',
    'before' => 'El :attribute debe ser una fecha antes de :date.',
    'before_or_equal' => 'El :attribute debe ser una fecha antes o igual a :date.',
    'between' => [
        'array' => 'El :attribute debe tener entre :min y :max elementos.',
        'file' => 'El :attribute debe pesar entre :min y :max kilobytes.',
        'numeric' => 'El :attribute debe estar entre :min y :max.',
        'string' => 'El :attribute debe tener entre :min y :max caracteres.',
    ],
    'boolean' => 'El campo :attribute debe ser verdadero o falso.',
    'confirmed' => 'La confirmación del :attribute no coincide.',
    'current_password' => 'La contraseña es incorrecta.',
    'date' => 'El :attribute no es una fecha válida.',
    'date_equals' => 'El :attribute debe ser una fecha igual a :date.',
    'date_format' => 'El :attribute no cumple con el formato :format.',
    'decimal' => 'El :attribute debe tener :decimal lugares decimales.',
    'declined' => 'El :attribute debe ser rechazado.',
    'declined_if' => 'El :attribute debe ser rechazado cuando :other es :value.',
    'different' => 'El :attribute y :other deben ser diferentes.',
    'digits' => 'El :attribute debe tener :digits dígitos.',
    'digits_between' => 'El :attribute debe tener entre :min y :max dígitos.',
    'dimensions' => 'El :attribute tiene una resolución de imagen inválida.',
    'distinct' => 'El campo :attribute tiene un valor duplicado.',
    'doesnt_end_with' => 'El :attribute no puede terminar con alguno de los siguientes: :values.',
    'doesnt_start_with' => 'El :attribute no puede comenzar con alguno de los siguientes: :values.',
    'email' => 'El :attribute debe ser una dirección de correo electrónico válida.',
    'ends_with' => 'El :attribute debe terminar con alguno de los siguientes: :values.',
    'enum' => 'El :attribute seleccionado no es válido.',
    'exists' => 'El :attribute seleccionado no es válido.',
    'file' => 'El :attribute debe ser un archivo.',
    'filled' => 'El campo :attribute debe tener un valor.',
    'gt' => [
        'array' => 'El :attribute debe tener más de :value elementos.',
        'file' => 'El :attribute debe pesar más de :value kilobytes.',
        'numeric' => 'El :attribute debe ser mayor a :value.',
        'string' => 'El :attribute debe tener más de :value characters.',
    ],
    'gte' => [
        'array' => 'El :attribute debe tener :value o más elementos.',
        'file' => 'El :attribute debe pesar más de :value kilobytes',
        'numeric' => 'El :attribute debe ser mayor o igual a :value.',
        'string' => 'El :attribute debe ser mayor o igual a :value caracteres.',
    ],
    'image' => 'El :attribute debe ser una imagen.',
    'in' => 'El :attribute seleccionado es inválido.',
    'in_array' => 'El campo :attribute no existe en :other.',
    'integer' => 'El :attribute debe ser un entero.',
    'ip' => 'El :attribute debe ser una dirección IP válida.',
    'ipv4' => 'El :attribute debe ser una dirección IPv4 válida.',
    'ipv6' => 'El :attribute debe ser una dirección IPv6 válida.',
    'json' => 'El :attribute debe ser una cadena JSON válida.',
    'lowercase' => 'El :attribute debe estar en minúsculas.',
    'lt' => [
        'array' => 'El :attribute debe tener menos de :value elementos.',
        'file' => 'El :attribute debe pesar menos de :value kilobytes.',
        'numeric' => 'El :attribute debe ser menor a :value.',
        'string' => 'El :attribute debe tener menos de :value caracteres.'
    ],
    'lte' => [
        'array' => 'El campo :attribute no debe tener más de :value elementos.',
        'file' => 'El archivo :attribute debe ser menor o igual a :value kilobytes.',
        'numeric' => 'El campo :attribute debe ser menor o igual a :value.',
        'string' => 'El campo :attribute debe ser menor o igual a :value caracteres.',
    ],
    'mac_address' => 'El campo :attribute debe ser una dirección MAC válida.',
    'max' => [
        'array' => 'El campo :attribute no debe tener más de :max elementos.',
        'file' => 'El archivo :attribute no debe ser mayor a :max kilobytes.',
        'numeric' => 'El campo :attribute no debe ser mayor a :max.',
        'string' => 'El campo :attribute no debe ser mayor a :max caracteres.',
    ],
    'max_digits' => 'El campo :attribute no debe tener más de :max dígitos.',
    'mimes' => 'El archivo :attribute debe ser de tipo: :values.',
    'mimetypes' => 'El archivo :attribute debe ser de tipo: :values.',
    'min' => [
        'array' => 'El campo :attribute debe tener al menos :min elementos.',
        'file' => 'El archivo :attribute debe ser al menos :min kilobytes.',
        'numeric' => 'El campo :attribute debe ser al menos :min.',
        'string' => 'El campo :attribute debe tener al menos :min caracteres.',
    ],
    'min_digits' => 'El campo :attribute debe tener al menos :min dígitos.',
    'multiple_of' => 'El campo :attribute debe ser múltiplo de :value.',
    'not_in' => 'El campo :attribute seleccionado es inválido.',
    'not_regex' => 'El formato del campo :attribute es inválido.',
    'numeric' => 'El campo :attribute debe ser un número.',
    'password' => [
        'letters' => 'El campo :attribute debe contener al menos una letra.',
        'mixed' => 'El campo :attribute debe contener al menos una letra mayúscula y una minúscula.',
        'numbers' => 'El campo :attribute debe contener al menos un número.',
        'symbols' => 'The campo :attribute debe contener al menos un símbolo.',
        'uncompromised' => 'El valor del campo :attribute dado ha aparecido en una filtración de datos. Por favor ingresa un :attribute diferente.',
    ],
    'present' => 'The campo :attribute debe estar presente.',
    'prohibited' => 'El campo :attribute no está permitido.',
    'prohibited_if' => 'El campo :attribute no está permitido cuando :other es :value.',
    'prohibited_unless' => 'El campo :attribute no está permitido si :other no está en :values.',
    'prohibits' => 'El campo :attribute no permite que :other esté presente.',
    'regex' => 'El formato del campo :attribute no es válido.',
    'required' => 'El campo :attribute es requerido.',
    'required_array_keys' => 'El campo :attribute debe contener entradas para: :values.',
    'required_if' => 'El campo :attribute es requerido cuando el campo :other es :value.',
    'required_if_accepted' => 'El campo :attribute es requerido cuando :other es aceptado.',
    'required_unless' => 'El campo :attribute es requerido a menos que :other esté presente en :values.',
    'required_with' => 'El campo :attribute es requerido cuando :values está presente.',
    'required_with_all' => 'El campo :attribute es requerido cuando :values está presente.',
    'required_without' => 'El campo :attribute es requerido cuando :values no está presente.',
    'required_without_all' => 'El campo :attribute es requerido cuando ningún :values está presente.',
    'same' => 'El campo :attribute y :other debe coincidir.',
    'size' => [
        'numeric' => 'El campo :attribute debe ser :size.',
        'file' => 'El campo :attribute debe tener :size kilobytes.',
        'string' => 'El campo :attribute debe tener :size caracteres.',
        'array' => 'El campo :attribute debe contener :size elementos.',
    ],
    'starts_with' => 'El :attribute debe empezar con uno de los siguientes valores :values',
    'string' => 'El campo :attribute debe ser una cadena.',
    'timezone' => 'El campo :attribute debe ser una zona válida.',
    'unique' => 'El campo :attribute ya ha sido tomado.',
    'uploaded' => 'El campo :attribute no ha podido ser cargado.',
    'uppercase' => 'El campo :attribute debe estar en mayúscula.',
    'url' => 'El formato de :attribute no es válido.',
    'uuid' => 'El :attribute debe ser un UUID valido.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];
