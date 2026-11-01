import Header from "@/app/components/Header";

const talks = [
    {
        id: 1,
        description: (
            <>
                International Webinar on Advances in Physics, Chemistry, Mathematics, Computer Sciences
                &amp; Biological Sciences (CONIAPS XXVI), organized by Mahatma Gandhi University,
                Kottayam, Kerala &amp; International Academy of Physical Sciences (IAPS), 18-20 December 2020.
            </>
        ),
    },
    {
        id: 2,
        description: (
            <>
                Workshop in Manipal-GOK Bioincubator on &ldquo;Hands-on Training Workshop on DSC, TGA, and FTIR&rdquo;,
                MAHE, Manipal, 22<sup>nd</sup> July 2022.
            </>
        ),
    },
    {
        id: 3,
        description: (
            <>
                Deliver a Talk in a webinar, <strong>One-day Workshop on &ldquo;Frontiers in Science&rdquo;</strong>, 2023, MAHE.
            </>
        ),
    },
    {
        id: 4,
        description: (
            <>
                Invited as a Guest speaker for 5-day Faculty Development Program (FDP) on &ldquo;Trace elements for
                health and environment&rdquo;, <strong>Vellore Institute of Technology (VIT), Vellore</strong>, Dec,
                4<sup>th</sup> December to 8<sup>th</sup>, 2023.
            </>
        ),
    },
    {
        id: 5,
        description: (
            <>
                Invited as a Plenary Speaker in SERB Sponsored High-End Workshop 2024 on &ldquo;Application of
                Artificial Intelligence in Smart Energy Generation and Storage Devices&rdquo;{" "}
                <strong>National Institute of Technology Karnataka, Surathkal</strong>,{" "}
                <strong>19<sup>th</sup> to 25<sup>st</sup> June 2024</strong>.
            </>
        ),
    },
    {
        id: 6,
        description: (
            <>
                Invited Speaker in MSME-Sponsored Advanced Entreprenurship and skill Development Program (A-ESDP)
                on &ldquo;Recent Trends and Future Prospects in Energy Storage and Enery Harvesting Devices&rdquo;{" "}
                <strong>S. V. National Institute of Technology Surat, Gujarat</strong>,{" "}
                <strong>17-21 February, 2025.</strong>
            </>
        ),
    },
    {
        id: 7,
        description: (
            <>
                Invited as a Guest speaker for 5-day Faculty Development Program (FDP) on &ldquo;Quality: From
                Compliance to Performance&rdquo; <strong>Vellore Institute of Technology (VIT), Vellore</strong>,{" "}
                <strong>24<sup>th</sup> - 28<sup>th</sup> February, 2025.</strong>
            </>
        ),
    },
];

export default function InvitedTalksPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
                        Invited Talks
                    </h3>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <ol className="divide-y divide-gray-100">
                            {talks.map((talk) => (
                                <li key={talk.id} className="flex gap-4 p-5 md:p-6 hover:bg-gray-50/50 transition-colors">
                                    <span className="w-8 shrink-0 text-center font-medium text-gray-500">{talk.id}</span>
                                    <p className="text-gray-700 leading-relaxed">{talk.description}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </main>
    );
}
