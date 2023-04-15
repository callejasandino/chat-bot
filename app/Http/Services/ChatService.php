<?php

namespace App\Http\Services;

use App\Models\Chat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use OpenAI;

class ChatService {

    public static function index() {
        $chats = Chat::all();

        return response()->json([
            'chats' => $chats
        ]);
    }

    public static function store(Request $request) {
        $yourApiKey = env('OPEN_API_KEY');
        $client = OpenAI::client($yourApiKey);
        
        $result = $client->completions()->create([
            'model' => 'text-davinci-003',
            'prompt' => $request->input('question'),
            'max_tokens' => 2048
        ]);
        
        Chat::create([
            'ip_address' => $request->ip(),
            'question' => $request->input('question'),
            'answer' => $result['choices'][0]['text']
        ]);
    }

    public static function delete($id) {
        $authUser = Auth::user();
        $chat = Chat::where('id', $id)->where('user_id', $authUser->id)->first();
        
        if(!$chat){
            return response()->json([
                'chats' => 'Message not fopund'
            ]);
        }

        $chat->delete();

        return response()->json([
            'chats' => 'Message deleted'
        ]);
    }
}