# 🎯 VISUAL GUIDE - Cara Menjalankan Ensiklopedia Sastra

## 🎬 Video Tutorial Steps (Step-by-Step)

### STEP 1️⃣: Persiapan
```
1. Buka file manager
2. Navigasi ke: c:\Users\Faradila\Downloads\ensisa2
3. Lihat semua folder dan file yang ada
```

### STEP 2️⃣: Setup Database
```
1. Buka MySQL Command Line Client ATAU MySQL Workbench
2. Login dengan root user
3. Jalankan query:
   
   SOURCE C:\Users\Faradila\Downloads\ensisa2\backend\database.sql;
   
4. Tunggu sampai selesai
5. OPTIONAL - Tambah sample data:
   SOURCE C:\Users\Faradila\Downloads\ensisa2\backend\sample-data.sql;
```

### STEP 3️⃣: Setup Backend
```
1. Buka Command Prompt / PowerShell
2. Navigate ke backend:
   cd C:\Users\Faradila\Downloads\ensisa2\backend
   
3. Copy file .env:
   copy .env.example .env
   
4. Edit file .env dengan Notepad:
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD= (kosongkan jika tidak ada password)
   DB_NAME=suzzxrkz_ensisa
   
5. Install dependencies:
   npm install
   
   ⏳ (Tunggu sampai selesai - 2-3 menit)
   
6. Jalankan backend:
   npm run dev
   
   ✅ Akan muncul: "Server running on http://localhost:5000"
```

### STEP 4️⃣: Setup Frontend (Terminal Baru)
```
1. Buka Command Prompt / PowerShell BARU (jangan close yang lama)
2. Navigate ke frontend:
   cd C:\Users\Faradila\Downloads\ensisa2\frontend
   
3. Install dependencies:
   npm install
   
   ⏳ (Tunggu sampai selesai - 2-3 menit)
   
4. Jalankan frontend:
   npm start
   
   ✅ Browser akan otomatis membuka: http://localhost:3000
```

---

## 🖥️ Terminal Layout (3 Windows)

```
┌─────────────────────────────────────┐
│ MySQL/Database Setup Terminal       │
│ (Jalankan sekali saja)              │
│ Command: SOURCE database.sql        │
│ Status: ✅ DONE                      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Terminal 1: BACKEND SERVER          │
│ Location: backend folder            │
│ Command: npm run dev                │
│ Status: 🟢 RUNNING on :5000         │
│                                     │
│ JANGAN DITUTUP!                     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Terminal 2: FRONTEND SERVER         │
│ Location: frontend folder           │
│ Command: npm start                  │
│ Status: 🟢 RUNNING on :3000         │
│                                     │
│ JANGAN DITUTUP!                     │
└─────────────────────────────────────┘
```

---

## 🌐 Browser Access Points

```
┌─────────────────────────────────────────┐
│ PUBLIC SIDE (User Interface)            │
├─────────────────────────────────────────┤
│ 🏠 Home Page                            │
│    URL: http://localhost:3000           │
│    Lihat: Kategori, Content Cards       │
│                                         │
│ 🔍 Search                               │
│    Lokasi: Header                       │
│    Fungsi: Cari konten                  │
│                                         │
│ 📖 Detail Page                          │
│    URL: http://localhost:3000/detail/.. │
│    Lihat: Full content description      │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ ADMIN SIDE (Management Panel)           │
├─────────────────────────────────────────┤
│ 🛠️ Admin Dashboard                      │
│    URL: http://localhost:3000/admin/..  │
│    Fungsi: CRUD Content                 │
│                                         │
│ 📂 Categories Management                │
│    URL: http://localhost:3000/admin/..  │
│    Fungsi: CRUD Categories              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ API ENDPOINTS (Backend)                 │
├─────────────────────────────────────────┤
│ 🔌 API URL: http://localhost:5000/api   │
│                                         │
│ Endpoints:                              │
│ - GET    /content                       │
│ - POST   /content                       │
│ - PUT    /content/:id                   │
│ - DELETE /content/:id                   │
│ - GET    /category                      │
│ - POST   /category                      │
└─────────────────────────────────────────┘
```

---

## ⚙️ Configuration Quick Reference

### .env File (Backend)
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=suzzxrkz_ensisa
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### .env.local File (Frontend - Optional)
```
REACT_APP_API_URL=http://localhost:5000/api
```

---

## 🎨 UI Components Reference

