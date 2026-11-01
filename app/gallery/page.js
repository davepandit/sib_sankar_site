import Header from "@/app/components/Header";
import CoverGallery from "@/app/components/CoverGallery";

const images = [
    "/WhatsApp Image 2026-10-29 at 15.27.43.jpeg",
    "/WhatsApp Image 2026-10-29 at 15.27.44 (1).jpeg",
    "/WhatsApp Image 2026-10-29 at 15.27.44.jpeg",
    "/WhatsApp Image 2026-10-29 at 15.27.45 (1).jpeg",
    "/WhatsApp Image 2026-10-29 at 15.27.45.jpeg",
    "/WhatsApp Image 2026-10-29 at 15.27.46.jpeg",
    "/WhatsApp Image 2026-10-29 at 15.28.47 (1).jpeg",
    "/WhatsApp Image 2026-10-29 at 15.28.47 (2).jpeg",
    "/WhatsApp Image 2026-10-29 at 15.28.47.jpeg",
    "/WhatsApp Image 2026-10-29 at 15.28.48 (1).jpeg",
    "/WhatsApp Image 2026-10-29 at 15.28.48.jpeg",
    "/WhatsApp Image 2026-10-29 at 15.30.02 (1).jpeg",
    "/WhatsApp Image 2026-10-29 at 15.30.02.jpeg",
    "/WhatsApp Image 2026-10-29 at 15.30.03 (1).jpeg",
    "/WhatsApp Image 2026-10-29 at 15.30.03.jpeg",
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center">
                        <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
                        Gallery
                    </h3>
                    <CoverGallery images={images} altPrefix="Gallery photo" />
                </div>
            </div>
        </main>
    );
}
