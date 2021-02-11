<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use DB;
use Validator;
use Carbon\Carbon;
use Lang;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Auth\Events\Registered;

class AuthController extends Controller
{
    use AuthenticatesUsers;
    
    public function register(Request $request) 
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|confirmed'
        ]);

        if($validator->fails())
        {
            return response()->json(['error' => $validator->errors()], 422);
        }

        try
        {
            DB::beginTransaction();
            $input = $request->all();
            $input['password'] = bcrypt($input['password']);
            $user = User::create($input);
            DB::commit();
            return response()->json(['success' => 'User registered successfully!'], 200);
        }
        catch(\Exception $e)
        {
            DB::rollback();
            return response()->json(['error' => 'Something went wrong! Please try again!'], 500);
        }
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if($validator->fails())
        {
            return response()->json(['error' => $validator->errors()], 422);
        }
        
        if(!Auth::attempt(['email' => request('email'), 'password' => request('password')]))
        {
            return response()->json(['error' => 'Your email of password is incorrect!'], 401);
        } 
        
        $user = $request->user();

        if ($user)
        {
            $tokenData = $user->createToken('Vuex_practice');
        }

        $token = $tokenData->token;

        if ($request->remember_me)
        {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        if ($token->save())
        {
            return response()->json([
                'user' => $user,
                'access_token' => $tokenData->accessToken,
                'token_type' => 'Bearer',
                'expires_at' => Carbon::parse($tokenData->token->expires_at)->toDateTimeString(),
                'success' => 'You are logged in successfully!'
            ], 200);
        }
        else
        {
            return response()->json(['error' => 'Some error occured. Please try again!'], 500);
        }
    }

    // public function login(Request $request)
    // {
    //     $this->validateLogin($request);

    //     if ($this->hasTooManyLoginAttempts($request))
    //     {
    //         $this->fireLockoutEvent($request);
    //         $seconds = $this->limiter()->availableIn($this->throttleKey($request));

    //         abort(429, Lang::get('auth.throttle', ['seconds' => $seconds]));
    //     }

    //     if ($this->attemptLogin($request))
    //     {
    //         $this->clearLoginAttempts($request);

    //         $user = $this->guard()->user();

    //         return ['user' => $user, 'access_token' => $user->makeApiToken()];
    //     }

    //     $this->incrementLoginAttempts($request);

    //     abort(401, Lang::get('auth.failed'));
    // }

    public function logout(Request $request)
    {
        $request->user()->token()->delete();
        return response()->json(['success' => 'You are logged out successfully!'], 200);
    }
}
