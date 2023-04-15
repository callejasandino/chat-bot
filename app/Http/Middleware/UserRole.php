<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Support\Facades\Auth as AuthUser;

class UserRole
{
    protected $auth;

    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    public function handle($request, Closure $next, $role = null, $guard = null)
    {
        if ($this->auth->guard($guard)->guest()) {
            return response()->json(['error' => 'Unauthorized.'], 401);
        }

        $authUser = AuthUser::user();

        if ($role != $authUser->role->type) {
            return response()->json(['error' => 'Unauthorized.'], 401);
        }

        return $next($request);
    }
}
