<?php
header("Access-Control-Allow-Origin: *");  
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

use Illuminate\Http\Request;
use App\Models\Expediente;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::get('/expediente', function (Request $request) { });

Route::resource('atividade', 'Api\AtividadeController');
Route::resource('expediente', 'Api\ExpedienteController');
Route::resource('consulta', 'Api\ConsultaController');
Route::resource('unidade-saude', 'Api\UnidadeSaudeController');
Route::resource('tipo-medico', 'Api\TipoMedicoController');
Route::resource('campanhas', 'Api\CampanhasController');