<?php

namespace App\Http\Controllers;

use App\Http\Services\AdminService;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function login(Request $request) {
        return AdminService::login($request);
    }

    public function logout() {
        return AdminService::logout();
    }
}
