"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = (name) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        {
            name: 'Supervised Students',
            href: '#',
            type: 'dropdown',
            items: [
                { name: 'Completed', href: '/supervisedStudents/completed' },
                { name: 'Ongoing', href: '/supervisedStudents/ongoing' },
            ]
        },
        {
            name: 'Publications',
            href: '#',
            type: 'dropdown',
            items: [
                { name: 'Papers', href: '/publications/papers' },
                { name: 'Patents', href: '/publications/patents' },
                { name: 'Book Chapters', href: '/publications/book-chapters' },
            ]
        },
        { name: 'Gallery', href: '/gallery' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
                ? 'bg-white/80 backdrop-blur-md shadow-sm py-4'
                : 'bg-white py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo / Brand */}
                <Link href="/" className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight hover:text-green-600 transition-colors">
                    Dr. Sib Sankar Mal
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.type === 'dropdown' ? (
                                <button
                                    className="flex items-center px-3 py-2 text-lg font-medium text-gray-700 hover:text-green-600 transition-colors rounded-md focus:outline-none"
                                    onClick={() => toggleDropdown(link.name)}
                                    onMouseEnter={() => setActiveDropdown(link.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {link.name}
                                    <svg
                                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name || 'group-hover:rotate-180' // Simple CSS hover fallback
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`px-3 py-2 text-lg font-medium transition-colors rounded-md hover:text-green-600 ${pathname === link.href ? 'text-green-600' : 'text-gray-700'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            )}

                            {/* Dropdown Menu (Desktop) */}
                            {link.type === 'dropdown' && (
                                <div
                                    className={`absolute left-0 mt-0 w-56 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden origin-top-left transition-all duration-200 ease-out transform ${
                                        // Using generic group-hover for pure CSS behavior + React state for click/touch safety
                                        'opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible'
                                        }`}
                                >
                                    <div className="py-1">
                                        {link.items.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="block px-4 py-3 text-base text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-4 py-2 space-y-1">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.type === 'dropdown' ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(link.name)}
                                            className="w-full flex items-center justify-between px-3 py-2 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                                        >
                                            {link.name}
                                            <svg
                                                className={`w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {activeDropdown === link.name && (
                                            <div className="pl-6 space-y-1 bg-gray-50/50 rounded-md my-1">
                                                {link.items.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block px-3 py-2 text-base text-gray-600 hover:text-green-600"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="block px-3 py-2 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
