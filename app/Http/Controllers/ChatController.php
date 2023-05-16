<?php

namespace App\Http\Controllers;

use App\Http\Services\ChatService;
use Illuminate\Http\Request;

class ChatController extends Controller
{

    public function index() {
        return ChatService::index();
    }

    public function chatUsingML(Request $request) {
        return ChatService::chatUsingML($request);
    }
    
    public function chatUsingChatGPT(Request $request) {
        return ChatService::chatUsingChatGPT($request);
    }

    public function delete() {
        return ChatService::delete();
    }
}
