<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Ryan Basadre </title>

        <link href="{{asset('css/app.css')}}" rel="stylesheet"/> 
        <link rel="icon" href="{{asset('lte/ryan.jpg')}}" type="image/logo.ico"/>
        <link rel="stylesheet" href="{{asset('lte/plugins/fontawesome-free/css/all.min.css')}}">
        <link rel="stylesheet" href="{{asset('lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css')}}">
        <link rel="stylesheet" href="{{asset('lte/plugins/jqvmap/jqvmap.min.css')}}">
        <link rel="stylesheet" href="{{asset('lte/dist/css/adminlte.min.css')}}">
        <link rel="stylesheet" href="{{asset('lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css')}}">
        <link rel="stylesheet" href="{{asset('lte/plugins/summernote/summernote-bs4.css')}}">
        <link rel="stylesheet" href="{{asset('lte/dist/css/adminlte.min.css')}}">
        <script src="{{asset('lte/plugins/jquery/jquery.min.js')}}"></script>
        <script src="{{asset('lte/plugins/jquery-ui/jquery-ui.min.js')}}"></script>
        <script>
        $.widget.bridge('uibutton', $.ui.button)
        </script>
        <script src="{{asset('lte/plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
        <script src="{{asset('lte/plugins/jqvmap/jquery.vmap.min.js')}}"></script>
        <script src="{{asset('lte/plugins/jqvmap/maps/jquery.vmap.usa.js')}}"></script>
        <script src="{{asset('lte/dist/js/adminlte.js')}}"></script>
        <script src="{{asset('lte/dist/js/pages/dashboard.js')}}"></script>
        <link rel="stylesheet" href="{{asset('/dist/css/adminlte.min.css')}}">
        <script src="{{asset('lte/dist/js/demo.js')}}"></script>
        <script src="{{asset('lte/plugins/datatables/jquery.dataTables.min.js')}}"></script>
        <script src="{{asset('lte/plugins/bootstrap-switch/js/bootstrap-switch.min.js')}}"></script>
        <script src="{{asset('lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js')}}"></script>
    </head>
    <body>
       <div id="app"></div>
        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
