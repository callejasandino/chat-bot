<?php

namespace App\Http\Services;

use App\Models\Qanda;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class QandaService {
    public static function index() {
        $qandas = Qanda::all();

        return response()->json([
            'qandas' => $qandas
        ]);
    }

    public static function store(Request $request) {
        $qanda = Qanda::create([
            'question' => $request->input('question'),
            'answer' => $request->input('answer')
        ]);

        return response()->json([
            'qanda' => 'Faq entry created.'
        ], 200);
    }

    public static function update($id, $request) {
        $qanda = Qanda::where('id', $id)->first();

        if(!$qanda){
            return response()->json([
                'error' => 'FAQ not Found'
            ]);
        }

        $qanda->update([
            'question' => $request->input('question'),
            'answer' => $request->input('answer'),
        ]);
    }

    public static function delete($id) {
        $qanda = Qanda::where('id', $id)->first();

        if(!$qanda){
            return response()->json([
                'error' => 'FAQ not Found'
            ]);
        }

        $qanda->delete($id);
    }

    public static function download() {
        
        $qandas = Qanda::all();

        if (!File::exists(public_path()."/files")) {
            File::makeDirectory(public_path() . "/files");
        }

        $fileName = public_path("files/qandas.csv");

        $handle = fopen($fileName, 'w');

        foreach ($qandas as $qanda) {
            fputcsv($handle, [
                $qanda->question,
                $qanda->answer,
            ]);
        }

        fclose($handle);
    }
}