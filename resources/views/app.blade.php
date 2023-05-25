<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased overflow-x-hidden overflow-y-scroll">
    <!-- Para que el preprocesador de tailwind descargue algunos estilos en for o condicionales -->
    <div
        class="
            w-10 text-xl text-2xl gap-3 w-7
            bg-[#18c27a] bg-[#C51E3A] bg-[#2d7fdf] bg-[#00563B] bg-[#50C878] bg-[#B284BE]
        ">
    </div>

    @inertia
</body>

</html>
