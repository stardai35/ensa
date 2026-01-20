# 🚀 Pre-Launch Checklist

Gunakan checklist ini sebelum menjalankan aplikasi untuk memastikan semuanya siap.

## ✅ Pre-Installation Checklist

- [ ] Node.js v14+ terinstal (`node --version`)
- [ ] npm terinstal (`npm --version`)
- [ ] MySQL Server berjalan
- [ ] MySQL credentials siap (username & password)
- [ ] Project folder sudah di-extract/di-clone
- [ ] Text editor/IDE sudah siap

---

## ✅ Database Setup Checklist

- [ ] MySQL Service running
- [ ] Database `suzzxrkz_ensisa` sudah dibuat
- [ ] `database.sql` sudah di-import
- [ ] Tables `category` dan `content` sudah terbuat
- [ ] Sample data sudah di-insert (optional)

Verify dengan:
```bash
mysql -u root -p
USE suzzxrkz_ensisa;
SHOW TABLES;
SELECT COUNT(*) FROM category;
SELECT COUNT(*) FROM content;
```

---

## ✅ Backend Setup Checklist

- [ ] Terminal 1 sudah dibuka di folder `backend`
- [ ] File `.env` sudah dibuat dari `.env.example`
- [ ] `.env` sudah dikonfigurasi dengan database credentials
- [ ] Dependencies sudah di-install (`npm install` selesai)
- [ ] Tidak ada error di console
- [ ] Port 5000 tidak sedang digunakan

Test backend:
```bash
# Terminal di backend folder
npm run dev

# Expected output:
# Server running on http://localhost:5000
```

---

## ✅ Frontend Setup Checklist

- [ ] Terminal 2 sudah dibuka di folder `frontend`
- [ ] Dependencies sudah di-install (`npm install` selesai)
- [ ] File `.env.local` sudah dibuat (optional, jika custom API URL)
- [ ] Tidak ada error di console
- [ ] Port 3000 tidak sedang digunakan

Test frontend:
```bash
# Terminal di frontend folder
npm start

# Browser akan otomatis membuka http://localhost:3000
```

---

## ✅ Connectivity Verification

Setelah kedua server berjalan:

- [ ] Backend API accessible di http://localhost:5000
- [ ] Frontend accessible di http://localhost:3000
- [ ] Halaman utama menampilkan kategori
- [ ] Halaman utama menampilkan content cards
- [ ] Search bar terlihat dan berfungsi
- [ ] Admin dashboard accessible di http://localhost:3000/admin/dashboard

### Test API Endpoints

Gunakan curl atau Postman:

```bash
# Test health check
curl http://localhost:5000/api/health

# Get all categories
curl http://localhost:5000/api/category

# Get all content
curl http://localhost:5000/api/content

# Search content
curl http://localhost:5000/api/content/search?q=test
```

---

## ✅ Feature Testing Checklist

### Public Features
- [ ] Home page loads correctly
- [ ] Categories menampilkan semua kategori
- [ ] Klik category filter konten
- [ ] Search bar berfungsi
- [ ] Content cards clickable
- [ ] Detail page shows full content
- [ ] Back button works
- [ ] Responsive on mobile (test dengan F12)

### Admin Features
- [ ] Admin page accessible
- [ ] Admin nav bar displays
- [ ] Dashboard menampilkan semua content
- [ ] Bisa add content baru
- [ ] Bisa edit content
- [ ] Bisa delete content
- [ ] Categories page accessible
- [ ] Bisa add category baru
- [ ] Bisa edit category
- [ ] Bisa delete category

---

## ✅ Browser Console Check

Buka browser Developer Tools (F12) dan check:

- [ ] Tidak ada error di Console tab
- [ ] Tidak ada warning di Console tab
- [ ] Network tab shows successful requests (200, 201 status)
- [ ] Tidak ada CORS errors

---

## ✅ Performance Check

- [ ] Page loads dalam < 3 seconds
- [ ] Search response cepat (< 1 second)
- [ ] Admin operations responsive
- [ ] Tidak ada lag saat scrolling

---

## ✅ Browser Compatibility

Test di multiple browsers:

- [ ] Chrome/Edge (recommended)
- [ ] Firefox
- [ ] Safari (jika available)

---

## ⚠️ Common Issues & Solutions

### Issue: "Cannot connect to database"
```
✓ Check MySQL is running
✓ Verify .env credentials
✓ Check database name
✓ Try: mysql -u root -p suzzxrkz_ensisa
```

### Issue: "Port already in use"
```
✓ Kill existing process on port
✓ Use different port in .env or npm command
```

### Issue: "Module not found"
```
✓ Run: npm install
✓ Delete node_modules & package-lock.json, reinstall
```

### Issue: "Blank page on frontend"
```
✓ Check browser console (F12)
✓ Verify backend is running
✓ Check API URL in .env.local
✓ Clear browser cache
```

### Issue: "API returns 404"
```
✓ Verify endpoint URL is correct
✓ Check backend routes
✓ Verify method (GET, POST, etc)
```

---

## 📋 Post-Launch Tasks

Setelah semua checklist selesai:

1. [ ] **Document Issues**: Catat masalah apa yang ditemukan
2. [ ] **Add More Data**: Tambahkan lebih banyak content via admin
3. [ ] **Test Thoroughly**: Test semua fitur lengkap
4. [ ] **Customize**: Sesuaikan design dengan Figma
5. [ ] **Add Authentication**: Setup login system
6. [ ] **Deploy**: Ready untuk production deployment

---

## 🎯 Success Indicators

Anda berhasil jika:

✅ Browser menampilkan aplikasi tanpa error
✅ Dapat navigate antar halaman
✅ Search berfungsi
✅ Admin CRUD operations berfungsi
✅ Data persisted di database
✅ Responsive design terlihat baik di mobile
✅ No console errors
✅ API calls berhasil (status 200/201)

---

## 📞 If Something Goes Wrong

1. **Check Logs**: Lihat terminal output untuk errors
2. **Browser Console**: F12 → Console tab untuk JavaScript errors
3. **Network Tab**: F12 → Network tab untuk API issues
4. **Restart**: Restart backend dan frontend
5. **Re-import**: Re-import database jika needed
6. **Clear Cache**: Clear npm cache dan browser cache

---

## 🆘 Emergency Reset

Jika semuanya error, coba reset:

```bash
# Stop semua server (Ctrl+C)

# Clear npm cache
npm cache clean --force

# Reinstall backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Reinstall frontend
cd frontend
rm -rf node_modules package-lock.json
npm install

# Reset database
mysql -u root -p
DROP DATABASE suzzxrkz_ensisa;
SOURCE backend/database.sql;

# Start kembali
```

---

## 📚 Quick Reference Links

- Backend Health: http://localhost:5000/api/health
- Frontend App: http://localhost:3000
- Admin Panel: http://localhost:3000/admin/dashboard
- Database: localhost:3306 (MySQL)

---

**Good Luck! Happy Development! 🎉**

Jika ada pertanyaan, cek dokumentasi lengkap di:
- `DOKUMENTASI.md` - Dokumentasi lengkap
- `QUICKSTART.md` - Quick start guide
- `SETUP_GUIDE.md` - Detailed setup instructions
- `README.md` - Project overview
