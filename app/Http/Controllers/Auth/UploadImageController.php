<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UploadImageController extends Controller
{
    public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'image' => ['required', 'file', 'mimes:png,jpg,jpeg', 'max:2000']
        ]);

        $user = $request->user();
        $file_name = $user->document_number . '.' . $request['image']->extension();
        $path = 'profile_img';

        $validated['image']->storeAs($path, $file_name, 'public');
        $user->update(['photo_url' => "$path/$file_name"]);

        return redirect()->back()->with('alert', ['status' => 'success', 'content' => 'Imágen actualizada con éxito']);
    }
}
