<?php

namespace App\Http\Controllers\Api;

use App\Models\Expediente;
use App\Http\Controllers\Controller;

class ExpedienteController extends Controller
{

    public function index()
    {
        return Expediente::all();
    }

    public function show($id)
    {
        return Expediente::find($id);
    }
}