# 📱 Visualisasi Tampilan Home Page

## Desktop View (1200px+)

```
┌────────────────────────────────────────────────────────────────────┐
│  📚 ENSIKLOPEDIA SASTRA | 🔍 Cari pengarang, karya, lembaga...     │
└────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                    Ensiklopedia Sastra Indonesia                      │
│        Temukan berbagai informasi tentang sastra Indonesia            │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────┐ ┌────────────────────────────────────────────────┐
│   🎭 KATEGORI    │ │  Semua Konten Sastra (40 hasil)               │
│ ─────────────────│ ├────────────────────────────────────────────────┤
│ 📚 Semua (40)    │ │  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│ ✍️  Pengarang(7) │ │  │ ✍️ Card 1│  │ ✍️ Card 2│  │ ✍️ Card 3│    │
│ 📖 Karya(10)     │ │  │          │  │          │  │          │    │
│ 📰 Media(8)      │ │  │ Baca >>  │  │ Baca >>  │  │ Baca >>  │    │
│ 🏆 Hadiah(8)     │ │  └──────────┘  └──────────┘  └──────────┘    │
│ 🏛️ Lembaga(5)    │ │                                                │
│ ✨ Gejala(2)     │ │  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│ ─────────────────│ │  │ 📖 Card 4│  │ 📖 Card 5│  │ 📖 Card 6│    │
│ Stats:          │ │  │          │  │          │  │          │    │
│ Total: 40       │ │  │ Baca >>  │  │ Baca >>  │  │ Baca >>  │    │
│ Kategori: 6     │ │  └──────────┘  └──────────┘  └──────────┘    │
└──────────────────┘ └────────────────────────────────────────────────┘
```

## Content Card Detail

```
┌────────────────────────┐
│  📖  (atau gambar)     │  ← Gambar/Default emoji (220px height)
│                        │
├────────────────────────┤
│ Title Karya Sastra     │  ← Judul (2 line max)
│ 📖 Kategori            │  ← Category badge dengan emoji
├────────────────────────┤
│ 📅 Tahun Publikasi     │  ← Tahun
│                        │
│ Deskripsi singkat...   │  ← Preview teks (2 line max)
│                        │
│ Preview text content   │  ← Content preview (3 line max)
│ Lorem ipsum dolor...   │
├────────────────────────┤
│                 Baca >> │  ← Link ke detail page
└────────────────────────┘
```

## Tablet View (768px - 1024px)

```
┌──────────────────────────────────────────┐
│ 📚 ENSIKLOPEDIA | 🔍 Cari...            │
└──────────────────────────────────────────┘

┌──────────────────────────────────────────┐
│   Ensiklopedia Sastra Indonesia          │
│   Informasi Lengkap Sastra               │
└──────────────────────────────────────────┘

┌────────────────┐ ┌────────────────┐
│  🎭 KATEGORI   │ │ Semua Konten   │
│ ── Pengarang   │ │ (40 hasil)     │
│ ── Karya       │ │                │
│ ── Media       │ │ ┌──────┐┌─────┐│
│ ── Hadiah      │ │ │Card 1││Card2││
│ ── Lembaga     │ │ │Baca>>││Baca│││
│ ── Gejala      │ │ └──────┘└─────┘│
│                │ │                │
│ Stats: ...     │ │ ┌──────┐┌─────┐│
└────────────────┘ │ │Card 3││Card4││
                   │ │Baca>>││Baca│││
                   │ └──────┘└─────┘│
                   └────────────────┘
```

## Mobile View (< 768px)