```
HOME PAGE Layout:
┌─────────────────────────────────────────┐
│ 🎨 HEADER (Purple Gradient)             │
│ ENSIKLOPEDIA SASTRA                     │
│ Ensiklopedia Lengkap Sastra Indonesia   │
│ [🔍 Search Bar.........................]│
├─────────────────────────────────────────┤
│ 📂 CATEGORIES                           │
│ [Pengarang] [Karya Sastra] [Media...]   │
├─────────────────────────────────────────┤
│ 📑 CONTENT GRID                         │
│ ┌──────────────┐ ┌──────────────┐      │
│ │ Content Card │ │ Content Card │      │
│ │ Title        │ │ Title        │      │
│ │ [Read More]  │ │ [Read More]  │      │
│ └──────────────┘ └──────────────┘      │
└─────────────────────────────────────────┘

ADMIN DASHBOARD Layout:
┌─────────────────────────────────────────┐
│ 🎨 ADMIN NAV (Dark Header)              │
│ ENSIKLOPEDIA - ADMIN | Dashboard | ...  │
├─────────────────────────────────────────┤
│ 📋 ADD CONTENT BUTTON                   │
├─────────────────────────────────────────┤
│ 📝 FORM (jika clicked add)              │
│ Category: [Dropdown]                    │
│ Title: [Text Input]                     │
│ Year: [Text Input]                      │
│ Slug: [Text Input]                      │
│ Text: [Textarea]                        │
│ [Save] [Cancel]                         │
├─────────────────────────────────────────┤
│ 📊 CONTENT TABLE                        │
│ ┌──┬──────────┬──────────┬──────┐      │
│ │ID│Title    │Category  │Action│      │
│ ├──┼──────────┼──────────┼──────┤      │
│ │1 │Content 1 │Category 1│E D   │      │
│ │2 │Content 2 │Category 2│E D   │      │
│ └──┴──────────┴──────────┴──────┘      │
└─────────────────────────────────────────┘
```

---

## 🚨 Troubleshooting Quick Fix

| Problem | Solution |
|---------|----------|
| Port 5000 used | Kill process atau gunakan port lain di .env |
| Port 3000 used | Kill process atau gunakan port lain di npm start |
| Database error | Check MySQL running, verify .env credentials |
| Module not found | Run `npm install` di folder tersebut |
| Blank page | Press F12 → Console untuk lihat error |
| No data show | Check database.sql di-import |
| API not connecting | Check backend running di :5000 |

---

## 📱 Testing Checklist (Quick)

```
✓ Run `npm run dev` di backend
✓ Run `npm start` di frontend
✓ Browser buka http://localhost:3000
✓ Lihat kategori di home
✓ Lihat content cards
✓ Test search bar
✓ Click detail page
✓ Go to http://localhost:3000/admin/dashboard
✓ Test add content (admin)
✓ Test edit content (admin)
✓ Test delete (admin)
✓ Check browser console (F12) - no errors
```

---

## 🔄 Daily Workflow

```
START OF DAY:
1. Open Terminal 1
   cd backend && npm run dev
   
2. Open Terminal 2
   cd frontend && npm start
   
3. Browser otomatis membuka http://localhost:3000
   
4. DEVELOP & TEST


END OF DAY:
1. Close Terminal 1 (Ctrl+C) - Backend
2. Close Terminal 2 (Ctrl+C) - Frontend
3. Save all changes
4. Commit ke git (jika using version control)
```

---

## 📊 API Testing with curl

```
# Health check
curl http://localhost:5000/api/health

# Get all categories
curl http://localhost:5000/api/category

# Get all content
curl http://localhost:5000/api/content

# Search
curl http://localhost:5000/api/content/search?q=pengarang

# Get content by ID
curl http://localhost:5000/api/content/1

# Add new category (POST)
curl -X POST http://localhost:5000/api/category \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","slug":"test"}'
```

---

## 🎯 Success Indicators

✅ **Success jika:**
- Backend console: "Server running on http://localhost:5000"
- Frontend console: "Compiled successfully!"
- Browser shows home page dengan kategori
- Admin panel accessible
- No errors di browser console (F12)
- Data bisa di-add/edit/delete di admin

❌ **Ada masalah jika:**
- Terminal show error messages
- Browser blank atau hanya text
- Console (F12) full dengan errors
- 404 Not Found di API endpoints
- Database tidak connect

---

## 📞 Emergency Commands

```
# Restart backend
Ctrl+C (di terminal backend)
npm run dev

# Restart frontend
Ctrl+C (di terminal frontend)
npm start

# Clear npm cache
npm cache clean --force

# Reinstall everything
rm -rf node_modules package-lock.json
npm install
```

---

## 🎓 Pro Tips

1. **Keep terminals open**: Jangan tutup terminal backend & frontend
2. **Watch for errors**: Cek console saat ada masalah
3. **Use F12**: Browser developer tools sangat membantu
4. **Test API first**: Gunakan curl atau Postman untuk test API
5. **Restart is friend**: Sering-sering restart terminal & browser
6. **Read messages**: Error messages biasanya udah jelas artinya
7. **Check .env**: 90% masalah adalah config .env yang salah

---

## 🎉 Ready to Go!

```
╔════════════════════════════════════════╗
║  ✨ Selamat! Aplikasi Siap Dijalankan ║
║                                        ║
║  Backend:   http://localhost:5000     ║
║  Frontend:  http://localhost:3000     ║
║  Admin:     http://localhost:3000/... ║
║                                        ║
║  Good Luck! 🚀                         ║
╚════════════════════════════════════════╝
```

**Untuk info lebih detail, baca file dokumentasi di folder project:**
- SETUP_GUIDE.md - Setup lengkap
- LAUNCH_CHECKLIST.md - Verifikasi sebelum jalankan
- DOKUMENTASI.md - Dokumentasi lengkap
- PROJECT_SUMMARY.md - Ringkasan project

