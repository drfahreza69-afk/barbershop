# 👑 BARBER KING'S ZAED — The Gentleman's Atelier & Grooming Lounge

Website resmi **Barber King's Zaed** dengan desain ultra-luxury, animasi interaktif, katalog potongan rambut, sertifikasi resmi, sistem booking via WhatsApp, dan Google Maps terintegrasi.

---

## 🚀 Cara Menjalankan di Lokal (Komputer Sendiri)

### Opsi 1: Langsung Buka di Browser (Static)
Klik dua kali file `index.html` langsung di file explorer.

### Opsi 2: Menggunakan Node.js Server (Sama seperti di Railway)
1. Buka terminal / Command Prompt di folder ini:
   ```bash
   npm install
   ```
2. Jalankan server:
   ```bash
   npm start
   ```
3. Buka browser di: `http://localhost:3000`

---

## 🐙 Cara Upload ke GitHub

### Cara 1: Menggunakan Website GitHub (Paling Mudah, Tanpa Install Git)
1. Buka [GitHub.com](https://github.com/) dan login ke akun Anda.
2. Klik tombol **New** (Buat Repository Baru).
3. Beri nama repository, misalnya: `barber-kingz`.
4. Pilih **Public** (atau Private), lalu klik **Create repository**.
5. Pada halaman repository yang baru dibuat, klik link **"uploading an existing file"**.
6. Tarik & lepaskan (drag and drop) semua file dari folder ini (kecuali folder `node_modules` dan file `.bak`).
7. Klik **Commit changes**.

### Cara 2: Menggunakan Git CLI (Jika Git terinstall)
```bash
git init
git add .
git commit -m "Initial commit - Barber King's Zaed Website"
git branch -M main
git remote add origin https://github.com/<USERNAME-ANDA>/barber-kingz.git
git push -u origin main
```

---

## 🚂 Cara Deploy ke Railway (Otomatis & Gratis / Trial)

1. Buka [Railway.app](https://railway.app/) dan Login dengan akun GitHub Anda.
2. Klik tombol **"+ New Project"**.
3. Pilih **"Deploy from GitHub repo"**.
4. Pilih repository `barber-kingz` yang sudah Anda upload sebelumnya.
5. Railway akan mendeteksi `package.json` / `Dockerfile` secara otomatis dan langsung melakukan build & deploy!
6. Setelah deployment selesai (status **SUCCESS**):
   - Klik tab **Settings** di service Railway Anda.
   - Pada bagian **Networking**, klik **"Generate Domain"**.
   - Website Barber King's Zaed Anda sekarang sudah online dengan URL publik (contoh: `https://barber-kingz-production.up.railway.app`)!

---

## 📁 Struktur Folder
```
barber-kingz/
├── assets/                  # Gambar, logo, ikon, poster harga, sertifikat
├── index.html               # File utama website Barber King's Zaed
├── server.js                # Web server Node.js / Express untuk Railway
├── package.json             # Konfigurasi dependensi Node.js
├── Dockerfile               # Dukungan deploy container (opsional)
├── .gitignore               # File yang diabaikan Git (node_modules, bak)
└── README.md                # Panduan instalasi dan deployment
```
