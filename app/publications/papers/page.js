import Header from "@/app/components/Header";

export default function PapersPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">Journal Publications</h1>
                    <p className="mt-4 text-lg text-gray-600">List of published research papers and articles.</p>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20 text-center text-gray-500">
                    <p>Details coming soon...</p>
                </div>
            </div>
        </main>
    );
}
