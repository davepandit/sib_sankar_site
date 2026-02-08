import Header from "@/app/components/Header";

export default function PatentsPage() {
    const patents = [
        {
            id: 1,
            title: "System and method for a multi-modal fluidic device to detect heavy metals",
            inventors: "Nirmal Mazumder, Rajib Biswas, Chiranjit Ghosh, Sharmila Sajankila Nadumane, Sib Sankar Mal, Shree Hasta",
            refNumber: "202441019548",
            date: "15/03/2025",
            status: "Filed",
            type: "Indian Patent App."
        },
        {
            id: 2,
            title: "A Method for the preparation of Starch-Based Bioplastics film with activated carbon",
            inventors: "Nirmal Mazumder, Pooja N., Nafisa Yeshmin Ahmed, Neha P Santhosh, Sib Sankar Mal, Ishita Chakraborty, Krishna Kishore Mahato",
            refNumber: "202341056528",
            date: "23/08/2023",
            status: "Filed",
            type: "Indian Patent App."
        },
        {
            id: 3,
            title: "Polyoxometalates Solution for Removing Corrosion from a Corroded Metal Surface and a Method Thereof",
            inventors: "Sib Sankar Mal, Muhammed Anees P K",
            refNumber: "462651",
            date: "27/10/2023",
            status: "Granted",
            type: "Indian Patent"
        },
        {
            id: 4,
            title: "A high-performance supercapacitor device of polyaniline-triethyl amine ionic liquid combined phosphomolybdate electrode and method thereof",
            inventors: "Sib Sankar Mal, Saikat Dutta, Anjana Anandan Vannathan, Muhammed Anees P K",
            refNumber: "471075",
            date: "-",
            status: "Granted",
            type: "Indian Patent"
        },
        {
            id: 5,
            title: "Method of preparation of high energy density conducting polyaniline-phosphovanadomolybdate nanohybrid electrode for supercapacitor device application",
            inventors: "Sib Sankar Mal, Anjana Anandan Vannathan",
            refNumber: "506001",
            date: "03/11/2020",
            status: "Granted",
            type: "Indian Patent"
        },
        {
            id: 6,
            title: "Method of preparation of activated carbon-supported vanado-nickelate (IV) nanohybrid - electrode for high-performance supercapacitors device application",
            inventors: "Sib Sankar Mal, Partha Pratim Das, Sukanya Maity, Neetu B M.",
            refNumber: "483902",
            date: "-",
            status: "Granted",
            type: "Indian Patent"
        },
        {
            id: 7,
            title: "Efficient production of furanics and levulinic acid from carbohydrates in aqueous hydrochloric acid using quaternary ammonium salt as surfactant",
            inventors: "Saikat Dutta, Sib Sankar Mal, Navya Subray Bhat, Sarath B. O.",
            refNumber: "403776",
            date: "-",
            status: "Granted",
            type: "Indian Patent"
        },
        {
            id: 8,
            title: "Transition Metal Substituted Polyoxometalates and Process for their Preparation",
            inventors: "Ulrich Kortz, Sib Sankar Mal",
            refNumber: "US 7,820,868 B2",
            date: "-",
            status: "Granted",
            type: "US Patent"
        },
        {
            id: 9,
            title: "Transition Metal Substituted Polyoxometalates and Process for their Preparation",
            inventors: "Ulrich Kortz, Sib Sankar Mal",
            refNumber: "US 7,645,907 B2",
            date: "-",
            status: "Granted",
            type: "US Patent"
        }
    ];

    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">Patents</h1>
                    <p className="mt-4 text-lg text-gray-600">List of filed and granted patents.</p>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-green-50/50 border-b border-green-100 text-green-800">
                                        <th className="p-4 font-semibold w-16 text-center whitespace-nowrap">Sl No.</th>
                                        <th className="p-4 font-semibold min-w-[300px]">Patent Title</th>
                                        <th className="p-4 font-semibold min-w-[250px]">Inventors</th>
                                        <th className="p-4 font-semibold whitespace-nowrap">Ref. No. / App. No.</th>
                                        <th className="p-4 font-semibold whitespace-nowrap text-center">Status</th>
                                        <th className="p-4 font-semibold whitespace-nowrap text-center">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {patents.map((patent) => (
                                        <tr key={patent.id} className="hover:bg-gray-50/50 transition-colors">
                                            <td className="p-4 text-center font-medium text-gray-500 align-top text-sm">{patent.id}</td>
                                            <td className="p-4 font-medium text-gray-800 align-top leading-relaxed text-sm">{patent.title}</td>
                                            <td className="p-4 text-gray-600 align-top text-sm leading-relaxed">
                                                {patent.inventors.split('Sib Sankar Mal').map((part, index, array) => (
                                                    <span key={index}>
                                                        {part}
                                                        {index < array.length - 1 && (
                                                            <span className="font-bold text-gray-900 border-b-2 border-gray-900/10">Sib Sankar Mal</span>
                                                        )}
                                                    </span>
                                                ))}
                                            </td>
                                            <td className="p-4 text-gray-600 align-top text-sm whitespace-nowrap font-mono">{patent.refNumber}</td>
                                            <td className="p-4 align-top text-center">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${patent.status === 'Granted'
                                                    ? 'bg-green-100 text-green-800 border border-green-200'
                                                    : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                                                    }`}>
                                                    {patent.status}
                                                </span>
                                            </td>
                                            <td className="p-4 text-gray-500 text-center font-medium align-top whitespace-nowrap text-sm">{patent.date}</td>
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
