<?php

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

Route::resource('expediente', 'Api\ExpedienteController');
Route::resource('consulta', 'Api\ConsultaController');
Route::resource('unidade-saude', 'Api\UnidadeSaudeController');
Route::resource('tipo-medico', 'Api\TipoMedicoController');