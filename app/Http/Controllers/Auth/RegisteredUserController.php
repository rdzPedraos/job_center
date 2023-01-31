<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\DocumentType;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        $documentTypes = DocumentType::select('name', 'id')->get();
        return Inertia::render('Auth/Register', compact('documentTypes'));
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'first_name' => ['required', 'alpha', 'min:3', 'max:25'],
            'middle_name' => ['nullable', 'alpha', 'min:4', 'max:30'],
            'first_surname' => ['required', 'alpha', 'min:3', 'max:25'],
            'middle_surname' => ['nullable', 'alpha', 'min:4', 'max:30'],
            'document_type_id' => ['required', 'exists:document_types,id'],
            'document_number' => ['required', 'integer', 'min_digits:4', 'max_digits:10', 'unique:users'],
            'phone_number' => ['required', 'integer', 'digits:10', 'starts_with:3'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        /* $user = User::create([
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'first_surname' => $request->first_surname,
            'middle_surname' => $request->middle_surname,
            'document_type_id' => $request->document_type,
            'document_number' => $request->document_number,
            'phone_number' => $request->phone_number,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]); */

        $user = User::create($validated);
        event(new Registered($user));

        Auth::login($user);
        return redirect(RouteServiceProvider::HOME);
    }
}
