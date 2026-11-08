"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ImageCarousel = ({ images, interval = 5000 }) => {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    const go = (delta) => setCurrent((c) => (c + delta + images.length) % images.length);

    useEffect(() => {
        if (paused) return;
        const timer = setInterval(() => setCurrent((c) => (c + 1) % images.length), interval);
        return () => clearInterval(timer);
    }, [paused, interval, images.length]);

    return (
        <div
            className="relative w-full h-[55vh] md:h-[75vh] overflow-hidden bg-gray-900"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
                    aria-hidden={index !== current}
                >
                    <Image
                        src={encodeURI(src)}
                        alt={`Group photo ${index + 1}`}
                        fill
                        sizes="100vw"
                        priority={index === 0}
                        className="object-cover object-[50%_30%]"
                    />
                </div>
            ))}

            <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                aria-label="Previous image"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                aria-label="Next image"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setCurrent(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"}`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
