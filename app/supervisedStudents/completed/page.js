import Header from "@/app/components/Header";
import StudentCard from "@/app/components/StudentCard";
import { phdGuided } from "@/app/data/phdStudents";

export default function CompletedStudentsPage() {
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
    // Real data for MSc Thesis Guided (academic year order, latest first)
    const mscGuided = [
        { id: 1, name: "Kavya", roll: "1300513CY11", thesis: "Design and Synthesis of Vanad… containing arseno-polyoxometalates", academicYear: "2014-2015", defense: "May 2015" },
        { id: 2, name: "Soumya A. M", roll: "13402113CY18", thesis: "Synthesis and Structure of Vanad… based Polyoxometalates", academicYear: "2014-2015", defense: "May 2015" },
        { id: 3, name: "Hariprasad B M", roll: "14404514CY07", thesis: "Synthesis and Characterization … Heterometallic (3d-4f Hyb… Polyoxometalates for single molec… magnet (SSM) Applications", academicYear: "2015-2016", defense: "May 2016" },
        { id: 4, name: "Janardana", roll: "14400914CY09", thesis: "Design and Synthesis of New org… Ligand for Metal Complexes", academicYear: "2015-2016", defense: "May 2016" },
        { id: 5, name: "Amal Sekharan U.K", roll: "15402315CY01", thesis: "Esterification of Levulinic acid u… heteropoly acid as a green catalyst", academicYear: "2016-2017", defense: "May 2017" },
        { id: 6, name: "Pritish R. Moon", roll: "15400215CY12", thesis: "Conversion of Benzoic acid to ester u… heteropolytungstates as a potential cata…", academicYear: "2016-2017", defense: "May 2017" },
        { id: 7, name: "Nivedha Vinod", roll: "16405016CY16", thesis: "Heteropoly acid as a green catalyst… esterification of Stearic acid", academicYear: "2017-2018", defense: "May 2018" },
        { id: 8, name: "Manjunath G. Javoor", roll: "16403116CY12", thesis: "Synthesis of Levulinic esters u… polyoxometalates as a potential catalys…", academicYear: "2017-2018", defense: "May 2018" },
        { id: 9, name: "Abhijith M B", roll: "17600217CY02", thesis: "Synthesis, Characterization and cata… activity if Ionic-Liquid H₅[PV₂Mo₁₀… nanohybrid Materials", academicYear: "2018-2019", defense: "May 2019" },
        { id: 10, name: "Anoosha Rahman A. S.", roll: "17603617CY04", thesis: "An efficient method for the synthesi… benzoic ester using heteropoly acid… catalyst", academicYear: "2018-2019", defense: "May 2019" },
        { id: 11, name: "Athira O. V.", roll: "17603617CY06", thesis: "Heteropoly acid catalysed esterificatio… Oleic Acid", academicYear: "2018-2019", defense: "May 2019" },
        { id: 12, name: "Shalet Chako", roll: "186049186CY025", thesis: "Heteropoly acid Catalyses Esterificatio… Adipic Acid", academicYear: "2019-2020", defense: "May 2020" },
        { id: 13, name: "Neethu B M", roll: "186011186CY015", thesis: "Activated carbon-Supported vana… Nickelate Based Symmetric Hy… Materials for Energy Application", academicYear: "2019-2020", defense: "May 2020" },
        { id: 14, name: "Muhammed Annes P K", roll: "186006186CY014", thesis: "Investigation of symmetric supercapac… based on ionic liquid Polyoxomolyb… Nanocomposite", academicYear: "2019-2020", defense: "May 2020" },
        { id: 15, name: "Prajapati Suraj Laxman", roll: "196042CY016", thesis: "Immobilization of Vanadomolybdate… various supporting materials … heterogeneous catalysis of Diacids", academicYear: "2020-2021", defense: "April 2021" },
        { id: 16, name: "Saurabh Srivastava", roll: "196008CY020", thesis: "Redox-active Silicomolybdate Me… Oxide Impregnated into Battery w… rGO for Energy Conversion", academicYear: "2020-2021", defense: "April 2021" },
        { id: 17, name: "Bharat Kumar N", roll: "206017CY005", thesis: "Encapsulation of polyoxometalates on… metal-organic frameworks for en… storage application", academicYear: "2021-2022", defense: "April 2022" },
        { id: 18, name: "Vidhi Sharma", roll: "206009CY028", thesis: "Immobilization of vanadium substit… poyoxotungstate I activated carbon… energy conversion", academicYear: "2021-2022", defense: "April 2022" },
        { id: 19, name: "Athulya K", roll: "2160011CY009", thesis: "Polyoxometalates modified biom… derived carbon for supercapac… electrode", academicYear: "2022-2023", defense: "May 2023" },
        { id: 20, name: "Sneha Ghosh Dastidar", roll: "21600CY032", thesis: "Host-guest hybrid materials for cata… preparation of xanthene derivatives u… solvent-free conditions", academicYear: "2022-2023", defense: "May 2023" },
        { id: 21, name: "Vipinghosh K", roll: "2160006CY036", thesis: "Mo-based crystal POMOFs … electrochemical capacitor performance", academicYear: "2022-2023", defense: "May 2023" },
        { id: 22, name: "Soumya Deep Maity", roll: "2260065CY028", thesis: "Synthesis of Coumarin Derivatives u… Niobium (V) oxide supported heterog… acids hybrid composite as poten… catalyst", academicYear: "2023-2024", defense: "May 2024" },
        { id: 23, name: "Shyamol Kishore Gogoi", roll: "2260037CY027", thesis: "Wells-Dawson polyoxometa;ates modi… biomass-derived biochar carbon as… energy storage applcation", academicYear: "2023-2024", defense: "May 2024" },
        { id: 24, name: "Hadpe Mayur Sanjay", roll: "2260040CY011", thesis: "Strategies for perfect confinement… POM@MOF and its application in en… storage devices", academicYear: "2023-2024", defense: "May 2024" },
        { id: 25, name: "Chandan Sahoo", roll: "2360046CY011", thesis: "Catalytic synthesis of naphthyl derivat… by reacting suitable organic buil… blocks using heteropoly compounds-b… catalyst", academicYear: "2024-2025", defense: "May 2025" },
        { id: 26, name: "Sangamesh A", roll: "2360012CY029", thesis: "Design and Synthesis of Polyoxometal… Organic Framework (POM-MOF) Compo… for Enhanced Electrochemical Energy Sto… Applications", academicYear: "2024-2025", defense: "May 2025" },
        { id: 27, name: "Riya L", roll: "2460046CY027", thesis: "Supported Heteropoly acids as Effic… catalyst for C-C and C-N bond forma… via Mannich-Type Reaction", academicYear: "2025-2026", defense: "May 2026" },
        { id: 28, name: "Mubashira V", roll: "2460044CY023", thesis: "Design and Synthesis of Mxe… Polyoxometalates (Mxene-PO… nanocomposites for energy stor… applications", academicYear: "2025-2026", defense: "May 2026" },
        { id: 29, name: "Khajamainuddin D Agasa…", roll: "2460029CY017", thesis: "A greener route to facile multicompo… synthesis via Polyoxometalates-ba… catalysts", academicYear: "2025-2026", defense: "May 2026" },
        { id: 30, name: "Arpan Guchhait", roll: "256CY008", thesis: "Green and Efficient Heterogeneous Cata… Synthesis of Bromo-Xanthene Derivatives", academicYear: "2026-2027", defense: "May 2027" },
        { id: 31, name: "Neha Ghanshyam Mendh…", roll: "256CY024", thesis: "Preparation and Characterization of Soc… Alginate Amide Derivative", academicYear: "2026-2027", defense: "May 2027" },
        { id: 32, name: "Shehal Shivaji Shinde", roll: "256CY031", thesis: "Synthesis and Characterization of Redox-Active Polyoxometalate-Based Nanocomposites for Energy Storage Devi…", academicYear: "2026-2027", defense: "May 2027" },
    ].sort((x, y) => Number(y.academicYear.slice(0, 4)) - Number(x.academicYear.slice(0, 4)));


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
                                <th className="p-4 font-semibold min-w-[240px]">Title of The Thesis</th>
                                <th className="p-4 font-semibold whitespace-nowrap text-center min-w-[200px]">Supervision</th>
                                <th className="p-4 font-semibold whitespace-nowrap text-center">Year of Passing</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {data.map((student, index) => (
                                <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 text-center font-medium text-gray-500 align-top">{index + 1}</td>
                                    <td className="p-4 align-top">
                                        <div className="font-bold text-gray-900">{student.name}</div>
                                        {student.roll && <div className="text-sm text-gray-500 mt-1">{student.roll}</div>}
                                    </td>
                                    <td className="p-4 text-gray-700 align-top leading-relaxed">{student.thesis}</td>
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

    const MscTable = ({ data }) => (
        <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 border-l-4 border-green-500 pl-4">
                MSc Thesis Guided
            </h3>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-green-50/50 border-b border-green-100 text-green-800">
                                <th className="p-4 font-semibold w-16 text-center whitespace-nowrap">Sl No.</th>
                                <th className="p-4 font-semibold min-w-[200px]">Name</th>
                                <th className="p-4 font-semibold min-w-[300px]">Title of the Thesis</th>
                                <th className="p-4 font-semibold text-center min-w-[180px]">Academic Year / Thesis Defense (Month)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {data.map((student, index) => (
                                <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 text-center font-medium text-gray-500 align-top">{index + 1}</td>
                                    <td className="p-4 align-top">
                                        <div className="font-bold text-gray-900">{student.name}</div>
                                        <div className="text-sm text-gray-500 mt-1">{student.roll}</div>
                                    </td>
                                    <td className="p-4 text-gray-700 align-top leading-relaxed">{student.thesis}</td>
                                    <td className="p-4 text-gray-700 text-center align-top font-medium">
                                        {student.academicYear}
                                        <div className="text-sm font-normal text-gray-500 mt-1">{student.defense}</div>
                                    </td>
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
                    {/* Students with no year yet are ongoing and listed on the ongoing page */}
                    <PhdTable data={phdGuided.filter((s) => s.year)} />
                    <MscTable data={mscGuided} />
                    <Section title="Summer Students" students={summerStudents} />
                </div>
            </div>
        </main>
    );
}
