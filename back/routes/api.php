use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


Route::post('/login', [AuthController::class, 'login']);

Route::post('/presence', function (Request $requete) {
    DB::table('presences')->insert([
        'nom' => $requete->input('nom'),
        'created_at' => now(),
        'updated_at' => now(),
    ]);

    return response()->json(['message' => 'Présence enregistrée'], 201);
});
