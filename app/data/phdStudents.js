// Real data for PhD students guided (completed and ongoing)
export const phdGuided = [
    {
        id: 1,
        name: "Dr. Ritesh Tiwari",
        roll: "165081CY16F05",
        thesis: "Application of Polyoxometalates as efficient and green catalyst for catalytic upgrading of cellulosic biomass",
        supervision: "Guide (PI)",
        year: "2020"
    },
    {
        id: 2,
        name: "Dr. Sukanya Maity",
        roll: "187057PH004",
        thesis: "Polyoxometalates-carbonaceous based electrode materials for energy storage applications",
        supervision: "Co-guide (Co-PI)",
        year: "2022"
    },
    {
        id: 3,
        name: "Dr. Anjana A. V.",
        roll: "187014CY001",
        thesis: "Electrochemical studies of conducting polymers and activated carbon-based vanadium substituted polyoxometalates hybrid electrode materials for energy applications",
        supervision: "Guide (PI)",
        year: "2023"
    },
    {
        id: 4,
        name: "Dr. Navya S. Bhat",
        roll: "187063CY004",
        thesis: "Catalytic preparation and value addition of renewable chemical intermediates from carbohydrates",
        supervision: "Co-guide (Co-PI)",
        year: "2023"
    },
    {
        id: 5,
        name: "Dr. Madhusree J E",
        roll: "19711CY011",
        thesis: "Biomass-derived activated carbon substituted polyoxometalates for energy Applications",
        supervision: "Guide (PI)",
        year: "2024"
    },
    {
        id: 6,
        name: "Dr. Muhammad Anees P K",
        roll: "207011CY006",
        thesis: "Ionic Liquids-Polyoxometalates Conducting Polymers Composites Towards Enhanced Electrochemical Performance",
        supervision: "Guide (PI)",
        note: "Open Defense on 30th October",
        year: "2025"
    },
    {
        id: 7,
        name: "Nivedya Thathron",
        roll: "207107PH004",
        thesis: "Transition Metal Oxide and Their Variants Based Devices for Memory Applications",
        supervision: "Co-guide (Co-PI)",
        note: "Defense on 20th March, 2026",
        year: "2026"
    },
    {
        id: 8,
        name: "Joydeep Mahapatra",
        roll: "2170074CY006",
        thesis: "Heteropoly acid-based solid catalysts for Diverse organic transformations",
        supervision: "Guide (PI)",
        note: "Submitted on 30.09.2026",
        year: "2026"
    },
    {
        id: 9,
        name: "Aniket Hanchate",
        photo: "/aniket.png",
        roll: "2370028PH001",
        thesis: "Polyoxometalate-Based Electrode Materials for Energy Storage and Sensing Applications",
        supervision: "Co-guide (Co-PI)",
        year: ""
    },
    {
        id: 10,
        name: "Priyanka Hegde",
        photo: "/priyanka.png",
        roll: "2470003CY005",
        thesis: "Development of biologically active organic molecules via polyoxometalates-assisted catalysis",
        supervision: "Guide (PI)",
        year: ""
    },
    {
        id: 11,
        name: "Bency Jose",
        photo: "/bency.png",
        roll: "2470096CY010",
        thesis: "Synergistic Polyoxometalate\u2013MOF Hybrid Materials for Sustainable Electrochemical Energy Storage",
        supervision: "Guide (PI)",
        year: ""
    },
    {
        id: 12,
        name: "Shreyas Shobhit Gupta",
        photo: "/shreyash.png",
        roll: "247012PH005",
        thesis: "Experimental Condensed Matter Physics",
        supervision: "Co-guide (Co-PI)",
        year: ""
    },
    {
        id: 13,
        name: "Nithish Kashyap P",
        photo: "/nithish.png",
        roll: "257CY500",
        thesis: "Seaweed as a renewable resource: chemical modification and application of its derived material",
        supervision: "Guide (PI)",
        year: ""
    },
    {
        id: 14,
        name: "Aavani M",
        photo: "/avani.png",
        roll: "",
        thesis: "",
        supervision: "Guide (PI)",
        year: ""
    }
].sort((x, y) => (Number(y.year) || Infinity) - (Number(x.year) || Infinity));
