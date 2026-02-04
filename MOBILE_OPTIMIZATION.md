# 🚀 Modatepe - Hook Entegrasyonu ve Mobil Optimizasyon

## 📋 Yapılan Değişiklikler

### ✨ Yeni Eklenen Hook'lar

Sitenize 7 adet profesyonel React hook eklendi. Tüm hook'lar `hooks/` dizininde bulunmaktadır.

#### 1. **use-media-query.ts** - Responsive Tasarım
- Ekran boyutunu tespit eder
- Mobil, tablet, desktop kontrolü
- Dokunmatik cihaz algılama
```tsx
const isMobile = useIsMobile();
const isDesktop = useIsDesktop();
```

#### 2. **use-scroll-lock.ts** - Scroll Kilitleme
- Modal ve menü açıkken arka plan scroll'unu engeller
- Layout shift önleme
```tsx
useScrollLock(isMenuOpen);
```

#### 3. **use-window-size.ts** - Pencere Boyutu Takibi
- Gerçek zamanlı pencere boyutu
- Responsive layout hesaplamaları için
```tsx
const { width, height } = useWindowSize();
```

#### 4. **use-intersection-observer.ts** - Viewport Algılama
- Lazy loading için
- Scroll animasyonları
- Performans optimizasyonu
```tsx
const [ref, isVisible] = useIntersectionObserver();
```

#### 5. **use-local-storage.ts** - LocalStorage Yönetimi
- State'i localStorage'da saklar
- Tarayıcı sekmeler arası senkronizasyon
- Dil tercihi, tema gibi ayarlar için
```tsx
const [language, setLanguage] = useLocalStorage('lang', 'tr');
```

#### 6. **use-debounce.ts** - Debounce
- Arama inputları için
- API çağrılarını optimize eder
```tsx
const debouncedSearch = useDebounce(searchTerm, 500);
```

#### 7. **use-on-click-outside.ts** - Dış Tıklama Algılama
- Dropdown'ları kapatmak için
- Modal dışı tıklamaları yakalamak için
```tsx
useOnClickOutside(ref, () => setIsOpen(false));
```

---

## 📱 Mobil Optimizasyonlar (`globals.css`)

### Touch-Friendly Tasarım
✅ **44x44px minimum dokunma alanı** - Tüm butonlar ve linkler için  
✅ **iOS zoom engellemesi** - Form inputları 16px font-size kullanır  
✅ **Safe area handling** - Çentikli cihazlar için güvenli alan desteği  
✅ **Tap highlight kaldırma** - Daha temiz UX için

### Performans İyileştirmeleri
✅ **GPU hızlandırma** - `.gpu-accelerated` class'ı ile smooth animasyonlar  
✅ **Reduced motion** - Hareket hassasiyeti olan kullanıcılar için  
✅ **Optimized typography** - Clamp ile responsive tipografi  
✅ **Skeleton loading** - Shimmer efekti ile yükleme durumları

### Mobil-Öncelikli Stiller
```css
/* Örnek kullanım */
.touch-manipulation  /* Dokunma optimizasyonu */
.hide-scrollbar     /* Scrollbar gizleme */
.sticky-mobile      /* Mobilde sticky pozisyon */
.no-select          /* Text seçimini engelle */
```

### Landscape Mode Desteği
✅ Mobil yatay mod için optimize edilmiş font boyutları  
✅ Dark mode mobil optimizasyonları

---

## 🎯 Header Component Güncellemesi

`components/header.tsx` yeni hook'larla güncellendi:

```tsx
import { useScrollLock } from '@/hooks/use-scroll-lock';
import { useIsMobile, useIsDesktop } from '@/hooks/use-media-query';

export function Header({ locale, translations }: HeaderProps) {
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();
  
  // Mobil menü açıkken scroll'u kilitle
  useScrollLock(isOpen && isMobile);
  
  // ... rest of component
}
```

**Faydalar:**
- Mobil menü açıkken arka plan scroll edilmiyor
- Responsive davranış JavaScript ile de kontrol edilebiliyor
- Daha iyi kullanıcı deneyimi

---

## 🌐 PWA & Metadata Güncellemeleri

### Root Layout (`app/layout.tsx`)
```tsx
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover', // Çentikli cihazlar için
  themeColor: '#0F3D2E',
}

export const metadata: Metadata = {
  title: 'Modatepe Restoran & Konaklama - Trabzon Ortahisar',
  description: '...',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Modatepe',
  },
  formatDetection: {
    telephone: true, // Telefon numaralarını otomatik linkle
    email: true,     // Email'leri otomatik linkle
    address: true,   // Adresleri otomatik linkle
  },
}
```

### PWA Manifest (`public/manifest.json`)
✅ Progressive Web App desteği  
✅ Mobil cihazlara yüklenebilir  
✅ Ana ekrana ekleme özelliği  
✅ Standalone mod (uygulama gibi)

---

## 📚 Dokümantasyon

Tüm hook'ların detaylı kullanım kılavuzu:
📖 **`hooks/README.md`** - Örnekler ve best practices

---

