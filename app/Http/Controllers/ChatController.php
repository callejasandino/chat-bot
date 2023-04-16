<?php

namespace App\Http\Controllers;

use App\Http\Services\ChatService;
use Illuminate\Http\Request;

class ChatController extends Controller
{

    public function index() {
        return ChatService::index();
    }

    public function store(Request $request) {
        return ChatService::store($request);
    }

    public function delete() {
        return ChatService::delete();
    }
}
