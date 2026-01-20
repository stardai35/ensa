#!/bin/bash
# Setup script for Ensiklopedia project

echo "======================================"
echo "Ensiklopedia Sastra - Setup Script"
echo "======================================"

# Backend setup
echo -e "\n[1/4] Setting up Backend..."
cd backend
npm install
if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env file. Please configure database settings."
fi
cd ..

# Frontend setup
echo -e "\n[2/4] Setting up Frontend..."
cd frontend
npm install
if [ ! -f .env.local ]; then
  cp .env.example .env.local
fi
cd ..

echo -e "\n[3/4] Database setup..."
echo "Please import the database.sql file into your MySQL:"
echo "  mysql -u root -p suzzxrkz_ensisa < backend/database.sql"

echo -e "\n[4/4] Starting servers..."
echo "Backend: npm run dev (in backend folder)"
echo "Frontend: npm start (in frontend folder)"

echo -e "\nSetup completed!"
echo "Access the app at: http://localhost:3000"
echo "Admin panel: http://localhost:3000/admin/dashboard"
