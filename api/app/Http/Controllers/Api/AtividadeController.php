<?php

namespace App\Http\Controllers\Api;
 
use App\Models\PessoaAtividade;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AtividadeController extends Controller
{

    public function index(Request $request)
    {

        if($request->numero_sus) {

            return PessoaAtividade::join('pessoa as p', 'p.id', '=', 'pessoa_atividade.pessoa_id')
                            ->join('atividade as at', 'at.id', '=', 'pessoa_atividade.atividade_id')
                            ->where('p.numero_sus', $request->numero_sus)
                            ->selectRaw('
                                p.nome, 
                                p.id, 
                                pessoa_atividade.concluido, 
                                pessoa_atividade.data_concluido, 
                                TIMESTAMPDIFF(MONTH, p.data_nascimento, NOW()) as idade_pessoa,
                                DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(), p.data_nascimento)),"%Y")+0 AS anos,
                                at.nome as atividade, at.idade, at.doses, at.combate')
                            ->orderBy('at.id', 'ASC')
                            ->get();
        }

        return [];
    }

    public function store(Request $request)
    {
        $pessoa_atividade = new PessoaAtividade;

        if(!empty($request->id)) {

            $pessoa_atividade = PessoaAtividade::find($request->id);
        }  

        if(($request->concluido) != null) {
            $pessoa_atividade->concluido = $request->concluido;
        }
  
        $pessoa_atividade->save(); 

        return $pessoa_atividade;
    }
}