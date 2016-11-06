<?php

namespace App\Http\Controllers\Api;

use App\Models\Expediente;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ExpedienteController extends Controller
{

    public function index(Request $request)
    {
        $query = Expediente::select('*');
        
        if(!empty($request->unidade_saude_id)) {

            $query->where('unidade_saude_id', $request->unidade_saude_id);
        }
        
        if(!empty($request->tipo_medico_id)) {

            $query->where('tipo_medico_id', $request->tipo_medico_id);
        }

        return $query->get();
    }

    public function show($id)
    {
        return Expediente::find($id);
    }
}