# Custom React Hooks Documentation

This directory contains reusable React hooks for the Modatepe website. These hooks enhance functionality and improve mobile optimization.

## Available Hooks

### 🎯 `use-media-query.ts`
**Purpose**: Detect responsive breakpoints and screen sizes

```tsx
import { useIsMobile, useIsTablet, useIsDesktop } from '@/hooks';

function MyComponent() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();
  
  return (
    <div>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}
```

**API**:
- `useMediaQuery(query: string)` - Generic media query hook
- `useIsMobile()` - Returns true on screens < 768px
- `useIsTablet()` - Returns true on screens 768px-1023px
- `useIsDesktop()` - Returns true on screens >= 1024px
- `useIsTouchDevice()` - Returns true for touch devices

---

### 🔒 `use-scroll-lock.ts`
**Purpose**: Lock body scroll when modals/menus are open

```tsx
import { useScrollLock } from '@/hooks';

function Modal({ isOpen }) {
  useScrollLock(isOpen); // Locks scroll when isOpen is true
  
  return isOpen ? <div>Modal Content</div> : null;
}
```

**API**:
- `useScrollLock(isLocked: boolean)` - Locks/unlocks body scroll

---

### 📐 `use-window-size.ts`
**Purpose**: Track window dimensions in real-time

```tsx
import { useWindowSize } from '@/hooks';

function MyComponent() {
  const { width, height } = useWindowSize();
  
  return (
    <div>
      Window size: {width} x {height}
    </div>
  );
}
```

**API**:
- Returns `{ width: number, height: number }`

---

### 👁️ `use-intersection-observer.ts`
**Purpose**: Detect when elements enter viewport (for lazy loading, animations)

```tsx
import { useIntersectionObserver } from '@/hooks';

function LazyImage({ src }) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });
  
  return (
    <div ref={ref}>
      {isVisible && <img src={src} alt="Lazy loaded" />}
    </div>
  );
}
```

**API**:
- Options: `{ threshold?, root?, rootMargin?, freezeOnceVisible? }`
- Returns: `[ref, isIntersecting, entry]`

---

### 💾 `use-local-storage.ts`
**Purpose**: Persist state in localStorage with sync across tabs

```tsx
import { useLocalStorage } from '@/hooks';

function LanguageSelector() {
  const [language, setLanguage] = useLocalStorage('language', 'tr');
  
  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="tr">Türkçe</option>
      <option value="en">English</option>
    </select>
  );
}
```

**API**:
- `useLocalStorage<T>(key: string, initialValue: T)`
- Returns: `[value, setValue, removeValue]`

---

### ⏱️ `use-debounce.ts`
**Purpose**: Debounce rapidly changing values (search input, resize events)

```tsx
import { useDebounce } from '@/hooks';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);
  
  useEffect(() => {
    // API call with debounced value
    fetchResults(debouncedSearch);
  }, [debouncedSearch]);
  
  return <input onChange={(e) => setSearchTerm(e.target.value)} />;
}
```

**API**:
- `useDebounce<T>(value: T, delay?: number)`
- Default delay: 500ms

---

### 🖱️ `use-on-click-outside.ts`
**Purpose**: Detect clicks outside an element (dropdowns, modals)

```tsx
import { useRef } from 'react';
import { useOnClickOutside } from '@/hooks';

function Dropdown() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  
  useOnClickOutside(ref, () => setIsOpen(false));
  
  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <div>Dropdown content</div>}
    </div>
  );
}
```

**API**:
- `useOnClickOutside<T>(ref: RefObject<T>, handler: Function)`

---

## Mobile Optimization Best Practices

### 1. Touch-Friendly Tap Targets
All interactive elements have minimum 44x44px tap targets on mobile (enforced in `globals.css`)

### 2. Prevent iOS Zoom on Input Focus
Form inputs use `font-size: 16px` to prevent auto-zoom on iOS

### 3. Safe Area Handling
Body padding accounts for device notches and safe areas

### 4. GPU-Accelerated Animations
Use `.gpu-accelerated` class for smooth animations

### 5. Reduced Motion Support
Respects user's motion preferences automatically

## Example: Mobile-Optimized Image Gallery

```tsx
import { useIsMobile, useIntersectionObserver } from '@/hooks';

function ImageGallery({ images }) {
  const isMobile = useIsMobile();
  const columns = isMobile ? 1 : 3;
  
  return (
    <div className={`grid grid-cols-${columns} gap-4`}>
      {images.map((img, i) => (
        <LazyImage key={i} src={img} />
      ))}
    </div>
  );
}

function LazyImage({ src }) {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });
  
  return (
    <div ref={ref} className="aspect-square">
      {isVisible && (
        <img 
          src={src} 
          alt="" 
          className="w-full h-full object-cover gpu-accelerated"
        />
      )}
    </div>
  );
}
```

## Performance Tips

1. **Use `useDebounce` for expensive operations** (API calls, complex calculations)
2. **Leverage `useIntersectionObserver` for lazy loading** images and components
3. **Apply `gpu-accelerated` class** for smooth animations on mobile
4. **Use `useMediaQuery`** instead of CSS-only breakpoints when JS logic is needed
5. **Lock scroll with `useScrollLock`** to prevent background scrolling in modals

---

For more examples, check the components that use these hooks:
- `components/header.tsx` - Uses `useScrollLock` and `useMediaQuery`
