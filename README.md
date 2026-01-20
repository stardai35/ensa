# Ensiklopedia Sastra - Fullstack Application

Aplikasi web ensiklopedia sastra lengkap dengan admin panel.

## Fitur

### Public Side
- Tampilan halaman utama dengan kategori
- Search functionality untuk mencari konten
- Halaman detail konten
- Responsive design

### Admin Side
- Dashboard untuk manage content
- CRUD operations untuk content
- Manage categories
- User-friendly interface

## Tech Stack

### Backend
- Node.js
- Express.js
- MySQL
- Axios for API

### Frontend
- React 18
- React Router DOM
- Axios for HTTP requests
- CSS3

## Installation

### Backend Setup
1. Navigate to backend folder
   ```
   cd backend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create `.env` file from `.env.example`
   ```
   cp .env.example .env
   ```

4. Configure database in `.env`

5. Create database and import `database.sql`
   ```
   mysql -u root -p < database.sql
   ```

6. Start backend server
   ```
   npm run dev
   ```

Backend will run on `http://localhost:5000`

### Frontend Setup
1. Navigate to frontend folder
   ```
   cd frontend
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start development server
   ```
   npm start
   ```

Frontend will run on `http://localhost:3000`

## API Endpoints

### Content
- GET `/api/content` - Get all contents
- GET `/api/content/:id` - Get content by ID
- GET `/api/content/slug/:slug` - Get content by slug
- GET `/api/content/category/:catId` - Get contents by category
- GET `/api/content/search?q=query` - Search contents
- POST `/api/content` - Create new content
- PUT `/api/content/:id` - Update content
- DELETE `/api/content/:id` - Delete content

### Category
- GET `/api/category` - Get all categories
- GET `/api/category/:id` - Get category by ID
- POST `/api/category` - Create new category
- PUT `/api/category/:id` - Update category
- DELETE `/api/category/:id` - Delete category

## Database Schema

### Category Table
```sql
CREATE TABLE category (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  slug VARCHAR(255)
);
```

### Content Table
```sql
CREATE TABLE content (
  id INT PRIMARY KEY AUTO_INCREMENT,
  cat_id INT,
  title_id INT,
  year VARCHAR(50),
  text LONGTEXT,
  slug VARCHAR(255),
  FOREIGN KEY (cat_id) REFERENCES category(id)
);
```

## Admin Access

Access admin panel at `http://localhost:3000/admin/dashboard`

## Project Structure

```
ensisa2/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── server.js
│   ├── package.json
│   └── database.sql
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── admin/
    │   ├── api/
    │   ├── App.js
    │   └── index.js
    ├── public/
    └── package.json
```
