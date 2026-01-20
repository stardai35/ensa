@echo off
REM Setup script for Ensiklopedia project

echo ======================================
echo Ensiklopedia Sastra - Setup Script
echo ======================================

REM Backend setup
echo.
echo [1/4] Setting up Backend...
cd backend
call npm install
if not exist .env (
  copy .env.example .env
  echo Created .env file. Please configure database settings.
)
cd ..

REM Frontend setup
echo.
echo [2/4] Setting up Frontend...
cd frontend
call npm install
if not exist .env.local (
  copy .env.example .env.local
)
cd ..

echo.
echo [3/4] Database setup...
echo Please import the database.sql file into your MySQL:
echo   mysql -u root -p suzzxrkz_ensisa ^< backend/database.sql

echo.
echo [4/4] Starting servers...
echo Backend: npm run dev (in backend folder)
echo Frontend: npm start (in frontend folder)

echo.
echo Setup completed!
echo Access the app at: http://localhost:3000
echo Admin panel: http://localhost:3000/admin/dashboard

pause
