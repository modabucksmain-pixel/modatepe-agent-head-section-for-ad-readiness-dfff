import { Metadata } from 'next';
import Image from 'next/image';
import et from '/images/Et.jpeg';
import kahvalti from '/images/Kahvalti.jpeg';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getTranslations, type Locale } from '@/lib/i18n';
import { MessageCircle, Clock, Coffee, Utensils, Zap, Plus, Info } from 'lucide-react';

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
            {
                name: translations.restaurant.menuItems.serpmeKahvalti.name,
                price: '₺1200',
                description: translations.restaurant.menuItems.serpmeKahvalti.description,
                highlight: true
            }
        ],
        mainCourses: [
            { name: translations.restaurant.menuItems.kuzuPirzola.name, price: '₺800', description: translations.restaurant.menuItems.kuzuPirzola.description },
            { name: translations.restaurant.menuItems.danaAntrikot.name, price: '₺800', description: translations.restaurant.menuItems.danaAntrikot.description },
            { name: translations.restaurant.menuItems.sacKavurma.name, price: '₺800', description: translations.restaurant.menuItems.sacKavurma.description },
            { name: translations.restaurant.menuItems.kofte.name, price: '₺550', description: translations.restaurant.menuItems.kofte.description },
            { name: translations.restaurant.menuItems.tavukIzgara.name, price: '₺500', description: translations.restaurant.menuItems.tavukIzgara.description },
            { name: translations.restaurant.menuItems.kofteKilo.name, price: '₺1550', description: translations.restaurant.menuItems.kofteKilo.description }
        ],
        drinks: [
            { name: translations.restaurant.menuItems.turkKahvesi.name, price: '₺150', description: translations.restaurant.menuItems.turkKahvesi.description },
            { name: translations.restaurant.menuItems.cay.name, price: '₺40', description: translations.restaurant.menuItems.cay.description },
            { name: translations.restaurant.menuItems.nescafe.name, price: '₺100', description: translations.restaurant.menuItems.nescafe.description },
            { name: translations.restaurant.menuItems.mesrubat.name, price: '₺125', description: translations.restaurant.menuItems.mesrubat.description },
            { name: translations.restaurant.menuItems.su.name, price: '₺30', description: translations.restaurant.menuItems.su.description }
        ],
        desserts: [
            { name: translations.restaurant.menuItems.sutlac.name, price: '₺175', description: translations.restaurant.menuItems.sutlac.description }
        ]
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-80 flex items-center justify-center overflow-hidden">
                <Image
                    src={kahvalti}
                    alt={translations.restaurant.menu.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in tracking-tight">
                        {translations.restaurant.menu.title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto font-light opacity-90">
                        Karadeniz mutfağının seçkin lezzetleri
                    </p>
                    <div className="mt-8">
                        <Button asChild className="whatsapp-btn text-lg px-8 py-6 rounded-full hover-glow transition-all duration-300 border-2 border-white/20 backdrop-blur-sm">
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                {translations.cta.bookNow}
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section className="py-12 bg-white min-h-screen">
                <div className="container mx-auto px-4 max-w-3xl">
                    <Tabs defaultValue="breakfast" className="w-full">
                        <TabsList className="flex w-full overflow-x-auto mb-8 bg-white shadow-sm p-1.5 rounded-2xl border border-slate-100 sticky top-4 z-40 no-scrollbar">
                            <TabsTrigger
                                value="breakfast"
                                className="flex-1 min-w-[100px] data-[state=active]:bg-brand-green data-[state=active]:text-white rounded-xl font-medium transition-all py-3"
                            >
                                <Utensils className="w-4 h-4 mr-2" />
                                {translations.restaurant.menu.breakfast}
                            </TabsTrigger>
                            <TabsTrigger
                                value="mainCourses"
                                className="flex-1 min-w-[110px] data-[state=active]:bg-brand-green data-[state=active]:text-white rounded-xl font-medium transition-all py-3"
                            >
                                <Zap className="w-4 h-4 mr-2" />
                                {translations.restaurant.menu.mainCourses}
                            </TabsTrigger>
                            <TabsTrigger
                                value="drinks"
                                className="flex-1 min-w-[100px] data-[state=active]:bg-brand-green data-[state=active]:text-white rounded-xl font-medium transition-all py-3"
                            >
                                <Coffee className="w-4 h-4 mr-2" />
                                {translations.restaurant.menu.drinks}
                            </TabsTrigger>
                            <TabsTrigger
                                value="desserts"
                                className="flex-1 min-w-[100px] data-[state=active]:bg-brand-green data-[state=active]:text-white rounded-xl font-medium transition-all py-3"
                            >
                                <span className="mr-2">🍰</span>
                                {translations.restaurant.menu.desserts}
                            </TabsTrigger>
                        </TabsList>

                        {Object.entries(menuItems).map(([category, items]) => {
                            const categoryColors = {
                                breakfast: 'from-yellow-50 to-orange-50 border-yellow-200',
                                mainCourses: 'from-red-50 to-orange-50 border-red-200',
                                drinks: 'from-blue-50 to-teal-50 border-blue-200',
                                desserts: 'from-pink-50 to-purple-50 border-pink-200'
                            };

                            const priceColors = {
                                breakfast: 'text-orange-600',
                                mainCourses: 'text-red-600',
                                drinks: 'text-blue-600',
                                desserts: 'text-pink-600'
                            };

                            return (
                                <TabsContent key={category} value={category} className="space-y-4 animate-slide-up">
                                    {items.map((item, index) => (
                                        <Card
                                            key={index}
                                            className={`border-2 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01] bg-gradient-to-br ${categoryColors[category as keyof typeof categoryColors]} overflow-hidden`}
                                        >
                                            <CardContent className="p-6 relative">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
                                                <div className="flex justify-between items-start gap-4 relative">
                                                    <div className="flex-1 space-y-2">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-brand-green opacity-60"></div>
                                                            <h3 className="font-bold text-xl text-brand-green leading-tight">
                                                                {item.name}
                                                            </h3>
                                                        </div>
                                                        {item.description && (
                                                            <p className="text-gray-700 leading-relaxed text-sm">
                                                                {item.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                    <div className="flex-shrink-0 text-right">
                                                        <div className={`text-2xl font-black ${priceColors[category as keyof typeof priceColors]} drop-shadow-sm`}>
                                                            {item.price}
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </TabsContent>
                            );
                        })}
                    </Tabs>

                    <div className="mt-12 mb-8">
                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
                            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-blue-900 mb-1">Bilgilendirme</h4>
                                <p className="text-sm text-blue-800 leading-relaxed">
                                    Fiyatlarımız güncel piyasa koşullarına göre değişiklik gösterebilir.
                                    Alerjen uyarısı ve detaylı bilgi için lütfen servis personelimizden yardım isteyiniz.
                                    Hesaplarınıza %10 servis ücreti eklenebilir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
