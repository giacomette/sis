<?php

namespace App\Http\Controllers\Api;

use App\Models\Campanhas;
use App\Http\Controllers\Controller;

class CampanhasController extends Controller
{

    public function index()
    {
        return Campanhas::all();
    }

    public function show($id)
    {
        return Campanhas::find($id);
    }
}