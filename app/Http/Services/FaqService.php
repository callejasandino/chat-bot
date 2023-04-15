<?php

namespace App\Http\Services;

use App\Models\Faq;
use Illuminate\Http\Request;

class FaqService {
    public static function index() {
        $faqs = Faq::all();

        return response()->json([
            'faqs' => $faqs
        ]);
    }

    public static function store(Request $request) {
        $faq = Faq::create([
            'question' => $request->input('question'),
            'answer' => $request->input('answer')
        ]);

        return response()->json([
            'faq' => 'Faq entry created.'
        ], 200);
    }

    public static function update($id, $request) {
        $faq = Faq::where('id', $id)->first();

        if(!$faq){
            return response()->json([
                'error' => 'FAQ not Found'
            ]);
        }

        $faq->update([
            'question' => $request->input('question'),
            'answer' => $request->input('answer'),
        ]);
    }

    public static function delete($id) {
        $faq = Faq::where('id', $id)->first();

        if(!$faq){
            return response()->json([
                'error' => 'FAQ not Found'
            ]);
        }

        $faq->delete($id);
    }
}