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

        // Eliminar imagen existente si existe
        if ($user->photo_url) {
            $existingImagePath = public_path('storage/' . $user->photo_url);

            // Verificar si el archivo existe y eliminarlo
            if (file_exists($existingImagePath)) {
                unlink($existingImagePath);
            }
        }

        $file_name = $user->document_number . '_' . date('YmdHis') . '.' . $request['image']->extension();
        $path = 'profile_img';


        $validated['image']->storeAs($path, $file_name, 'public');
        $user->update(['photo_url' => "$path/$file_name"]);

        return redirect()->back()->with('alert', ['status' => 'success', 'content' => 'Imágen actualizada con éxito']);
    }
}
