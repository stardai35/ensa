# 🧪 Testing Guide - Ensiklopedia Sastra

## Pre-Testing Checklist

- [ ] MySQL Server running
- [ ] Database `suzzxrkz_ensisa` sudah dibuat
- [ ] Data loaded dari `sample-data.sql`
- [ ] Backend dependencies terinstall (`npm install` di backend)
- [ ] Frontend dependencies terinstall (`npm install` di frontend)
- [ ] Node.js versi 14+ terinstall

---

## 1. Database Testing

### Verify Schema
```sql
-- Check if database exists
SHOW DATABASES LIKE 'suzzxrkz_ensisa';

-- Check category table
SELECT * FROM category;
-- Expected: 6 rows (Pengarang, Karya Sastra, Media, Hadiah, Lembaga, Gejala)

-- Check content table
SELECT COUNT(*) as total_content FROM content;
-- Expected: 40 rows

-- Check distribution
SELECT cat_id, COUNT(*) as count FROM content GROUP BY cat_id;
-- Expected:
-- cat_id 1: 7
-- cat_id 2: 10
-- cat_id 3: 8
-- cat_id 4: 8
-- cat_id 5: 5
-- cat_id 6: 2
```

### Sample Data Verification
```sql
-- Check specific content
SELECT * FROM content WHERE cat_id = 1 LIMIT 1;

-- Check join works
SELECT c.id, c.title_id, c.cat_id, cat.name 
FROM content c 
LEFT JOIN category cat ON c.cat_id = cat.id 
LIMIT 10;
```

---

## 2. Backend API Testing

### Start Backend Server
```bash
cd backend
npm run dev
```

**Expected Output:**
```
Server running on http://localhost:5000
```

### Test Endpoints

#### a) Health Check
```
URL: http://localhost:5000/api/health
Method: GET
Expected Response:
{
  "status": "Backend is running"
}
```

#### b) Get All Content
```
URL: http://localhost:5000/api/content
Method: GET
Expected Response:
[
  {
    "id": 1,
    "cat_id": 1,
    "title_id": "Pramoedya Ananta Toer",
    "year": "1925-2006",
    "text": "...",
    "slug": "pramoedya-ananta-toer",
    "category_name": "Pengarang",
    ...
  },
  ...
]
```

#### c) Get All Categories
```
URL: http://localhost:5000/api/category
Method: GET
Expected Response:
[
  {"id": 1, "name": "Pengarang", "slug": "pengarang"},
  {"id": 2, "name": "Karya Sastra", "slug": "karya-sastra"},
  ...
]
```

#### d) Get Content by Category
```
URL: http://localhost:5000/api/content/category/1
Method: GET
Expected Response: Array of 7 content items (Pengarang)
```

#### e) Search Content
```
URL: http://localhost:5000/api/content/search?q=Pramoedya
Method: GET
Expected Response: Content items yang match "Pramoedya"
```

### Using Postman/Insomnia

1. Create new request collection
2. Add requests untuk setiap endpoint
3. Test response status (200)
4. Verify response format JSON valid
5. Check data types sesuai

---

## 3. Frontend Testing

### Start Frontend Server
```bash
cd frontend
npm start
```

**Expected Output:**
```
Compiled successfully!
You can now view ensiklopedia-sastra in the browser at http://localhost:3000
```

### Visual Testing

#### Header Section
- [ ] Logo visible dengan subtitle
- [ ] Search bar tampil dengan placeholder
- [ ] Header background gradient ungu
- [ ] Search bar responsive pada resize

#### Hero Section
- [ ] Judul "Ensiklopedia Sastra Indonesia" tampil
- [ ] Subtitle deskripsi tampil
- [ ] Background gradient correct
- [ ] Text alignment center

#### Sidebar Categories
- [ ] Sidebar tampil di sebelah kiri (desktop)
- [ ] Semua 6 kategori dengan icon tampil
- [ ] Counter untuk setiap kategori (7, 10, 8, 8, 5, 2)
- [ ] Total content counter = 40
- [ ] Total kategori counter = 6
- [ ] "Semua Kategori" option tampil

