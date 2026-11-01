import Header from "@/app/components/Header";
import PhdScholarCard from "@/app/components/PhdScholarCard";
import { phdGuided } from "@/app/data/phdStudents";

// Ongoing students are the guided students with no year of passing yet
const ongoing = phdGuided.filter((s) => !s.year);
const phdStudents = ongoing.filter((s) => s.supervision === "Guide (PI)");
const coGuideStudents = ongoing.filter((s) => s.supervision === "Co-guide (Co-PI)");

const Section = ({ title, students }) => (
    <section className="mb-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center justify-center">
            {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map((student) => (
                <PhdScholarCard
                    key={student.id}
                    name={student.name}
                    thesis={student.thesis}
                    photo={student.photo}
                />
            ))}
        </div>
    </section>
);

export default function OngoingStudentsPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Header />
            <div className="pt-36">
                <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Ongoing Supervised Students</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Students currently pursuing their research and degrees under my guidance.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
                    <Section title="Ph.D. Students" students={phdStudents} />
                    <Section title="Co-Guide Students" students={coGuideStudents} />
                </div>
            </div>
        </main>
    );
}
