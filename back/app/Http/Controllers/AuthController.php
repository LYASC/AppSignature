<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Vérification des champs et validations des données envoyer 
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // Chercher le premier utilisateur ayant l'email fourni dans la table users 
        $user = User::where('email', $request->email)->first();

        // Vérifier mot de passe et compare le mot de passe entré avec celui stocké dans la base
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Identifiants incorrects'], 401);
        }

        // crée un token personnel (via Sanctum) et plainTextToken récupère la chaîne de caractères à envoyer au front.
        $token = $user->createToken('api-token')->plainTextToken;

        // Retourner l’utilisateur et le token
        return response()->json([
            'user' => [
                'id' => $user->id,
                'nom' => $user->nom,
                'prenom' => $user->prenom,
                'role' => $user->role,
                'email' => $user->email
            ],
            'token' => $token
        ]);
    }
}
