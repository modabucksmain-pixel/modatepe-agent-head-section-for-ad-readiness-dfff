import { Metadata } from 'next';
import Image from 'next/image';
import et from '/images/Et.jpeg';
import kahvalti from '/images/Kahvalti.jpeg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getTranslations, type Locale } from '@/lib/i18n';
import { MessageCircle, Clock } from 'lucide-react';

interface MenuPageProps {
    params: { locale: Locale };
}

export async function generateMetadata({ params }: MenuPageProps): Promise<Metadata> {
    const translations = await getTranslations(params.locale);

    return {
        title: translations.restaurant.menu.title,
        description: 'Modatepe Restoran menüsü',
    };
}

export default async function MenuPage({ params: { locale } }: MenuPageProps) {
    const translations = await getTranslations(locale);

    const whatsappUrl = "https://wa.me/905324484984?text=Merhaba,%20Modatepe'de%20rezervasyon%20yapmak%20istiyorum.";

    const menuItems = {
        breakfast: [
            { name: 'Serpme Kahvaltı', price: '₺600', description: 'Sıcaklar dahil kişi başı kahvaltı ücretimizdir. Kayana Kuymak Kalem böreği Cips Turşu ve Patates kavurması sahanda yumurta semaver ve soğuklar dahildir. Tek kişilik kahvaltı verilmemekte ve çocuk için sevis ücreti alınmamaktadır' }
        ],
        mainCourses: [
            { name: '250g dana antrikot porsiyon', price: '₺700', description: 'Yalnızca yerli jersey' },
            { name: '250g kuzu pirzola porsiyon', price: '₺700', description: 'Balıkesir kıvırcık kuzu' },
            { name: '300g köfte porsiyon', price: '₺500', description: 'Orijinal Akçaabat jersey köfte' },
            { name: 'Saç kavurma porsiyon', price: '₺700', description: 'Meşhur jersey saç kavurma' },
            { name: '300g tavuk ızgara porsiyon', price: '₺700', description: 'Banvit kemiksiz pirzola' }
        ],
        desserts: [
            { name: 'Sütlaç', price: '₺125', description: 'Hamsiköy sütlacı' }
        ]
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center overflow-hidden">
                <Image
                    src={kahvalti}
                    alt={translations.restaurant.menu.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                        {translations.restaurant.menu.title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Karadeniz mutfağının seçkin lezzetleri
                    </p>
                </div>
            </section>

            {/* Menu Info */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-4 bg-brand-gray-100 rounded-2xl py-6 px-8 mb-8">
                            <Clock className="w-6 h-6 text-brand-green" />
                            <span className="text-lg font-semibold text-brand-green">
                                {translations.hours.opening}
                            </span>
                        </div>

                        <Button asChild className="whatsapp-btn text-lg px-8 py-4 hover-glow">
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                {translations.cta.bookNow}
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section className="py-16 bg-gradient-to-br from-green-50 via-white to-yellow-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-green">
                        {translations.restaurant.menu.title}
                    </h2>
                    <p className="text-center text-brand-gray-600 mb-12 max-w-2xl mx-auto">
                        Taze malzemelerle hazırlanan özel lezzetlerimiz
                    </p>

                    <div className="max-w-4xl mx-auto">
                        <Tabs defaultValue="breakfast" className="w-full">
                            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-soft p-2 rounded-2xl">
                                <TabsTrigger
                                    value="breakfast"
                                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-orange-400 data-[state=active]:text-white rounded-xl font-semibold transition-all"
                                >
                                    ☀️ {translations.restaurant.menu.breakfast}
                                </TabsTrigger>
                                <TabsTrigger
                                    value="mainCourses"
                                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-500 data-[state=active]:text-white rounded-xl font-semibold transition-all"
                                >
                                    🍖 {translations.restaurant.menu.mainCourses}
                                </TabsTrigger>
                                <TabsTrigger
                                    value="desserts"
                                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-400 data-[state=active]:to-purple-400 data-[state=active]:text-white rounded-xl font-semibold transition-all"
                                >
                                    🍰 {translations.restaurant.menu.desserts}
                                </TabsTrigger>
                            </TabsList>

                            {Object.entries(menuItems).map(([category, items]) => {
                                const categoryColors = {
                                    breakfast: 'from-yellow-50 to-orange-50 border-yellow-200',
                                    mainCourses: 'from-red-50 to-orange-50 border-red-200',
                                    desserts: 'from-pink-50 to-purple-50 border-pink-200'
                                };

                                const priceColors = {
                                    breakfast: 'text-orange-600',
                                    mainCourses: 'text-red-600',
                                    desserts: 'text-pink-600'
                                };

                                return (
                                    <TabsContent key={category} value={category} className="space-y-4">
                                        <div className="grid gap-6">
                                            {items.map((item, index) => (
                                                <Card
                                                    key={index}
                                                    className={`border-2 shadow-glow hover-lift overflow-hidden bg-gradient-to-br ${categoryColors[category as keyof typeof categoryColors]} animate-scale-in`}
                                                    style={{ animationDelay: `${index * 0.1}s` }}
                                                >
                                                    <CardContent className="p-6 relative">
                                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
                                                        <div className="flex justify-between items-start gap-6 relative">
                                                            <div className="flex-1">
                                                                <div className="flex items-center gap-2 mb-3">
                                                                    <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
                                                                    <h3 className="font-bold text-xl text-brand-green">
                                                                        {item.name}
                                                                    </h3>
                                                                </div>
                                                                <p className="text-gray-700 leading-relaxed">
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                            <div className="text-right flex-shrink-0">
                                                                <div className={`text-3xl font-black ${priceColors[category as keyof typeof priceColors]} drop-shadow-sm`}>
                                                                    {item.price}
                                                                </div>
                                                                <div className="text-xs text-gray-500 mt-1">kişi başı</div>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    </TabsContent>
                                );
                            })}
                        </Tabs>
                    </div>

                    <div className="mt-12 text-center">
                        <div className="inline-block bg-white rounded-2xl shadow-soft p-6 max-w-2xl">
                            <p className="text-sm text-gray-600 mb-4">
                                💡 <strong>Not:</strong> Fiyatlar değişkenlik gösterebilir. Güncel fiyatlar için lütfen bizimle iletişime geçin.
                            </p>
                            <Button asChild className="whatsapp-btn hover-glow">
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    Rezervasyon Yap
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
