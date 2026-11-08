import Link from "next/link";
import Image from "next/image";
import Header from "@/app/components/Header";
import ImageCarousel from "@/app/components/ImageCarousel";
import MolecularBackground from "@/app/components/MolecularBackground";
import PublicationList from "@/app/components/PublicationList";
import { publications } from "@/app/data/publications";

const carouselImages = [
    "/WhatsApp Image 2026-10-29 at 15.27.45 (1).jpeg",
    "/WhatsApp Image 2026-10-29 at 15.30.02 (1).jpeg",
    "/WhatsApp Image 2026-10-29 at 15.30.02.jpeg",
    "/WhatsApp Image 2026-10-29 at 15.30.03 (1).jpeg",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <div className="pt-24">
        <ImageCarousel images={carouselImages} />

        {/* Research Overview */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#06101e] via-[#0a1a30] to-[#06101e] py-20 md:py-28">
          <MolecularBackground />
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
            <div className="bg-slate-950/45 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg px-6 py-8 md:px-10 md:py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Research Overview
            </h2>
            <p className="italic text-lg md:text-xl text-slate-100 leading-relaxed">
              Supercapacitors have emerged as promising energy-storage technologies owing to their potential for high power density, rapid charge–discharge capability, long cycle life, enhanced safety, and environmental sustainability. The development of hybrid electrode materials that combine electric double-layer capacitance with pseudocapacitive charge-storage mechanisms is a promising strategy for achieving high energy and power densities simultaneously. In this context, we are interested in designing and developing novel hybrid materials by integrating polyoxometalate (POM) molecular clusters with various functional support materials, such as activated carbon, graphene oxide, conducting polymers (e.g., polypyrrole), MOFs, COFs, and other suitable carbonaceous or conductive substrates. These POM-based hybrid nanocomposites are expected to exploit the reversible multi-electron redox properties of POM clusters and the high surface area, electrical conductivity, and structural stability of the supporting materials. The resulting hybrid materials will be explored as advanced electrode materials for next-generation supercapacitors, with the aim of enhancing their specific capacitance, energy density, power density, rate capability, and long-term cycling stability.
            </p>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section
          className="py-16 md:py-20 bg-green-50"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cg fill='none' stroke='%2316a34a' stroke-opacity='0.22' stroke-width='1.2'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34'/%3E%3C/g%3E%3C/svg%3E\"), linear-gradient(to bottom, rgba(220,252,231,0.95), rgba(220,252,231,0.6), #f0fdf4)" }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
              Publications
            </h2>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <PublicationList publications={publications.slice(0, 5)} />
            </div>
            <Link href="/publications/papers" className="inline-block mt-6 text-lg font-semibold text-green-700 hover:text-green-800 transition-colors">
              View all publications &rarr;
            </Link>
          </div>
        </section>

        {/* About */}
        <section className="pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-4">
              <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <Image
                  src="/profile.jpg"
                  alt="Dr. Sib Sankar Mal"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Dr. Sib Sankar Mal
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Dr. Sib Sankar Mal obtained his <strong className="font-bold italic text-gray-900">Ph.D.</strong> from <strong className="font-bold italic text-gray-900">Jacobs University Bremen, Germany</strong> in <strong className="font-bold italic text-gray-900">2008</strong>, working with <strong className="font-bold italic text-gray-900">Prof. Dr. Ulrich Kortz</strong>. He then moved to the <strong className="font-bold italic text-gray-900">University of Ottawa, Canada</strong>, for postdoctoral studies at the Center for Catalysis Research and Innovation (CCRI) in the group of <strong className="font-bold italic text-gray-900">Prof. Dr. R.T. Baker</strong>, and later continued as an <strong className="font-bold italic text-gray-900">Alexander von Humboldt Postdoctoral Research Fellow</strong> at <strong className="font-bold italic text-gray-900">Hamburg University, Germany</strong>, in the group of <strong className="font-bold italic text-gray-900">Prof. Dr. Peter Burger</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                He started his independent career in <strong className="font-bold italic text-gray-900">2013</strong> at the <strong className="font-bold italic text-gray-900">National Institute of Technology Karnataka (NITK), Surathkal, India</strong>. Currently, he is an <strong className="font-bold italic text-gray-900">Associate Professor</strong> in the Department of Chemistry at NITK Surathkal.
              </p>
              <Link href="/about" className="inline-block text-lg font-semibold text-green-700 hover:text-green-800 transition-colors">
                More about me &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
