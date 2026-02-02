# 🎨 Design Review Checklist (Enterprise-Grade)

Checklist untuk review **struktur kode UI/tampilan** yang scalable & maintainable.
Fokus: folder structure, component architecture, styling organization.

---

## 1️⃣ Folder Structure

- [ ] **Komponen dikelompokkan per fitur/page:** `/components/home/`, `/components/about/`
- [ ] **Shared/reusable components terpisah:** `/components/ui/` atau `/components/common/`
- [ ] **Layout components di folder sendiri:** `/components/layout/`
- [ ] **Tidak ada orphan files:** Semua file ada di folder yang sesuai
- [ ] **Maksimal 2 level nesting:** Tidak terlalu dalam

**Struktur ideal:**

```
src/
├── app/              # Pages (routing)
├── components/
│   ├── ui/           # Button, Input, Card, Modal
│   ├── layout/       # Header, Footer, Navbar
│   └── [feature]/    # Page-specific components
├── hooks/            # Custom hooks
├── lib/              # Utils, helpers
├── styles/           # Global CSS, themes
└── types/            # TypeScript interfaces
```

---

## 2️⃣ Component Architecture

- [ ] **Satu komponen = satu file** (kecuali sub-komponen kecil)
- [ ] **Props interface terdefinisi** dengan TypeScript
- [ ] **Komponen tidak terlalu besar:** Maks ~150 baris, split jika lebih
- [ ] **Tidak ada logic bisnis di komponen UI:** UI hanya render & handle events
- [ ] **Reusable components benar-benar reusable:** Tidak hardcode value

---

## 3️⃣ Naming Convention

- [ ] **Komponen:** PascalCase (`HeroSection.tsx`, `NavBar.tsx`)
- [ ] **Folder:** kebab-case atau lowercase (`components/home/`)
- [ ] **Props/interface:** PascalCase dengan suffix Props (`ButtonProps`)
- [ ] **Hooks:** camelCase dengan prefix use (`useScroll`, `useTheme`)
- [ ] **CSS classes:** kebab-case atau BEM (`hero-section`, `card__title`)

---

## 4️⃣ Styling Organization

- [ ] **Styling approach konsisten:** CSS Modules / Tailwind / Styled-components (pilih satu)
- [ ] **Global styles terpisah:** Reset, typography, variables di `/styles/`
- [ ] **Design tokens terdefinisi:** Colors, spacing, font sizes sebagai variabel
- [ ] **Tidak ada inline styles** kecuali dynamic values
- [ ] **Responsive breakpoints konsisten:** Gunakan variabel, bukan magic numbers

**Contoh design tokens:**

```css
:root {
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --radius-md: 8px;
}
```

---

## 5️⃣ Reusability & DRY

- [ ] **Tidak ada komponen duplikat:** Button, Card, Input hanya satu versi
- [ ] **Shared styles diextract:** Warna, spacing, shadows ke variabel
- [ ] **Common patterns jadi komponen:** Loading spinner, empty state, error boundary
- [ ] **Utility functions terpisah:** Format date, truncate text di `/lib/`

---

## 6️⃣ Imports & Dependencies

- [ ] **Import path bersih:** Gunakan alias (`@/components/`) bukan relative panjang
- [ ] **Tidak ada circular imports**
- [ ] **Tree-shakeable:** Import spesifik, bukan entire library
- [ ] **Icon imports efisien:** Tidak import semua icons sekaligus

---

## 7️⃣ Accessibility in Code

- [ ] **Semantic HTML elements:** `<button>`, `<nav>`, `<main>`, `<section>`
- [ ] **ARIA attributes jika perlu:** `aria-label`, `role`
- [ ] **Alt text pada `<Image>`**
- [ ] **Keyboard navigation:** `tabIndex`, `onKeyDown` handlers

---

## 8️⃣ Performance Patterns

- [ ] **Image menggunakan Next/Image** atau lazy loading
- [ ] **Component lazy loading:** Dynamic imports untuk heavy components
- [ ] **Memoization tepat:** `useMemo`, `useCallback` tidak berlebihan
- [ ] **Tidak ada re-render berlebihan:** State management efisien

---

## ✅ Final Quality Gate

- [ ] Folder structure scalable & konsisten
- [ ] Komponen modular & reusable
- [ ] Naming convention seragam
- [ ] Styling terorganisir dengan design tokens
- [ ] Tidak ada duplikasi kode UI
- [ ] Import paths bersih

---

## 📊 Format Hasil Review

| Section                | Status       | Catatan |
| ---------------------- | ------------ | ------- |
| Folder Structure       | ✅ / ⚠️ / ❌ | ...     |
| Component Architecture | ✅ / ⚠️ / ❌ | ...     |
| Naming Convention      | ✅ / ⚠️ / ❌ | ...     |
| Styling Organization   | ✅ / ⚠️ / ❌ | ...     |
| Reusability            | ✅ / ⚠️ / ❌ | ...     |
| Imports                | ✅ / ⚠️ / ❌ | ...     |
| Accessibility Code     | ✅ / ⚠️ / ❌ | ...     |
| Performance            | ✅ / ⚠️ / ❌ | ...     |