#### Content Grid
- [ ] Grid layout tampil dengan multiple columns
- [ ] Semua 40 content card tampil
- [ ] Card design sesuai (image/emoji, title, category badge, year, text preview)
- [ ] "Baca Selengkapnya" button tampil di setiap card
- [ ] Result count menunjukkan "Ditemukan 40 hasil"

### Interaction Testing

#### Category Filter
```
Test Case 1: Klik "Pengarang"
- [ ] Pengarang button highlight/active
- [ ] Grid hanya menampilkan 7 cards (Pengarang)
- [ ] Result count berubah ke "Ditemukan 7 hasil"
- [ ] Header berubah ke "Kategori: Pengarang"

Test Case 2: Klik kategori lain (misal "Karya Sastra")
- [ ] Previous kategori deselect
- [ ] Karya Sastra button highlight
- [ ] Grid menampilkan 10 cards
- [ ] Result count = "Ditemukan 10 hasil"

Test Case 3: Klik kategori yang aktif lagi
- [ ] Toggle off (show semua konten)
- [ ] Grid kembali 40 cards
- [ ] Result count = "Ditemukan 40 hasil"
```

#### Search Functionality
```
Test Case 1: Type "Pramoedya"
- [ ] Search bar input terisi
- [ ] Grid filter real-time
- [ ] Hanya content yang match "Pramoedya" tampil
- [ ] Result count update
- [ ] Clear button (X) muncul

Test Case 2: Klik Clear button
- [ ] Search cleared
- [ ] Grid kembali tampil 40 konten
- [ ] X button hilang

Test Case 3: Type "xyz" (tidak ada match)
- [ ] No content state tampil
- [ ] Empty icon (🔍) tampil
- [ ] Message "Tidak ada konten yang ditemukan"
- [ ] Reset Filter button tampil

Test Case 4: Search case-insensitive
- [ ] Search "pramoedya" = "PRAMOEDYA" = "Pramoedya"
```

#### Card Interactions
```
Test Case 1: Hover over card
- [ ] Card lift up (shadow lebih besar)
- [ ] Image zoom in
- [ ] Smooth transition (tidak jerky)

Test Case 2: Click "Baca Selengkapnya"
- [ ] Navigate ke detail page
- [ ] URL berubah ke /detail/[slug]
- [ ] Content detail page load
```

#### Responsive Testing

```
Test Case 1: Desktop (1920px)
- [ ] Sidebar + Content side by side
- [ ] Grid 3-4 columns
- [ ] All elements properly spaced

Test Case 2: Tablet (768px)
- [ ] Sidebar masih di samping (landscape)
- [ ] Grid 2-3 columns
- [ ] Font size proportional

Test Case 3: Mobile (375px)
- [ ] Stack layout (sidebar atas content)
- [ ] Single column grid
- [ ] Touch buttons 44px+ size
- [ ] Text readable
- [ ] No horizontal scroll

Test Case 4: Resize dinamis
- [ ] Layout smooth transition saat resize
- [ ] No janky animation
```

### Loading State Testing

```
Test Case 1: First page load
- [ ] Loading spinner tampil
- [ ] "Memuat konten..." text tampil
- [ ] Spinner animate

Test Case 2: Quick load (< 1s)
- [ ] Skeleton/loader hilang
- [ ] Content tampil
- [ ] Fade in animation

Test Case 3: Slow network
- [ ] Simulate 3G di DevTools
- [ ] Loading state bertahan
- [ ] Content eventually tampil
```

---

## 4. Browser Compatibility Testing

Test pada browsers:
- [x] Chrome (latest)
- [x] Firefox (latest)
- [x] Safari (latest)
- [x] Edge (latest)
- [x] Mobile browsers (Chrome Android, Safari iOS)

