<?php

namespace App\Http\Controllers\Api;

use App\Models\Consulta;
use App\Models\Expediente;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConsultaController extends Controller
{

    public function index(Request $request)
    {

        if($request->numero_sus) {

            return Consulta::join('expediente as exp', 'exp.id', '=', 'consulta.expediente_id')
                            ->join('unidade_saude as uni', 'uni.id', '=', 'exp.unidade_saude_id')
                            ->join('tipo_medico as tm', 'tm.id', '=', 'exp.tipo_medico_id')
                            ->where('consulta.numero_sus', $request->numero_sus)
                            ->selectRaw('uni.*, consulta.*, exp.data, uni.nome as unidade_saude, tm.nome as tipo_medico, IF(exp.data <= NOW(), 1, 0) as concluido')
                            ->orderBy('exp.data', 'DESC')
                            ->get();
        }

        return []; //Consulta::all();
    }

    public function show($id)
    {
        return Consulta::join('expediente as exp', 'exp.id', '=', 'consulta.expediente_id') 
                        ->where('consulta.id', $id)
                        ->select('consulta.*', 'exp.tipo_medico_id', 'exp.unidade_saude_id', 'exp.vaga')
                        ->first();
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

        $expediente = Expediente::find($consulta->expediente_id);

        if(empty($request->id)) {
            $expediente->vaga = ((int)$expediente->vaga) - 1;
        }

        $consulta->save();
        $expediente->save();

        return $consulta;
    }
}