## 🎨 Kullanım Örnekleri

### Lazy Loading Galeri
```tsx
import { useIntersectionObserver } from '@/hooks';

function Gallery() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });
  
  return (
    <div ref={ref}>
      {isVisible && <img src="..." alt="..." />}
    </div>
  );
}
```

### Responsive Component
```tsx
import { useIsMobile } from '@/hooks';

function ResponsiveMenu() {
  const isMobile = useIsMobile();
  
  return isMobile ? <MobileMenu /> : <DesktopMenu />;
}
```

### Search with Debounce
```tsx
import { useState } from 'react';
import { useDebounce } from '@/hooks';

function SearchBar() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  
  useEffect(() => {
    // API çağrısı sadece 500ms sonra
    fetchResults(debouncedSearch);
  }, [debouncedSearch]);
  
  return <input onChange={e => setSearch(e.target.value)} />;
}
```

---

## ✅ Mobil Optimizasyon Checklist

- [x] Viewport meta tag optimize edildi
- [x] Touch-friendly tap targets (44x44px minimum)
- [x] iOS zoom prevention (16px input font)
- [x] Safe area handling (notched devices)
- [x] PWA manifest eklendi
- [x] Apple web app desteği
- [x] GPU-accelerated animations
- [x] Reduced motion support
- [x] Landscape mode optimization
- [x] Scroll lock for modals/menus
- [x] Responsive hooks eklendi
- [x] Format detection (tel, email, address)
- [x] Theme color metadata
- [x] Loading skeletons

---

## 🚀 Sonraki Adımlar (Öneriler)

1. **Resimleri Optimize Edin**
   - Next.js Image component'i kullanın
   - WebP format kullanın
   - Lazy loading uygulayın

2. **Intersection Observer Hook'u Kullanın**
   - Galeri resimleri için lazy loading
   - Scroll animasyonları
   - Infinite scroll için

3. **Service Worker Ekleyin**
   - Offline desteği
   - PWA cache stratejisi
   - Background sync

4. **Performance Metrics**
   - Google Lighthouse testi
   - Core Web Vitals ölçümü
   - Mobile performance audit

5. **Touch Gestures**
   - Swipe navigation
   - Pull-to-refresh
   - Pinch-to-zoom (galeri için)

---

## 📊 Performans İyileştirmeleri

| Özellik | Önce | Sonra |
|---------|------|-------|
| Mobil UX | ⚠️ Temel | ✅ Optimize |
| Touch Targets | ❌ Değişken | ✅ 44x44px |
| PWA Desteği | ❌ Yok | ✅ Var |
| Scroll Lock | ❌ Yok | ✅ Var |
| Responsive Hooks | ❌ Yok | ✅ 7 adet |
| Safe Area | ❌ Yok | ✅ Var |
| Format Detection | ❌ Yok | ✅ Var |

---

## 🛠️ Teknik Detaylar

### Eklenen Dosyalar
```
hooks/
├── index.ts                      # Central export
├── README.md                     # Dokümantasyon
├── use-media-query.ts           # 4 exports
├── use-scroll-lock.ts
├── use-window-size.ts
├── use-intersection-observer.ts
├── use-local-storage.ts
├── use-debounce.ts
└── use-on-click-outside.ts

public/
└── manifest.json                # PWA manifest

app/
├── layout.tsx                   # Viewport & PWA metadata
└── globals.css                  # +200 satır mobil CSS
```

### Güncellenen Dosyalar
- `components/header.tsx` - Hook entegrasyonu
- `app/globals.css` - Mobil optimizasyon stilleri
- `app/layout.tsx` - Viewport ve PWA metadata

---

## 🎓 Öğrenme Kaynakları

Hook kullanımı için:
- 📖 `hooks/README.md` - Detaylı örnekler
- 🔍 `components/header.tsx` - Gerçek kullanım örneği

---

## ⚡ Performans İpuçları

1. **GPU Acceleration kullanın:**
   ```tsx
   <div className="gpu-accelerated animate-fade-in">
   ```

2. **Lazy loading için Intersection Observer:**
   ```tsx
   const [ref, isVisible] = useIntersectionObserver();
   ```

3. **Debounce ile API çağrılarını optimize edin:**
   ```tsx
   const debounced = useDebounce(value, 500);
   ```

4. **Responsive logic için media query hooks:**
   ```tsx
   const isMobile = useIsMobile();
   ```

---

## 📞 Destek

Herhangi bir sorunuz varsa:
- 📖 Hook dokümantasyonu: `hooks/README.md`
- 🔍 Örnek kullanım: `components/header.tsx`
- 🎨 CSS utilities: `app/globals.css` (satır 312+)

---

**🎉 Tebrikler!** Siteniz artık modern React hooks ve kapsamlı mobil optimizasyonlarla donatıldı.

**Build Test:**
```bash
npm run build  # ✅ Başarılı
```

**Dev Server:**
```bash
npm run dev    # Siteyi test edin
```

---

*Son güncelleme: 2026-02-02*
*Versiyon: 2.0 - Mobile Optimized with Hooks*
