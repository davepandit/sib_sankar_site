import Header from "@/app/components/Header";
import StudentCard from "@/app/components/StudentCard";

export default function CompletedStudentsPage() {
    // Real data for Ph.D. Awarded
    const phdCompleted = [
        {
            id: 1,
            name: "Dr. Ritesh Tiwari",
            roll: "16",
            thesis: "Application of Polyoxometalates as efficient and green catalyst for catalytic upgrading of cellulosic biomass",
            supervision: "Guide",
            year: "2020"
        },
        {
            id: 2,
            name: "Dr. Sukanya Maity",
            roll: "187057PH004",
            thesis: "Polyoxometalates-carbonaceous based electrode materials for energy storage applications",
            supervision: "Co-guide",
            year: "2022"
        },
        {
            id: 3,
            name: "Dr. Anjana A. V.",
            roll: "187014CY001",
            thesis: "Electrochemical studies of conducting polymers and activated carbon-based vanadium substituted polyoxometalates hybrid electrode materials for energy applications",
            supervision: "Guide",
            year: "2023"
        },
        {
            id: 4,
            name: "Dr. Navya S. Bhat",
            roll: "187063CY004",
            thesis: "Catalytic preparation and value addition of renewable chemical intermediates from carbohydrates",
            supervision: "Co-guide",
            year: "2023"
        },
        {
            id: 5,
            name: "Dr. Madhusree J E",
            roll: "19711CY011",
            thesis: "Biomass-derived activated carbon substituted polyoxometalates for energy Applications",
            supervision: "Guide",
            year: "2024"
        }
    ];

    // Helpers to generate placeholder data for other sections
    const createPlaceholders = (count, rolePrefix) => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            name: `${rolePrefix} Name ${i + 1}`,
            thesis: `${rolePrefix} Thesis Title (Year)`,
            position: "Assistant Professor / Researcher at Institute Name, Location",
        }));
    };

    const summerStudents = createPlaceholders(8, "Summer Intern");
    const mastersStudents = createPlaceholders(27, "Masters Student");

    const PhdTable = ({ data }) => (
        <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 border-l-4 border-green-500 pl-4">
                Ph.D. Awarded
            </h3>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-green-50/50 border-b border-green-100 text-green-800">
                                <th className="p-4 font-semibold w-16 text-center whitespace-nowrap">Sl No.</th>
                                <th className="p-4 font-semibold min-w-[200px]">Name</th>
                                <th className="p-4 font-semibold min-w-[300px]">Title of The Thesis</th>
                                <th className="p-4 font-semibold whitespace-nowrap text-center">Supervision</th>
                                <th className="p-4 font-semibold whitespace-nowrap text-center">Year of Passing</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {data.map((student) => (
                                <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 text-center font-medium text-gray-500 align-top">{student.id}</td>
                                    <td className="p-4 align-top">
                                        <div className="font-bold text-gray-900">{student.name}</div>
                                        <div className="text-sm text-gray-500 mt-1">{student.roll}</div>
                                    </td>
                                    <td className="p-4 text-gray-700 align-top leading-relaxed">{student.thesis}</td>
                                    <td className="p-4 text-gray-700 text-center align-top">{student.supervision}</td>
                                    <td className="p-4 text-gray-700 text-center align-top font-medium">{student.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const Section = ({ title, students }) => (
        <section className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 border-l-4 border-green-500 pl-4">
                {title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-y-16">
                {students.map((student, idx) => (
                    <StudentCard
                        key={idx}
                        name={student.name}
                        thesis={student.thesis}
                        position={student.position}
                    />
                ))}
            </div>
        </section>
    );

    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Completed Supervised Students</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Alumni who have successfully completed their research training and degrees.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
                    <PhdTable data={phdCompleted} />
                    <Section title="Summer Students" students={summerStudents} />
                    <Section title="Masters Students" students={mastersStudents} />
                </div>
            </div>
        </main>
    );
}
