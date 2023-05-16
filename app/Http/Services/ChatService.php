<?php

namespace App\Http\Services;

use App\Models\Chat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use OpenAI;
use Rubix\ML\Classifiers\GaussianNB;
use Rubix\ML\Datasets\Labeled;
use Rubix\ML\Datasets\Unlabeled;
use Rubix\ML\Pipeline;
use Rubix\ML\Tokenizers\NGram;
use Rubix\ML\Transformers\TextNormalizer;
use Rubix\ML\Transformers\TfIdfTransformer;
use Rubix\ML\Transformers\WordCountVectorizer;
use Rubix\ML\Transformers\ZScaleStandardizer;

class ChatService {

    public static function index() {
        $chats = Chat::all();

        return response()->json([
            'chats' => $chats
        ]);
    }

    public static function chatUsingML(Request $request) {
        $filename = public_path() . "/files/qandas.csv";

        $file = fopen($filename, 'r');

        $samples = [];
        $labels = [];

        if($file){
            while(($row = fgetcsv($file, 1000, ',')) !== false) {
                $samples[] = [$row[0]];
                $labels[] = $row[1];
            }

            fclose($file);
        };

        $pipeline = new Pipeline([
            new TextNormalizer(),
            new WordCountVectorizer(10000, 1, 0.8, new NGram(1, 2)),
            new TfIdfTransformer(),
            new ZScaleStandardizer()
        ], new GaussianNB());

        $dataset = new Labeled($samples, $labels);

        $pipeline->train($dataset);
        
        $question = new Unlabeled([$request->input('question')]);

        $prediction = $pipeline->predict($question);

        Chat::create([
            'ip_address' => $request->ip(),
            'question' => $request->input('question'),
            'answer' => $prediction[0]
        ]);
    }

    public static function chatUsingChatGPT(Request $request) {
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

    public static function delete() {
        Chat::truncate();
    }
}