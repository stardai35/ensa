# 📱 PAGINATION & FAQ PREVIEW

## Visual Layout

### Home Page Layout (After Update)

```
┌─────────────────────────────────────────────────────┐
│                    NAVBAR                            │
├─────────────────────────────────────────────────────┤
│                 HERO SECTION                        │
│  "Ensiklopedia Sastra Indonesia"                   │
├──────────────────┬──────────────────────────────────┤
│                  │                                  │
│  SIDEBAR         │  CONTENT AREA                    │
│  - Kategori      │  - Search results               │
│  - Filter        │  - 9 items in grid              │
│  - Stats         │                                  │
│                  │  [Card] [Card] [Card]           │
│                  │  [Card] [Card] [Card]           │
│                  │  [Card] [Card] [Card]           │
│                  │                                  │
│                  │  ┌──────────────────────────────┐│
│                  │  │   PAGINATION SECTION         ││
│                  │  │ ← Previous | 1 2 3 | Next →  ││
│                  │  └──────────────────────────────┘│
│                  │                                  │
└──────────────────┴──────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│            FAQ SECTION (Sebelum Footer)             │
│  ❓ Pertanyaan yang Sering Ditanyakan               │
│  "Temukan jawaban untuk pertanyaan umum..."         │
│                                                     │
│  ▶ Apa itu Ensiklopedia Sastra Indonesia?          │
│  ▶ Apa tujuan dibuatnya Ensiklopedia...?           │
│  ▼ Apa saja informasi yang tersedia...?            │
│    ┌───────────────────────────────────────────┐   │
│    │ Ensiklopedia ini menyediakan informasi    │   │
│    │ tentang: Pengarang terkenal Indonesia...  │   │
│    └───────────────────────────────────────────┘   │
│  ▶ Apakah semua konten di ensiklopedia...?         │
│  ▶ Bagaimana jika menemukan kesalahan...?          │
│                                                     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                   FOOTER                            │
└─────────────────────────────────────────────────────┘
```

---

## Pagination Controls

### Location
After the content grid, before FAQ section

### Components
```
  ← Sebelumnya  | 1  2  3  4  5  →  Selanjutnya →

Appearance:
- Purple gradient "Previous/Next" buttons
- White number buttons with purple border
- Active page has purple gradient background
- Hover effects on all buttons
- Disabled state when at first/last page
```

### Behavior
- Shows 9 items per page
- Page information: "Ditemukan 40 hasil (halaman 1 dari 5)"
- Clicking page numbers scrolls to content top
- Disabled buttons (prev on page 1, next on last page)
- All page numbers visible (e.g., 1 2 3 4 5)

---

## FAQ Section

### Location
After pagination, before footer

### Layout
```
┌──────────────────────────────────────┐
│  ❓ Pertanyaan yang Sering Ditanyakan │
│  Temukan jawaban untuk pertanyaan...  │
│                                      │
│  ┌────────────────────────────────┐ │
│  │ ▶ Question 1?                  │ │
│  └────────────────────────────────┘ │
│  ┌────────────────────────────────┐ │
│  │ ▼ Question 2?                  │ │
│  │                                │ │
│  │ Answer text appears here...    │ │
│  │ It can be multiple lines...    │ │
│  │                                │ │
│  └────────────────────────────────┘ │
│  ┌────────────────────────────────┐ │
│  │ ▶ Question 3?                  │ │
│  └────────────────────────────────┘ │
└──────────────────────────────────────┘
```

### Accordion Features
- Click to expand/collapse
- Smooth slideDown animation
- Purple left border when expanded
- Icon rotates (▶ becomes ▼)
- One at a time or multiple can be open
- Professional styling and spacing

---

## The 5 FAQ Questions

### 1. Apa itu Ensiklopedia Sastra Indonesia?
**Answer:** Penjelasan tentang platform digital komprehensif yang menyediakan informasi lengkap tentang dunia sastra Indonesia.

### 2. Apa tujuan dibuatnya Ensiklopedia Sastra Indonesia?
**Answer:** Tujuan utama adalah melestarikan dan mempromosikan warisan sastra Indonesia, memfasilitasi penelitian akademik...

### 3. Apa saja informasi yang tersedia di ensiklopedia ini?
**Answer:** Informasi tentang pengarang, karya sastra, media penyebar, hadiah, lembaga, dan gejala dalam sastra Indonesia.

