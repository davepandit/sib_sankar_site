import Image from 'next/image';

const Hero = () => {
    return (
        <section className="bg-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10">
                    {/* Left Column: Profile & Sidebar */}
                    <div className="lg:col-span-4 xl:col-span-3">
                        <div className="bg-green-50/50 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full border border-green-100/50 shadow-sm">
                            {/* Profile Image */}
                            <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6">
                                <div className="absolute inset-0 rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
                                    <Image
                                        src="/profile.jpg"
                                        alt="Dr. Sib Sankar Mal"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="w-full space-y-6 text-left">
                                <div className="flex items-start space-x-3 text-gray-600 group hover:text-green-700 transition-colors">
                                    <svg className="w-6 h-6 mt-0.5 shrink-0 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div className="flex flex-col text-base break-all">
                                        <a href="mailto:malss@nitk.edu.in" className="hover:underline">malss@nitk.edu.in</a>
                                        <a href="mailto:chem_sib@yahoo.com" className="hover:underline">chem_sib@yahoo.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3 text-gray-600 group hover:text-green-700 transition-colors">
                                    <svg className="w-6 h-6 mt-0.5 shrink-0 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-base">
                                        Science Block, NIT-K, Surathkal, Mangalore-575025
                                    </span>
                                </div>

                                {/* Social/Professional Links */}
                                <div className="pt-6 mt-6 border-t border-green-200/50 space-y-5">
                                    <a href="/CV.doc" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 hover:text-green-700 transition-colors group">
                                        <svg className="w-6 h-6 shrink-0 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <span className="text-base font-medium">Curriculum Vitae</span>
                                    </a>

                                    <a href="https://scholar.google.com/citations?user=gRYCXm8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 hover:text-green-700 transition-colors group">
                                        <svg className="w-6 h-6 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
                                        </svg>
                                        <span className="text-base font-medium">Google Scholar</span>
                                    </a>

                                    <a href="https://www.linkedin.com/in/sib-sankar-mal-01a04550/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 hover:text-green-700 transition-colors group">
                                        <svg className="w-6 h-6 shrink-0 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                        <span className="text-base font-medium">LinkedIn Profile</span>
                                    </a>

                                    <a href="https://www.researchgate.net/profile/Sib-Sankar-Mal" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 hover:text-green-700 transition-colors group">
                                        <svg className="w-6 h-6 shrink-0 text-[#00ccbb]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.5 6.8h.9v2.9h-.9V6.8zm-2.1 4.5h2.1V7H17.4v4.3zM2.8 5.4h4.8c1.3 0 2.4.4 3.1 1.1.8.8 1.1 1.8 1.1 3 0 1.2-.4 2.2-1.1 3-.8.8-1.9 1.1-3.2 1.1H4.9v5.9H2.8V5.4zm2.1 6.8h2.6c.7 0 1.2-.2 1.6-.6.4-.4.6-.9.6-1.6 0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.6-.6H4.9v4.3zm13 8.3c-.6 1-1.4 1.7-2.4 2.1-1 .5-2.1.7-3.3.7-1.7 0-3.1-.5-4.3-1.4-1.2-1-1.8-2.3-1.8-4.1 0-1 .2-1.9.7-2.7.5-.8 1.1-1.4 1.9-1.9.8-.5 1.7-.7 2.6-.7 1.4 0 2.6.4 3.7 1.3V5h2.1v15.6h-2.1v-1.6c-.3.5-.7 1-1.1 1.5zm-3.6.4c1 0 1.8-.3 2.5-1 .7-.6 1.1-1.5 1.1-2.4 0-.9-.3-1.7-1-2.3-.7-.6-1.6-.9-2.6-.9-.9 0-1.8.3-2.5 1-.7.6-1.1 1.5-1.1 2.5 0 .9.3 1.7 1 2.3.7.6 1.6.8 2.6.8z" />
                                        </svg>
                                        <span className="text-base font-medium">ResearchGate Profile</span>
                                    </a>

                                    <a href="https://orcid.org/0000-0002-2520-4371" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 hover:text-green-700 transition-colors group">
                                        <svg className="w-6 h-6 shrink-0 text-[#A6CE39]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.3 0 5.054 2.699 5.054 5.024 0 2.529-1.715 5.017-5.054 5.017h-3.9V7.416z" />
                                            <path d="M11.733 16.59c1.563 0 2.627-1.077 2.627-3.902 0-2.433-1.021-3.616-2.627-3.616h-1.527V16.59h1.527z" />
                                        </svg>
                                        <span className="text-base font-medium">ORCID Profile</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Header & Prof Exp */}
                    <div className="lg:col-span-8 xl:col-span-9">
                        <div className="space-y-2 mb-8 border-b border-gray-100 pb-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Dr. Sib Sankar Mal</h1>
                            <div className="space-y-1">
                                <p className="text-xl md:text-2xl font-semibold text-green-700">Associate Professor</p>
                                <p className="text-lg text-gray-700 font-medium">Department of Chemistry</p>
                                <p className="text-base text-gray-600">National Institute of Technology (NIT-K), Surathkal, India</p>
                            </div>
                        </div>

                        <div className="grid gap-10">
                            {/* Professional Experience Section */}
                            <section>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
                                    Professional Experience
                                </h3>
                                <div className="space-y-6 relative border-l-2 border-green-100 ml-4 pl-8 md:pl-10">
                                    <div className="relative">
                                        <span className="absolute -left-[41px] md:-left-[49px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-green-500 shadow-sm"></span>
                                        <div className="mb-1">
                                            <span className="text-sm font-bold text-green-700 bg-green-50 px-2 py-1 rounded inline-block mb-1">Since 10/2023</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900">Associate Professor <span className="text-base font-normal text-gray-700">(NITK Surathkal, India)</span></h4>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[41px] md:-left-[49px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-green-400 shadow-sm"></span>
                                        <div className="mb-1">
                                            <span className="text-sm font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded inline-block mb-1">11/2013 - 10/2023</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900">Assistant Professor <span className="text-base font-normal text-gray-700">(NITK Surathkal, India)</span></h4>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[41px] md:-left-[49px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-green-300 shadow-sm"></span>
                                        <div className="mb-1">
                                            <span className="text-sm font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded inline-block mb-1">11/2011 - 10/2013</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900">Alexander von Humboldt Postdoctoral Research Fellow <span className="text-base font-normal text-gray-700">(Hamburg University, Germany)</span></h4>
                                    </div>

                                    <div className="relative">
                                        <span className="absolute -left-[41px] md:-left-[49px] top-1.5 w-5 h-5 rounded-full border-4 border-white bg-green-200 shadow-sm"></span>
                                        <div className="mb-1">
                                            <span className="text-sm font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded inline-block mb-1">01/2009 - 02/2011</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900">Postdoctoral Fellow <span className="text-base font-normal text-gray-700">(Center for Catalysis Research and Innovation (CCRI), University of Ottawa, Canada)</span></h4>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Grid 2: Education (Full Width Row) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-4 xl:col-span-3 hidden lg:block"></div>
                    <div className="lg:col-span-8 xl:col-span-9">
                        {/* Education Section */}
                        <section>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="w-2 h-8 bg-green-500 rounded-full mr-3"></span>
                                Educational Qualification
                            </h3>
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                                {/* Ph.D */}
                                <div className="p-5 md:p-6 hover:bg-gray-50/50 transition-colors">
                                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                                        <h4 className="text-lg font-bold text-gray-900">Doctor of Philosophy (Ph.D.) <span className="text-base font-medium text-green-700">(Indian Institute of Technology (IIT) Bombay, India)</span></h4>
                                        <span className="text-sm font-medium text-gray-500 whitespace-nowrap">10/2004 - 11/2008</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
