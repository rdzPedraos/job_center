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
        $documentTypes = DocumentType::all()->pluck('name', 'id');
        return Inertia::render('Auth/Register', compact('documentTypes'));
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $documentTypes = DocumentType::all()->pluck('id')->toArray();

        $request->validate([
            'first_name' => ['required', 'string', 'max:30'],
            'middle_name' => ['string', 'max:30'],
            'first_surname' => ['required', 'string', 'max:30'],
            'middle_surname' => ['string', 'max:30'],
            'document_type' => ['required', Rule::in($documentTypes)],
            'document_number' => ['required', 'numeric', 'unique:' . User::class],
            'phone_number' => ['required', 'numeric', 'digits_between:10,15'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'first_surname' => $request->first_surname,
            'middle_surname' => $request->middle_surname,
            'document_type_id' => $request->document_type,
            'document_number' => $request->document_number,
            'phone_number' => $request->phone_number,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
