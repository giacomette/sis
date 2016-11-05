<?php

namespace App\Http\Controllers\Api;

use App\Models\Consulta;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConsultaController extends Controller
{

    public function index()
    {
        return Consulta::all();
    }

    public function show($id)
    {
        return Consulta::find($id);
    }

    public function store(Request $request)
    {
        $consulta = new Consulta;

        if(!empty($request->id)) {

            $consulta = Consulta::find($request->id);
        }

        if(($request->expediente_id) != null) {
            $consulta->expediente_id = $request->expediente_id;
        }

        if(($request->nome) != null) {
            $consulta->nome = $request->nome;
        }

        if(($request->numero_sus) != null) {
            $consulta->numero_sus = $request->numero_sus;
        }

        $consulta->save();
    }
}