### 4. Apakah semua konten di ensiklopedia ini gratis?
**Answer:** Ya, semua konten dapat diakses secara gratis karena pengetahuan sastra harus dapat diakses oleh semua kalangan.

### 5. Bagaimana jika menemukan kesalahan atau ingin memberi saran?
**Answer:** Silakan hubungi tim melalui formulir kontak atau email di halaman Tentang Kami.

---

## User Interactions

### Pagination
1. **Click "Selanjutnya →"** → Goes to page 2, shows items 10-18
2. **Click page number "3"** → Goes to page 3, shows items 19-27
3. **Click "← Sebelumnya"** → Goes to previous page
4. **At page 1:** "← Sebelumnya" button is disabled
5. **At last page:** "Selanjutnya →" button is disabled

### FAQ
1. **Click question** → Answer slides down, icon changes to ▼
2. **Click again** → Answer slides up, icon changes back to ▶
3. **Multiple:** Can have multiple questions open at once
4. **Click another:** Previous one stays open, new one opens

---

## Responsive Behavior

### Desktop (1200px+)
- 3 columns for cards
- All pagination buttons visible side-by-side
- FAQ questions full width
- Plenty of spacing

### Tablet (768px-1024px)
- 2 columns for cards
- Pagination buttons wrap if needed
- FAQ responsive
- Reduced padding

### Mobile (<768px)
- 1 column for cards
- Pagination buttons stack/wrap
- Smaller font sizes
- Compact spacing
- Touch-friendly buttons

### Small Mobile (<480px)
- Minimal button sizes
- Tighter spacing
- Optimized for thumb navigation
- Essential information only

---

## Color Scheme

### Pagination
- **Default:** White background, purple border
- **Active Page:** Purple gradient background, white text
- **Buttons:** Purple gradient for Previous/Next
- **Hover:** Light background change, slight lift effect

### FAQ
- **Section Background:** Light gradient (same as page)
- **Questions:** White background, dark text
- **Active Question:** Light purple background
- **Left Border:** Purple when expanded
- **Hover:** Subtle shadow increase

---

## Animations

### Pagination
- Smooth 0.3s transitions
- Buttons lift up on hover
- Border color change on hover

### FAQ
- slideDown animation (0.3s) when expanding
- Smooth opacity and transform
- Icon changes instantly
- Border-left color transitions smoothly

---

## Mobile Experience

### Pagination on Mobile
```
← Sebelumnya
1  2  3  4  5
Selanjutnya →
```
- Stacks vertically
- Touch-friendly size (40px minimum)
- Clear spacing between buttons

### FAQ on Mobile
- Questions take full width
- Answers wrap properly
- Easy tap targets (50px minimum height)
- Readable font sizes (min 16px)

---

## Performance Impact

- ✅ Reduces initial page load (9 items vs 40)
- ✅ Lighter DOM with pagination
- ✅ Smooth animations (60fps)
- ✅ No external dependencies
- ✅ Pure React state management

---

## Code Structure

### State Variables Used
```javascript
currentPage = 1              // Tracks current page
expandedFAQ = null          // Tracks which FAQ is open
ITEMS_PER_PAGE = 9          // Configurable
totalPages = Math.ceil(...) // Calculated
```

### Functions
```javascript
toggleFAQ(index)            // Toggle FAQ expand/collapse
handleSelectCategory()      // Resets pagination
handleSearch()             // Resets pagination
```

### Calculations
```javascript
totalPages = Math.ceil(allFilteredContents.length / ITEMS_PER_PAGE)
startIndex = (currentPage - 1) * ITEMS_PER_PAGE
displayedContents = allFilteredContents.slice(startIndex, endIndex)
```

---

## Example Data Flow

### With 40 Items Total, 9 Per Page:

**Page 1:** Items 1-9 (cards showing)
**Page 2:** Items 10-18
**Page 3:** Items 19-27
**Page 4:** Items 28-36
**Page 5:** Items 37-40 (only 4 items on this page)

Pagination shows: `← Previous | 1 2 3 4 5 | Next →`

---

## Browser Compatibility

✅ Chrome/Edge (Latest)
✅ Firefox (Latest)
✅ Safari (Latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

**Everything is visual, responsive, and user-friendly! 🎉**

