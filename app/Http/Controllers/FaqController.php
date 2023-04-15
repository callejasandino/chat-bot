<?php

namespace App\Http\Controllers;

use App\Http\Services\FaqService;
use Illuminate\Http\Request;

class FaqController extends Controller
{
    public function index() {
        return FaqService::index();
    }

    public function store(Request $request) {
        return FaqService::store($request);
    }

    public function update($id, Request $request) {
        return FaqService::update($id, $request);
    }

    public function delete($id) {
        return FaqService::delete($id);
    }
}
