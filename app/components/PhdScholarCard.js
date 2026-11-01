import React from 'react';
import Image from 'next/image';

const PhdScholarCard = ({ name, thesis, photo }) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 flex flex-col items-center text-center h-full transition-transform hover:-translate-y-1 duration-300">
            <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100 ring-1 ring-gray-100 shrink-0">
                {photo ? (
                    <Image src={photo} alt={name} fill sizes="160px" className="object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50">
                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                )}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">{name}</h3>

            {thesis && (
                <p className="text-gray-600 leading-relaxed">
                    <span className="font-bold text-gray-900">Research Topic:</span> {thesis}
                </p>
            )}
        </div>
    );
};

export default PhdScholarCard;
