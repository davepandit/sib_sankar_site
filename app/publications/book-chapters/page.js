import Header from "@/app/components/Header";

export default function BookChaptersPage() {
    const chapters = [
        {
            id: 1,
            title: "Impact of dietary advanced glycation end products (dAGEs) in processed foods on health",
            authors: "Steffi Kunnel, Ishita Chakraborty, Indira Govindaraju, Sib Sankar Mal, Nirmal Mazumder",
        },
        {
            id: 2,
            title: "Physicochemical characterization of microcrystalline cellulose extracted by sequential dual acid hydrolysis",
            authors: "Ranjan Dutta Kalita, Ishita Chakraborty, Pinki Singh, Soumyabrata Banik, Sib Sankar Mal, Guan-Yu Zhuo, Nirmal Mazumder",
        },
        {
            id: 3,
            title: "Recent Advances in Plasmonic Probes, Theory, and Practice: Polyoxometalate-Based Composite Materials in Sensing Applications",
            authors: "Sukanya Maity, Kumar Swata, Partha Pratim Das, Sib Sankar Mal",
        },
        {
            id: 4,
            title: "Synthesis and Applications in Chemistry and Materials - Vol. 1 - Chapter 6: Polyoxovanadates: catalysis, pharmacology, antibacterial and anticancer activities",
            authors: "Manuel Aureliano, Sib Sankar Mal, Gil Fraqueza, Ana Luísa De Sousa-Coelho, Maria Leonor Faleiro, Nadiia I. Gumerova and Annette Rompel",
        },
    ];

    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">Book Chapters</h1>
                    <p className="mt-4 text-lg text-gray-600">List of published book chapters and contributions.</p>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-green-50/50 border-b border-green-100 text-green-800">
                                        <th className="p-4 font-semibold w-16 text-center whitespace-nowrap">Sl No.</th>
                                        <th className="p-4 font-semibold min-w-[300px]">Chapter Title</th>
                                        <th className="p-4 font-semibold min-w-[300px]">Authors</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {chapters.map((chapter) => (
                                        <tr key={chapter.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-4 text-center font-medium text-gray-500 align-top text-sm">{chapter.id}</td>
                                            <td className="p-4 font-medium text-gray-800 align-top leading-relaxed text-sm">{chapter.title}</td>
                                            <td className="p-4 text-gray-600 align-top text-sm leading-relaxed">
                                                {chapter.authors.split('Sib Sankar Mal').map((part, index, array) => (
                                                    <span key={index}>
                                                        {part}
                                                        {index < array.length - 1 && (
                                                            <span className="font-bold text-gray-900 border-b-2 border-gray-900/10">Sib Sankar Mal</span>
                                                        )}
                                                    </span>
                                                ))}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
