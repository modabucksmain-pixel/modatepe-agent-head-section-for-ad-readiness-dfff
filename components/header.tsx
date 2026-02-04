'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Menu, MessageCircle } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { useScrollLock } from '@/hooks/use-scroll-lock';
import { useIsMobile, useIsDesktop } from '@/hooks/use-media-query';

interface HeaderProps {
  locale: Locale;
  translations: any;
}

export function Header({ locale, translations }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();

  // Lock scroll when mobile menu is open
  useScrollLock(isOpen && isMobile);

  const navigation = [
    { name: translations.nav.home, href: `/${locale}` },
    { name: translations.nav.galleryPhotos, href: `/${locale}/galeri` },
    { name: translations.nav.menu, href: `/${locale}/menu` },
    { name: translations.nav.accommodation, href: `/${locale}/konaklama` },
    { name: translations.nav.blog, href: `/${locale}/blog` },
    { name: translations.nav.contact, href: `/${locale}/iletisim` },
  ];

  const whatsappUrl = "https://wa.me/905324484984?text=Merhaba,%20Modatepe'de%20rezervasyon%20yapmak%20istiyorum.";

  return (
    <header className="glass-strong sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center space-x-3">
          <div className="w-10 h-10 gradient-green rounded-lg flex items-center justify-center shadow-glow">
            <span className="text-white font-bold text-base">M</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-brand-green">Modatepe</h1>
            <p className="text-xs text-brand-gray-600">Restoran & Konaklama</p>
          </div>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden lg:flex items-center space-x-10 flex-1 justify-center">
          {navigation.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== `/${locale}` && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-base font-semibold transition-colors hover:text-brand-green',
                  isActive
                    ? 'text-brand-green'
                    : 'text-gray-700'
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher currentLocale={locale} />

          {/* WhatsApp CTA */}
          <Button asChild className="whatsapp-btn hover-glow">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">{translations.cta.bookNow}</span>
            </a>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <nav className="mt-8 flex flex-col space-y-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href ||
                    (item.href !== `/${locale}` && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-brand-green py-2',
                        isActive
                          ? 'text-brand-green'
                          : 'text-gray-700'
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div >
    </header >
  );
}