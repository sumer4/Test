<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel Vuex</title>

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <link rel="stylesheet" href="{{ asset('fontawesome-free/css/all.min.css') }}" />

        <link rel="shortcut icon" href="{{ asset('images/laravue.png') }}">

        <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
    </head>
    <body>
        <div id="app" :user="{{ auth()->user() }}"></div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
