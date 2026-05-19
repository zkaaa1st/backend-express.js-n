Folder
📦 backend-express
┣ 📂 src
┃ ┣ 📂 config # Konfigurasi database, env, dll
┃ ┣ 📂 controllers # Fungsi-fungsi untuk menangani request/response
┃ ┣ 📂 middlewares # Middleware (auth, upload, error handler)
┃ ┣ 📂 models # Model data (Mongoose / Sequelize)
┃ ┣ 📂 routes # Definisi endpoint API
┃ ┣ 📂 services # Logika bisnis / interaksi dengan model
┃ ┣ 📂 utils # Helper functions, constants, validators
┃ ┗ 📂 app.js # Inisialisasi Express dan middleware global
┣ 📜 .env.example # Contoh variabel lingkungan
┣ 📜 .gitignore
┣ 📜 package.json
┗ 📜 server.js # Entry point untuk menjalankan server

