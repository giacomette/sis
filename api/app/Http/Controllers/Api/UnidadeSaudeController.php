<?php

namespace App\Http\Controllers\Api;

use App\Models\UnidadeSaude;
use App\Http\Controllers\Controller;

class UnidadeSaudeController extends Controller
{

    public function index()
    {
        return UnidadeSaude::all();
    }

    public function show($id)
    {
        return UnidadeSaude::find($id);
    }
}