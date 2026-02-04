# Modatepe Restoran & Konaklama Web Sitesi

Trabzon Ortahisar'da hizmet veren Modatepe Restoran & Konaklama için modern, çok dilli, SEO optimize ve mobil-öncelikli web sitesi.

## 🚀 Özellikler

### 🎯 Temel Özellikler
- **Modern Teknolojiler**: Next.js 14+ App Router, React 18, TypeScript
- **Çok Dilli Destek**: Türkçe (TR), İngilizce (EN), Arapça (AR) - RTL desteği
- **Responsive Tasarım**: Tüm cihazlarda optimum görüntüleme
- **SEO Optimize**: Meta etiketleri, JSON-LD, sitemap
- **PWA Desteği**: Progressive Web App - Ana ekrana eklenebilir
- **İletişim Formları**: E-posta entegrasyonu ile otomatik gönderim
- **WhatsApp Entegrasyonu**: Rezervasyon için direkt WhatsApp bağlantısı
- **Google Maps**: Konum gösterimi ve yol tarifi
- **Blog Sistemi**: Dinamik blog yazıları ve kategoriler
- **Erişilebilirlik**: WCAG AA standartlarına uygun

### 📱 Mobil Optimizasyonlar
- **7 Özel React Hook**: Responsive tasarım ve performans için
- **Touch-Friendly**: 44x44px minimum dokunma alanları
- **Safe Area Desteği**: iPhone notch ve Android çentik desteği
- **iOS Zoom Engellemesi**: Form inputlarında zoom önleme
- **GPU Hızlandırma**: Smooth animasyonlar
- **Scroll Lock**: Modal/menü açıkken arka plan scroll kilidi
- **Lazy Loading**: Intersection Observer ile performans
- **Reduced Motion**: Hareket hassasiyeti desteği

### 🎨 Custom Hooks
1. **useMediaQuery** - Responsive breakpoint algılama
2. **useScrollLock** - Body scroll kilitleme
3. **useWindowSize** - Pencere boyutu takibi
4. **useIntersectionObserver** - Viewport algılama & lazy loading
5. **useLocalStorage** - State persistence
6. **useDebounce** - Input debouncing
7. **useOnClickOutside** - Dış tıklama algılama

📖 Detaylı kullanım için: [`hooks/README.md`](hooks/README.md)

## 🛠️ Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### 1. Bağımlılıkları Yükleyin
```bash
npm install
```

### 2. Ortam Değişkenlerini Ayarlayın
`.env.local` dosyası oluşturun:

```env
# Gmail SMTP Ayarları
GMAIL_USER=murat60bir@gmail.com
GMAIL_APP_PASSWORD=your-app-password-here
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

Site `http://localhost:3000` adresinde çalışacak.

## 📁 Proje Yapısı

```
app/
├── [locale]/              # Çok dilli route yapısı
│   ├── page.tsx          # Ana sayfa
│   ├── galeri/           # Galeri sayfası
│   ├── menu/             # Menü sayfası
│   ├── konaklama/        # Konaklama sayfası
│   ├── blog/             # Blog sistemi
│   └── iletisim/         # İletişim sayfası
├── api/                  # API routes
│   ├── contact/          # İletişim formu
│   └── feedback/         # Geri bildirim formu
├── layout.tsx            # Root layout (Viewport & PWA)
└── globals.css           # Global stiller + Mobile CSS

components/
├── ui/                   # shadcn/ui bileşenleri
├── header.tsx            # Site başlığı (+ Hooks)
├── footer.tsx            # Site altbilgisi
├── contact-form.tsx      # İletişim formu
├── feedback-form.tsx     # Geri bildirim formu
└── google-map.tsx        # Harita bileşeni

hooks/
├── index.ts              # Central export
├── README.md             # Hook dokümantasyonu
├── use-media-query.ts    # Responsive detection
├── use-scroll-lock.ts    # Scroll management
├── use-window-size.ts    # Window dimensions
├── use-intersection-observer.ts  # Viewport detection
├── use-local-storage.ts  # State persistence
├── use-debounce.ts       # Input debouncing
└── use-on-click-outside.ts  # Outside click detection

locales/
├── tr.json              # Türkçe çeviriler
├── en.json              # İngilizce çeviriler
└── ar.json              # Arapça çeviriler

public/
└── manifest.json        # PWA manifest
```

## 🌐 Çok Dilli Destek

Site 3 dilde kullanılabilir:
- **Türkçe (TR)**: Varsayılan dil
- **İngilizce (EN)**: İkincil dil
- **Arapça (AR)**: RTL düzen desteği ile

## 📱 Mobil Optimizasyon Detayları

Tüm mobil optimizasyonlar için: [`MOBILE_OPTIMIZATION.md`](MOBILE_OPTIMIZATION.md)

### Touch-Friendly Tasarım
- ✅ 44x44px minimum tap targets
- ✅ iOS zoom prevention (16px inputs)
- ✅ Safe area handling (notched devices)
- ✅ Tap highlight removal

### Performans
- ✅ GPU-accelerated animations
- ✅ Lazy loading support
- ✅ Reduced motion support
- ✅ Optimized typography (clamp)

### PWA Desteği
- ✅ Manifest.json
- ✅ Apple web app capable
- ✅ Theme color metadata
- ✅ Standalone display mode

## 🚀 Dağıtım

### Production Build
```bash
npm run build
npm start
```

### Vercel (Önerilen)
```bash
vercel deploy
```

## 🎨 Hook Kullanım Örnekleri

### Responsive Component
```tsx
import { useIsMobile } from '@/hooks';

function MyComponent() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileView /> : <DesktopView />;
}
```

### Lazy Loading Image
```tsx
import { useIntersectionObserver } from '@/hooks';

function LazyImage({ src }) {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div ref={ref}>
      {isVisible && <img src={src} />}
    </div>
  );
}
```

### Debounced Search
```tsx
import { useDebounce } from '@/hooks';

function SearchBar() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  
  useEffect(() => {
    fetchResults(debouncedSearch);
  }, [debouncedSearch]);
}
```

## 🔧 Teknolojiler

- **Framework**: Next.js 14+
- **UI**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Components**: shadcn/ui, Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form, Zod
- **Animations**: Framer Motion
- **Email**: Nodemailer
- **PWA**: Web App Manifest

## 📊 Performans

- ✅ Mobile-first design
- ✅ SEO optimized
- ✅ PWA ready
- ✅ Lazy loading
- ✅ GPU acceleration
- ✅ Touch optimized

## 📞 İletişim

- **Telefon**: +90 532 448 49 84
- **E-posta**: murat60bir@gmail.com
- **Adres**: Ortahisar, Trabzon
- **Çalışma Saatleri**: 09:00 – 22:00

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

Made with ❤️ by baho with the love of God.

*Son Güncelleme: 2026-02-02 - Mobile Optimized v2.0*