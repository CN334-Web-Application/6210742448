<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Myinfo;

class MyinfoController extends Controller
{
    public function index() {
        return Myinfo::all();
    }
}
