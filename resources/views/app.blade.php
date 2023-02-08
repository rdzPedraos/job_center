<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- styles -->
        <link rel="stylesheet" href="@sweetalert2/theme-material-ui/material-ui.css">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        <!-- Para que el preprocesador de tailwind descargue algunos estilos en for o condicionales -->
        <div class="w-10 text-xl text-2xl gap-3"> </div>
        
        @inertia
    </body>
    <script src="sweetalert2/dist/sweetalert2.min.js"></script>
</html>
