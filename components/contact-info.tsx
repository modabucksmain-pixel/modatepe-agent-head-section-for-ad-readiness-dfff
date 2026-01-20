import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

interface ContactInfoProps {
  locale: Locale;
  translations: any;
}

export function ContactInfo({ locale, translations }: ContactInfoProps) {
  const contactDetails = [
    {
      icon: Phone,
      label: translations.contact.info.phone,
      value: '+90 532 448 49 84',
      href: 'tel:+905324484984'
    },
    {
      icon: Mail,
      label: translations.contact.info.email,
      value: 'murat60bir@outlook.com',
      href: 'mailto:murat60bir@outlook.com'
    },
    {
      icon: MapPin,
      label: translations.contact.info.address,
      value: 'Ortahisar, Trabzon',
      href: '#'
    },
    {
      icon: Clock,
      label: translations.contact.info.hours,
      value: translations.hours.opening,
      href: '#'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-green">
          {translations.contact.info.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactDetails.map((detail, index) => (
            <Card key={index} className="text-center border-0 shadow-glow hover-lift">
              <CardHeader className="pb-3">
                <div className="w-16 h-16 gradient-green-glow rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <detail.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-brand-green text-lg">
                  {detail.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {detail.href !== '#' ? (
                  <a
                    href={detail.href}
                    className="text-brand-gray-600 hover:text-brand-green transition-colors font-medium"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-brand-gray-600 font-medium">
                    {detail.value}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}