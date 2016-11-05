<?php

namespace App\Http\Controllers\Api;

use App\Models\TipoMedico;
use App\Http\Controllers\Controller;

class TipoMedicoController extends Controller
{

    public function index()
    {
        return TipoMedico::all();
    }

    public function show($id)
    {
        return TipoMedico::find($id);
    }
}