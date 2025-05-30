<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth; 
use App\Http\Controllers\AuthController;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->post('/presence', function (Request $requete) {
    $user = Auth::user(); // Utilisateur authentifié via token Sanctum

    DB::table('presences')->insert([
        'user_id' => $user->id,
        'nom' => $user->nom,
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    return response()->json(['message' => 'Présence enregistrée'], 201);
});
