use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

Route::post('/presence', function (Request $requete) {
    DB::table('presences')->insert([
        'nom' => $requete->input('nom'),
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    return response()->json(['message' => 'Présence enregistrée'], 201);
});
