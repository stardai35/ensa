@echo off
REM Setup Script untuk Ensiklopedia Sastra Indonesia
REM Script ini akan menginstal dependencies dan menjalankan aplikasi

echo ========================================
echo Ensiklopedia Sastra Indonesia - Setup
echo ========================================
echo.

REM Change to project root
cd /d "%~dp0"

REM Setup Backend
echo [1/3] Melakukan setup Backend...
cd backend
echo Installing backend dependencies...
call npm install
if errorlevel 1 goto error
cd ..
echo Backend setup selesai!
echo.

REM Setup Frontend
echo [2/3] Melakukan setup Frontend...
cd frontend
echo Installing frontend dependencies...
call npm install
if errorlevel 1 goto error
cd ..
echo Frontend setup selesai!
echo.

REM Database Setup
echo [3/3] Konfigurasi Database...
echo Pastikan MySQL server Anda running!
echo.
echo Langkah selanjutnya:
echo 1. Buka MySQL command line atau MySQL Workbench
echo 2. Jalankan: SOURCE backend\database.sql;
echo 3. Jalankan: SOURCE backend\sample-data.sql;
echo.
pause

echo.
echo ========================================
echo Setup Selesai!
echo ========================================
echo.
echo Untuk menjalankan aplikasi:
echo Terminal 1 (Backend):
echo   cd backend && npm run dev
echo.
echo Terminal 2 (Frontend):
echo   cd frontend && npm start
echo.
echo Aplikasi akan berjalan di: http://localhost:3000
echo.
pause
goto end

:error
echo.
echo ERROR! Ada kesalahan saat setup.
echo Pastikan Node.js dan npm sudah terinstall.
pause

:end
