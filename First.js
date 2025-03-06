<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="flex flex-col justify-center items-center min-h-screen bg-emerald-400">
    <main>
        <h1 class="text-2xl font-bold mb-4 text-center">Tic-Tac-Toe</h1>
        <div id="message" class="text-xl font-bold text-white mb-4"></div> <!-- Winner message -->
        <div class="container">
            <div class="Game grid grid-cols-3 gap-2">
                <button class="box w-16 h-16 border border-gray-700 text-2xl font-bold flex items-center justify-center rounded-md shadow-md"></button>
                <button class="box w-16 h-16 border border-gray-700 text-2xl font-bold flex items-center justify-center rounded-md shadow-md"></button>
                <button class="box w-16 h-16 border border-gray-700 text-2xl font-bold flex items-center justify-center rounded-md shadow-md"></button>
                <button class="box w-16 h-16 border border-gray-700 text-2xl font-bold flex items-center justify-center rounded-md shadow-md"></button>
                <button class="box w-16 h-16 border border-gray-700 text-2xl font-bold flex items-center justify-center rounded-md shadow-md"></button>
                <button class="box w-16 h-16 border border-gray-700 text-2xl font-bold flex items-center justify-center rounded-md shadow-md"></button>
                <button class="box w-16 h-16 border border-gray-700 text-2xl font-bold flex items-center justify-center rounded-md shadow-md"></button>
                <button class="box w-16 h-16 border border-gray-700 text-2xl font-bold flex items-center justify-center rounded-md shadow-md"></button>
                <button class="box w-16 h-16 border border-gray-700 text-2xl font-bold flex items-center justify-center rounded-md shadow-md"></button>
            </div>
        </div>
        <button id="reset" class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md mt-8 hover:bg-black">
            Reset Game
        </button>
    </main>
    <script src="app.js"></script>
</body>
</html>
