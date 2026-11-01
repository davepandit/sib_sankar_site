import Header from "@/app/components/Header";
import CoverGallery from "@/app/components/CoverGallery";

const images = ["/RCS Journal Cover.jpeg"];

export default function RcsJournalFrontCoverPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center">
                        <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
                        RCS Journal Front Cover
                    </h3>
                    <CoverGallery
                        images={images}
                        altPrefix="RCS Journal Front Cover"
                        layoutClassName="max-w-md mx-auto"
                    />
                </div>
            </div>
        </main>
    );
}
