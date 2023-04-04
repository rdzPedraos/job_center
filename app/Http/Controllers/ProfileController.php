<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class ProfileController extends Controller
{
    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();
        return redirect()->back()->with('msg', ['status'=>'success', 'content'=>'Usuario actualizado con éxito!']);
    }

    /**
     * Display the user's profile form.
     */
    /* public function edit(Request $request): Response
    {
        return Inertia::render('UserConfig/Config', [
            'documentTypes' => DocumentType::all(),
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    } */


    /**
     * Delete the user's account.
     */
    /* public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    } */
}
