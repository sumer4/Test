<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Classes\EloquentVueTables;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::orderBy('id', 'desc')->get();
        return response()->json($users, 200);
    }

    public function getUsers(Request $request)
    {
        $users = new User;
        $table = new EloquentVueTables;
        $data = $table->get($users, ['id', 'name', 'email', 'created_at']);

        return response()->json($data);

        // if($request['query'])
        // {
        //     $users = User::select('id', 'name', 'email')->where('name', 'like', '%' . $request['query'] . '%')->paginate($request->limit ? $request->limit : 5);
        // }
        // elseif($request->orderBy)
        // {
        //     $users = User::select('id', 'name', 'email')->orderBy($request->orderBy, $request->ascending == 1 ? 'ASC' : 'DESC')->paginate($request->limit ? $request->limit : 5);
        // }
        // else
        // {
        //     $users = User::select('id', 'name', 'email')->paginate($request->limit ? $request->limit : 5);
        // }
 
        // return response()->json($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:100',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'role' => 'required'
        ]);

        $user = User::create($request->all());
        return response()->json($user, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $this->validate($request, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $user->id
        ]);

        $user->fill($request->only('name', 'email'));
        $user->save();
        return response()->json($user, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json($user, 200);
    }

    public function search()
    {
        if($search = \Request::get('q'))
        {
            $users = User::where(function($query) use ($search){
                $query->where('name', 'LIKE', "%$search%")
                    ->orWhere('email', 'LIKE', "%$search%");
            })->paginate(10);
        }
        
        return $users;
    }
}
