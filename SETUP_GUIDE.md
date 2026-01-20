# Environment Setup Guide

## Prerequisites

Sebelum memulai, pastikan komputer Anda memiliki:

### 1. Node.js dan npm
- **Download**: https://nodejs.org/ (LTS version)
- **Verify**:
  ```bash
  node --version
  npm --version
  ```

### 2. MySQL Server
- **Windows**: 
  - Download MySQL Community Server dari https://dev.mysql.com/downloads/mysql/
  - Atau gunakan XAMPP/WAMP yang include MySQL
  
- **Mac**:
  ```bash
  brew install mysql
  brew services start mysql
  ```
  
- **Linux**:
  ```bash
  sudo apt-get install mysql-server
  sudo systemctl start mysql
  ```

- **Verify**:
  ```bash
  mysql --version
  ```

### 3. Text Editor/IDE (Pilih salah satu)
- Visual Studio Code (Recommended): https://code.visualstudio.com/
- Sublime Text: https://www.sublimetext.com/
- WebStorm: https://www.jetbrains.com/webstorm/
- Atom: https://atom.io/

---

## Setup Step by Step

### Step 1: Clone/Download Project
```bash
# Jika menggunakan git
git clone <repository-url>
cd ensisa2

# Atau extract zip file yang sudah disiapkan
```

### Step 2: Setup MySQL Database

#### Option A: Using MySQL CLI
```bash
# Buka MySQL
mysql -u root -p

# Jalankan query untuk import database
SOURCE backend/database.sql;

# Untuk sample data (optional)
SOURCE backend/sample-data.sql;

# Exit
exit
```

#### Option B: Using MySQL Workbench
1. Buka MySQL Workbench
2. Klik "File" → "Open SQL Script"
3. Pilih file `backend/database.sql`
4. Click "Execute" atau press Ctrl+Enter

### Step 3: Configure Backend Environment

```bash
cd backend

# Copy environment template
cp .env.example .env

# Edit .env dengan text editor
# Ubah konfigurasi sesuai setup MySQL Anda:
# DB_HOST=localhost (atau IP address)
# DB_USER=root (atau username MySQL Anda)
# DB_PASSWORD= (password MySQL Anda, biarkan kosong jika tidak ada)
# DB_NAME=suzzxrkz_ensisa
```

**Contoh .env untuk berbagai setup:**

Windows dengan XAMPP (default):
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=suzzxrkz_ensisa
```

Windows dengan MySQL Community (dengan password):
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=suzzxrkz_ensisa
```

### Step 4: Install Backend Dependencies

```bash
# Pastikan sudah di folder backend
cd backend

# Install npm packages
npm install

# Verify installation
npm list
```

### Step 5: Install Frontend Dependencies

```bash
# Buka terminal baru / cd ke frontend folder
cd frontend

# Install npm packages
npm install

# Verify installation
npm list
```

---

## Menjalankan Aplikasi

### Terminal 1 - Backend Server
```bash
cd backend
npm run dev

# Output yang diharapkan:
# Server running on http://localhost:5000
```

### Terminal 2 - Frontend Server
```bash
cd frontend
npm start

# Browser akan otomatis membuka http://localhost:3000
```

---

## Testing Koneksi

### Test Backend API
```bash
# Menggunakan curl
curl http://localhost:5000/api/health

# Expected response:
# {"status":"Backend is running"}

# Get all categories
curl http://localhost:5000/api/category

# Get all content
curl http://localhost:5000/api/content
```

### Test Frontend
- Buka browser ke http://localhost:3000
- Halaman utama harus menampilkan kategori dan konten
- Admin panel bisa diakses di http://localhost:3000/admin/dashboard

---

## Troubleshooting Common Issues

### Error 1: "Cannot find module"
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Error 2: "Port already in use"
```bash
# Find process using port 5000
# Windows:
netstat -ano | findstr :5000

# Linux/Mac:
lsof -i :5000

# Kill the process
# Windows:
taskkill /PID <PID> /F

# Linux/Mac:
kill -9 <PID>
```

### Error 3: "Access denied for user 'root'@'localhost'"
```bash
# MySQL password tidak cocok
# Solution: Reset MySQL password atau update .env file

# Windows (XAMPP):
mysql -u root
# (tanpa password)

# Linux (default):
sudo mysql -u root
```

### Error 4: "Cannot GET /"
- Frontend tidak koneksi ke backend
- Pastikan backend running di http://localhost:5000
- Check di browser console (F12) untuk error messages

### Error 5: "Database not found"
```bash
# Import database lagi
mysql -u root -p suzzxrkz_ensisa < backend/database.sql

# Atau buat manual
mysql -u root -p
CREATE DATABASE suzzxrkz_ensisa;
SOURCE backend/database.sql;
```

---

## VS Code Recommended Extensions

```bash
# Install these extensions for better development:
# 1. REST Client - untuk test API
# 2. Thunder Client - alternative untuk Postman
# 3. ES7+ React/Redux/React-Native snippets
# 4. Prettier - Code Formatter
# 5. Thunder Client
# 6. MySQL
```

---

## Quick Reference

| Task | Command |
|------|---------|
| Start Backend | `cd backend && npm run dev` |
| Start Frontend | `cd frontend && npm start` |
| Backend Build | `cd backend && npm run build` |
| Frontend Build | `cd frontend && npm run build` |
| Test API | `curl http://localhost:5000/api/content` |
| Access App | http://localhost:3000 |
| Access Admin | http://localhost:3000/admin/dashboard |
| MySQL Connect | `mysql -u root -p` |

---

## Next Steps

Setelah setup selesai:
1. Explore aplikasi dan pastikan semua berfungsi
2. Tambahkan sample data lebih banyak
3. Customise design sesuai kebutuhan
4. Setup authentication/login
5. Deploy ke server

---

**Last Updated**: January 2026
**Maintained By**: Development Team
