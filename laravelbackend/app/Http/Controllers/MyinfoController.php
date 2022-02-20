<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Myinfo;

class MyinfoController extends Controller
{
    public function index() {
        return Myinfo::all();
    }

    public function update(Request $request, $id) {
        // $myinfo = Myinfo::find('id');
        // $myinfo->intro = $request->input('data');
        // $myinfo->update();

        $request->validate([
            'intro' => 'required',
            ]);
            $myinfo = Myinfo::find($id);
            $myinfo->intro = $request->intro;
            $myinfo->save();
    }
}
