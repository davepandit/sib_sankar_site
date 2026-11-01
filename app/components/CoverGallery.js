"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CoverGallery = ({ images, altPrefix = "Photo", layoutClassName = "columns-2 md:columns-3 lg:columns-4" }) => {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (selected === null) return;
        const onKeyDown = (e) => {
            if (e.key === "Escape") setSelected(null);
        };
        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [selected]);

    return (
        <>
            <div className={`${layoutClassName} gap-6`}>
                {images.map((src, index) => (
                    <button
                        key={src}
                        type="button"
                        onClick={() => setSelected(index)}
                        className="block w-full mb-6 break-inside-avoid cursor-zoom-in"
                    >
                        <Image
                            src={encodeURI(src)}
                            alt={`${altPrefix} ${index + 1}`}
                            width={0}
                            height={0}
                            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                            style={{ width: "100%", height: "auto" }}
                            className="rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        />
                    </button>
                ))}
            </div>

            {selected !== null && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 md:p-8"
                    onClick={() => setSelected(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        type="button"
                        onClick={() => setSelected(null)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                        aria-label="Close"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="relative w-full h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={encodeURI(images[selected])}
                            alt={`${altPrefix} ${selected + 1}`}
                            fill
                            sizes="100vw"
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default CoverGallery;
