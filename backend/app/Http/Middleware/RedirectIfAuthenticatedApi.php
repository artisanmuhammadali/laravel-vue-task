<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticatedApi
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
         // For sanctum guard
         if (Auth::guard('sanctum')->check()) {
            return response()->json([
                'message' => 'Already authenticated'
            ], 403); // or 401 depending on your preference
        }

        return $next($request);
    }
}
