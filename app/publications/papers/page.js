import Header from "@/app/components/Header";

const publications = [
  {
    id: 1,
    citation: (
      <>
        Electrode dependence and interfacial effects in modulating resistive
        switching performance of Cu xO based memristor. Nivedya Thathron,
        Snehasish Jana, Sushil Pandey, <strong>Sib Sankar Mal*</strong>,
        Partha Pratim Das*.{" "}
        <strong style={{ color: "red" }}>
          Submitted to ACS Applied Electronic Materials
        </strong>
      </>
    ),
  },
  {
    id: 2,
    citation: (
      <>
        Fabrication of VS2/MXene heterostructure electrode-based
        micro-supercapacitor for on-chip energy source applications. Ashish
        Kumar Yadav, Jasil T K, Muhammed Anees P. K., Nivedya Thathron,
        Ajith Kulangara Madam, <strong>Sib Sankar Mal</strong>, Partha Pratim
        Das, and Sushil Kumar Pandey*.{" "}
        <strong style={{ color: "red" }}>
          Subitted to IEEE Transactions on Materials for Electron Devices
        </strong>
      </>
    ),
  },
  {
    id: 3,
    citation: (
      <>
        Carbon Nanotube-Supported Vanadium Substituted Phospho-Molybdate
        Nanohybrid for Supercapacitor Application. Bhimaraya R Biradar,
        Swetha M T, Nivedya Thathron, Muhammed Anees P. K., Aniket Hanchate,
        Partha Pratim Das*, <strong>Sib Sankar Mal*</strong>.{" "}
        <strong style={{ color: "red" }}>
          Accepted to ChemPhysChem
        </strong>
      </>
    ),
  },
  {
    id: 4,
    citation: (
      <>
        Activated Carbon-Infused Starch Composite Films: Redefining Cosmetic
        Facial Sheet Masks. Siya Jain, Shreya Shahapur, Pooja N; Madhusree J
        E, Sib Sankar Mal, Nirmal Mazumder*.{" "}
        <strong style={{ color: "red" }}>
          Submitted to Materials Today Sustainability
        </strong>
      </>
    ),
  },
  {
    id: 5,
    citation: (
      <>
        Revealing the Structure Organization of Starch From Native Potatoes
        Using Polarization-Resolved Second Harmonic Generation Microscopy.
        Kiran Kumar Kolathur, Nandana Bijulal, Gagan Raju, Bhaswati Sarmah,
        Vishwa Jyoti Baruah, Ishita Chakraborty, Sib Sankar Mal, Hemanth
        Noothalapati, Ajeetkumar Patil, Guan-Yu Zhuo, Nirmal Mazumder*,
        <em> Microscopy and Microanalysis</em>, <strong>2025</strong>, 31,
        ozaf010. <strong>(IF: 3.2, Q2)</strong>
      </>
    ),
  },
  {
    id: 6,
    citation: (
      <>
        Polyoxometalate integrated with conducting polymers nanocomposites
        for Supercapacitor and Biological Sensor Applications. Muhammed Anees
        P. K., <strong>Sib Sankar Mal*</strong>{" "}
        <em>Inorg. Chem.</em>, <strong>2025</strong>, 64, 16, 8222–8237.
        <strong> (IF: 4.3, Q1)</strong>
      </>
    ),
  },
  {
    id: 7,
    citation: (
      <>
        Catalytic Activity of Xanthen and Unprecedented Evolution of
        Naphthopyrans Using Heteropoly Acid-Tantalum(V) Oxide Hybrid Composite
        as promoter. Joydeep Mahapatra, Sneha Ghosh Dastidar, Damini Jagankar,
        Namrata Roy, Amitava Mukherjee, Chandan Maity, Jyoti Sharma,
        Tarun K. Panda, and <strong>Sib Sankar Mal*</strong>{" "}
        <em>ChemistrySelect</em>, <strong>2025</strong>, 10, e202406059.
        <strong> (IF: 2.1, Q3)</strong>
      </>
    ),
  },
  {
    id: 8,
    citation: (
      <>
        Assessment of Biocompatibility for Citric Acid Crosslinked Starch
        Elastomeric Films in Cell Culture Applications. Pooja N, Nafisa
        Yeshmin Ahmed, <strong>Sib Sankar Mal</strong>, Bharath Prasad A. S,
        Nirmal Mazumder*, <em>Scientific Reports</em>, <strong>2025</strong>,
        15, 6427. <strong>(IF: 3.8, Q1)</strong>
      </>
    ),
  },
  {
    id: 9,
    citation: (
      <>
        Dual Oxygen Reservoir Model for Nonpolar Resistive Switching in
        Nickel Tetradecavanadate Based Molecular Switch. Nivedya Thathron,
        Bhimaraya R Biradar, Sushil Kumar Pandey,{" "}
        <strong>Sib Sankar Mal*</strong>, Partha Pratim Das*{" "}
        <strong>Physica B: Condensed Matter</strong>, <strong>2025</strong>,
        710, 412266. <strong>(IF: 2.8, Q2)</strong>
      </>
    ),
  },
  {
    id: 10,
    citation: (
      <>
        Immobilization of heterogeneous Keggin and Wells-Dawson type
        polyoxometalates on Biomass-derived activated carbon for energy
        storage applications. Madhusree J E, Pranay R. Chandewar,
        Debaprasad Shee, <strong>Sib Sankar Mal*</strong>{" "}
        <strong style={{ color: "red" }}>Submitted to</strong>
      </>
    ),
  },
  {
    id: 11,
    citation: (
      <>
        Development of a Cholesterol Biosensor and Energy Storage system
        based on Polypyrrole Coated Polyoxometalate. Bhimaraya R Biradar,
        Nivedya Thathron, Aniket Hanchate, Partha Pratim Das*,{" "}
        <strong>Sib Sankar Mala</strong>,{" "}
        <strong>Journal of Alloys and Compounds</strong>,{" "}
        <strong>2025</strong>, 178994. <strong>(IF: 5.8, Q1)</strong>
      </>
    ),
  },
  {
    id: 12,
    citation: (
      <>
        Phosphomolybdic acid-polypyrrole-cationic ionic liquid-based
        High-performing Electrode Materials for Supercapacitor and Hydrogen
        Evolution Reactions. Muhammed Anees, P. K., Selvaraj Iniyan,
        Murugavel Kathiresan*, <strong>Sib Sankar Mal*</strong>{" "}
        <strong style={{ color: "red" }}>Submitted</strong>
      </>
    ),
  },
  {
    id: 13,
    citation: (
      <>
        The Cyclic 48-Tungsto-8-Phosphate [H7P8W48O184]33- Contant-Tézé
        Polyanion and its Derivatives [H6P4W24O94]18- and [H2P2W12O48]12-:
        Structural Aspects and Reactivity. <strong>Sib Sankar Mal*</strong>,
        Abhishek Banerjee, and Ulrich Kortz*,{" "}
        <em>Dalton Transactions</em>, <strong>2025</strong>, 54, 5208–5233.
        <strong> (IF: 3.5, Q1) (Appeared as HOT ARTICLE)</strong>
      </>
    ),
  },
];

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
