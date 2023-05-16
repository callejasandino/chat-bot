<?php

namespace App\Http\Controllers;

use App\Http\Services\QandaService;
use Illuminate\Http\Request;

class QandaController extends Controller
{
    public function index() {
        return QandaService::index();
    }

    public function store(Request $request) {
        return QandaService::store($request);
    }

    public function update($id, Request $request) {
        return QandaService::update($id, $request);
    }

    public function delete($id) {
        return QandaService::delete($id);
    }

    
    public function download() {
        return QandaService::download();
    }
}
