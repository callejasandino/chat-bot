<?php

namespace App\Http\Services;

use App\Models\Qanda;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;

class AdminService 
{
    public static function login(Request $request){
        $user = User::where('email', $request->input('email'))->first();

        if(!$user){
            return response()->json([
                'error' => 'User not Found!'
            ], 404);
        }

        if ($user && (Hash::check($request->input('password'), $user->password))) {
            $tokeneable = Hash::make($user);
        } else {
            return response()->json([
                'message' => 'Either Email is not associated to any user or incorrect password.',
            ], 404);
        }

        return $user->createToken($tokeneable)->plainTextToken;
    }

    public static function logout() {
        $authUser = Auth::user();

        $authUser->tokens()->delete();
    }  
}