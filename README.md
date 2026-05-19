# Folder
📦 backend-express
┣ 📂 src
┃ ┣ 📂 config # Konfigurasi database, env, dll
┃ ┣ 📂 controllers # Fungsi-fungsi untuk menangani request/response
┃ ┣ 📂 middlewares # Middleware (auth, upload, error handler)
┃ ┣ 📂 models # Model data (Mongoose / Sequelize)
┃ ┣ 📂 routes # Definisi endpoint API
┃ ┣ 📂 seeders # Data Uji Coba
┃  
┣ 📜 .env.example # Contoh 
┣ 📜 package.json
┗ 📜 server.js # Entry point untuk menjalankan server

### ✨ Fitur Utama
- Autentikasi & otorisasi (JWT)
- CRUD data (misal: pengguna, artikel, produk)
- Validasi request dengan Joi atau express-validator
- Logging dengan Morgan
- Keamanan dasar (helmet, CORS, rate limiting)
- Integrasi dengan database (MongoDB / PostgreSQL / MySQL)
- Environment variables dengan dotenv

btw languanges nya itu yang php cuman untuk generating hash password ya guys
