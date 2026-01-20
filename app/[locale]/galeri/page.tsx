import { Metadata } from 'next';
import Image from 'next/image';
import et from '/images/Et.jpeg';
import kahvalti from '/images/Kahvalti.jpeg';
import kahvalt2 from '/images/kahvalt2.jpeg';
import koridor from '/images/koridor.jpeg';
import koridor2 from '/images/koridor2.jpeg';
import vaybe from '/images/vaybe.jpeg';
import galeri2 from '/images/galeri2.jpeg';
import galeri4 from '/images/galeri4.jpeg';
import bungalov from '/images/bungalov.jpeg';
import manzara4k from '/images/manzara4k.jpeg';
import manzaraiyi from '/images/manzaraiyi.jpeg';
import normaloda from '/images/normaloda.jpeg';
import { getTranslations, type Locale } from '@/lib/i18n';

interface GalleryPageProps {
    params: { locale: Locale };
}

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
    const translations = await getTranslations(params.locale);

    return {
        title: translations.nav.galleryPhotos,
        description: 'Modatepe Restoran & Konaklama tesis fotoğrafları',
    };
}

export default async function GalleryPage({ params: { locale } }: GalleryPageProps) {
    const translations = await getTranslations(locale);

    const galleryImages = [
        manzara4k,
        galeri2,
        kahvalti,
        koridor,
        galeri4,
        et,
        kahvalt2,
        koridor2,
        vaybe,
        bungalov,
        manzaraiyi,
        normaloda
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center overflow-hidden">
                <Image
                    src={manzara4k}
                    alt={translations.nav.galleryPhotos}
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/30" />

                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                        {translations.nav.galleryPhotos}
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Tesisimizden fotoğraflar
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative h-64 md:h-80 rounded-2xl overflow-hidden hover-scale shadow-soft animate-scale-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Image
                                    src={image}
                                    alt={`Tesis fotoğrafı ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
