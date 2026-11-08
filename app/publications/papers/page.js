import Header from "@/app/components/Header";
import PublicationList from "@/app/components/PublicationList";
import { publications } from "@/app/data/publications";

export default function PapersPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">Significant Publications</h1>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <PublicationList publications={publications} />
                    </div>
                </div>
            </div>
        </main>
    );
}