```
┌──────────────────────┐
│ 📚 ENSIKLOPEDIA      │
│ 🔍 Cari...          │
└──────────────────────┘

┌──────────────────────┐
│ Ensiklopedia Sastra  │
│ Informasi Sastra     │
└──────────────────────┘

┌──────────────────────┐
│  🎭 KATEGORI         │
│ ✍️  Pengarang (7)     │
│ 📖 Karya (10)        │
│ 📰 Media (8)         │
│ 🏆 Hadiah (8)        │
│ 🏛️ Lembaga (5)       │
│ ✨ Gejala (2)        │
│                      │
│ Total: 40            │
│ Kategori: 6          │
└──────────────────────┘

┌──────────────────────┐
│ Semua Konten         │
│ (40 hasil)           │
├──────────────────────┤
│  ┌────────────────┐  │
│  │ ✍️ Card 1      │  │
│  │                │  │
│  │ Baca >>        │  │
│  └────────────────┘  │
│                      │
│  ┌────────────────┐  │
│  │ 📖 Card 2      │  │
│  │                │  │
│  │ Baca >>        │  │
│  └────────────────┘  │
└──────────────────────┘
```

## Fitur-Fitur Interaktif

### 1. Search/Filter
```
Input: "Pramoedya"
↓
Real-time filter
↓
Tampil hanya content yang relevan dengan "Pramoedya"
```

### 2. Category Filter
```
Klik kategori → Highlight active
↓
Tampil content dari kategori tersebut
↓
Show result count: "Ditemukan X hasil"
```

### 3. Hover Effects
```
Card hover:
- Lift up (translateY -8px)
- Shadow lebih besar
- Gambar zoom 1.08x
- Border highlight warna ungu

Button hover:
- Translate X +2px
- Shadow lebih besar
```

### 4. Loading State
```
┌────────────────────────┐
│      ⟳ (spinner)       │
│   Memuat konten...     │
└────────────────────────┘
```

### 5. Empty State
```
┌────────────────────────────┐
│         🔍                 │
│ Tidak ada konten ditemukan │
│ Coba pilih kategori lain   │
│    [Reset Filter]          │
└────────────────────────────┘
```

---

## Color Scheme

```
Primary Gradient:
#667eea → #764ba2 (Ungu modern)

Text Colors:
- Primary: #2c3e50 (Dark blue-gray)
- Secondary: #7f8c8d (Gray)
- Light: #95a5a6 (Light gray)

Background:
- Main: #f5f7fa (Light blue-gray)
- Card: #ffffff (White)
- Hover: #f8f9fc (Very light blue)

Borders:
- Primary: #e8eef5 (Light blue)
- Active: #667eea (Gradient color)

Accents:
- Success: Green
- Warning: Orange
- Error: #ff6b6b (Red)
```

## Typography

```
Headers (h1): 3.5rem / 800 weight / line-height 1.2
Headers (h2): 2rem / 700 weight
Headers (h3): 1.3rem / 700 weight

Card Title: 1.1rem / 700 weight / 2 line clamp
Body Text: 0.85-0.95rem / 300-500 weight / 1.6 line-height
Label: 0.75rem / 600 weight / 1px letter-spacing
```

## Responsive Breakpoints

```
Desktop: 1200px+
  - Sidebar sticky
  - Grid 3-4 columns
  - Full search bar

Tablet: 768px - 1024px
  - Sidebar sticky
  - Grid 2-3 columns
  - Condensed search

Mobile: < 768px
  - Stack layout
  - Sidebar above content
  - Grid 1-2 columns
  - Touch-optimized buttons
```

---

## Animation Timeline

```
Page Load:
1. Header slide down (0-0.3s)
2. Hero section fade in (0.1-0.4s)
3. Sidebar fade in (0.2-0.4s)
4. Content grid fade in with stagger (0.3-0.6s)

Interaction:
- Card hover: 0.4s ease
- Button click: 0.3s ease
- Search filter: 0.3s ease
- Spinner: 0.8s linear infinite
```

---

## Accessibility Features

✅ Semantic HTML structure
✅ ARIA labels untuk buttons
✅ Color contrast sesuai WCAG AA
✅ Keyboard navigation support
✅ Focus states yang jelas
✅ Responsive text sizing
✅ Touch target minimal 44px

---

**Last Updated:** January 22, 2026
