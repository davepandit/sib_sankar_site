import Header from "@/app/components/Header";
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
                        <ol className="divide-y divide-gray-100">
                            {publications.map((pub) => (
                                <li key={pub.id} className="flex gap-4 p-5 md:p-6 hover:bg-gray-50/50 transition-colors">
                                    <span className="w-8 shrink-0 text-center font-medium text-gray-500">{pub.id}</span>
                                    <p className="text-gray-700 leading-relaxed">{pub.citation}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </main>
    );
}
