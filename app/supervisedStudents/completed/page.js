import Header from "@/app/components/Header";
import MscTable from "@/app/components/MscTable";
import { phdGuided } from "@/app/data/phdStudents";
import { mscGuided } from "@/app/data/mscStudents";

const PhdTable = ({ data }) => (
    <div className="mb-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-10 border-l-4 border-green-500 pl-4">
            PhD Thesis Guided
        </h3>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-green-50/50 border-b border-green-100 text-green-800">
                            <th className="p-4 font-semibold w-16 text-center whitespace-nowrap">Sl No.</th>
                            <th className="p-4 font-semibold min-w-[200px]">Name</th>
                            <th className="p-4 font-semibold whitespace-nowrap text-center min-w-[200px]">Supervision</th>
                            <th className="p-4 font-semibold whitespace-nowrap text-center">Year of Passing</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {data.map((student, index) => (
                            <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="p-4 text-center font-medium text-gray-500 align-top">{index + 1}</td>
                                <td className="p-4 align-top font-bold text-gray-900">{student.name}</td>
                                <td className="p-4 text-gray-700 text-center align-top min-w-[200px]">
                                    {student.supervision}
                                    {student.note && <div className="text-sm text-gray-500 mt-1">{student.note}</div>}
                                </td>
                                <td className="p-4 text-gray-700 text-center align-top font-medium">{student.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

export default function CompletedStudentsPage() {
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
                    {/* Students with no year yet are ongoing and listed on the ongoing page */}
                    <PhdTable data={phdGuided.filter((s) => s.year)} />
                    <MscTable data={mscGuided.filter((s) => !s.ongoing)} />
                </div>
            </div>
        </main>
    );
}