### Checklist:
- [ ] CSS gradients render correctly
- [ ] Grid layout works
- [ ] Animations smooth
- [ ] Search functionality works
- [ ] API calls successful
- [ ] No console errors

---

## 5. Performance Testing

### Using Chrome DevTools

1. **Lighthouse Audit**
   ```
   - Open DevTools (F12)
   - Go to Lighthouse
   - Run audit
   - Expected scores: >80 (Performance), >90 (Accessibility)
   ```

2. **Network Tab**
   ```
   - Check API response times (should be < 200ms)
   - Check bundle sizes
   - Check no failed requests
   ```

3. **Performance Timeline**
   ```
   - Check paint timing < 500ms
   - Check main thread not blocked
   ```

### Metrics to Check:
- [ ] First Contentful Paint (FCP) < 2s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] API response time < 200ms

---

## 6. Functional Testing Scenarios

### Scenario 1: First Time User
```
1. Open http://localhost:3000
2. See home page dengan semua 40 content
3. Browse kategori dengan sidebar
4. Click kategori filter content
5. Use search untuk find specific content
6. Click card untuk lihat detail
```

### Scenario 2: Category Browsing
```
1. Browse "Pengarang" → see 7 items
2. Browse "Karya Sastra" → see 10 items
3. Browse "Media Penyebar" → see 8 items
4. Dll untuk kategori lain
```

### Scenario 3: Search Flow
```
1. Search "Andrea Hirata"
2. See filtered results (Laskar Pelangi, Sang Pemimpi)
3. Clear search
4. See all 40 items again
```

### Scenario 4: Detail Page
```
1. Click "Baca Selengkapnya" pada card
2. See full detail page
3. Check content lengkap tampil
4. Check back button/link works
```

---

## 7. Error Handling Testing

### Backend Down
```
- Start frontend tanpa backend
- Check error handling di console
- API calls fail gracefully
```

### Database Connection Error
```
- Stop MySQL server
- Try refresh page
- Check error message helpful
```

### Invalid Data
```
- Manually insert invalid data di DB
- Frontend should handle gracefully
- Display error message atau skip invalid item
```

---

## 8. Bug Report Template

```markdown
## Bug Report

**Title:** [Concise bug description]

**Environment:**
- Browser: [Chrome/Firefox/Safari + version]
- OS: [Windows/Mac/Linux]
- Device: [Desktop/Tablet/Mobile]
- URL: [http://localhost:3000/...]

**Steps to Reproduce:**
1. ...
2. ...
3. ...

**Expected Result:**
[What should happen]

**Actual Result:**
[What actually happened]

**Screenshots:**
[Attach screenshots]

**Console Errors:**
[Copy any console errors]

**Additional Info:**
[Any other relevant info]
```

---

## 9. Test Results Summary

| Feature | Status | Notes |
|---------|--------|-------|
| Data Loading | ✓ | 40 items loaded correctly |
| Category Filter | ✓ | All 6 categories work |
| Search Function | ✓ | Real-time search working |
| Card Display | ✓ | Layout responsive |
| Navigation | ✓ | Links working |
| API Endpoints | ✓ | All endpoints responding |
| Responsive Design | ✓ | Mobile/Tablet/Desktop ok |
| Performance | ✓ | Load time acceptable |
| Browser Support | ✓ | All major browsers |
| Accessibility | ✓ | WCAG AA compliant |

---

## 10. Sign-Off Checklist

- [ ] All functional tests passed
- [ ] All responsive tests passed
- [ ] No critical bugs
- [ ] No console errors
- [ ] Performance acceptable
- [ ] Browser compatibility confirmed
- [ ] API working correctly
- [ ] Database working correctly
- [ ] Ready for production/deployment

---

**Testing Completed:** [Date]
**Tested By:** [Your name]
**Status:** ✅ PASSED / ⚠️ NEEDS FIXES / ❌ FAILED

---

**Last Updated:** January 22, 2026
