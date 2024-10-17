import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import {
    Bars3Icon,
    XMarkIcon,
    SunIcon,
    MoonIcon,
} from '@heroicons/react/24/outline';
import pages from '../utils/pagesMapping';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavbarProps {
    isNavbarOpen: boolean;
    toggleNavbar: () => void;
}

export default function Navbar({ isNavbarOpen, toggleNavbar }: NavbarProps) {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const router = useRouter();

    // State to track which categories are expanded
    const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());

    useEffect(() => {
        const stored = localStorage.getItem('expandedCategories');
        if (stored) {
            setExpandedCategories(new Set(JSON.parse(stored)));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('expandedCategories', JSON.stringify(Array.from(expandedCategories)));
    }, [expandedCategories]);

    // Toggle function to expand/collapse categories
    const toggleCategory = (categoryId: number) => {
        setExpandedCategories((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(categoryId)) {
                newSet.delete(categoryId);
            } else {
                newSet.add(categoryId);
            }
            return newSet;
        });
    };

    return (
        <>
            {/* Mobile Navbar */}
            <div className="fixed flex mb-6 md:mb-0 h-10 w-10 cursor-pointer md:h-16 md:w-auto rounded-full bg-gray-300/75 dark:bg-gray-700/75 md:bg-transparent dark:md:bg-transparent items-center justify-center bottom-0 z-[49] left-[45%] md:top-5 md:left-5 md:px-4"
                onClick={toggleNavbar}>
                <div>
                    {isNavbarOpen ? (
                        <XMarkIcon className="h-6 w-6" />
                    ) : (
                        <Bars3Icon className="h-6 w-6" />
                    )}
                </div>

            </div>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 transform overflow-y-scroll hidden-scrollbar ${isNavbarOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-200 ease-in-out bg-gray-100 dark:bg-gray-800 w-96 z-[49]`}
            >
                <div className="flex flex-col h-full">
                    {/* Navbar Header */}
                    <div className="flex items-center justify-between p-4 bg-gray-300 dark:bg-gray-900">
                        <Link href="/" className="text-lg font-semibold">
                            React Learning Guide
                        </Link>
                        {/* Close button for mobile */}
                        <button
                            onClick={toggleNavbar}
                            className="focus:outline-none"
                            aria-label="Close Menu"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 p-4">
                        <ul>
                            {pages.map((category) => (
                                <li key={category.id} className="mb-2">
                                    {/* Category Header */}
                                    <div
                                        className="flex justify-between items-center cursor-pointer p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded"
                                        onClick={category.subCategories ? () => toggleCategory(category.id) : () => router.push(category.link!)}
                                    >
                                        <span>{category.name}</span>
                                        {category.subCategories &&
                                            <span>
                                                {expandedCategories.has(category.id) ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 transform rotate-180 transition-transform duration-200"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 transition-transform duration-200"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                )}
                                            </span>
                                        }

                                    </div>

                                    {/* Subcategories */}
                                    {expandedCategories.has(category.id) && (
                                        <ul className="mt-1 ml-4">
                                            {category.subCategories!.map((sub) => (
                                                <li key={sub.id} className="mb-1">
                                                    <Link href={sub.link || '#'} className="block p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded">
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Dark Mode Toggle */}
                    <div className="p-4">
                        <button
                            onClick={toggleDarkMode}
                            className="flex items-center w-full p-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded focus:outline-none"
                        >
                            {isDarkMode || isDarkMode === undefined ? (
                                <>
                                    <MoonIcon className="h-5 w-5 mr-3" />
                                    <span>Switch to Light Mode</span>
                                </>
                            ) : (
                                <>
                                    <SunIcon className="h-5 w-5 mr-3" />
                                    <span>Switch to Dark Mode</span>
                                </>
                            )}
                        </button>
                    </div>
                    {/* Version No. */}
                    <div className="pb-2 pr-2 text-end text-xs">
                        Version 1.0.0
                    </div>
                </div>
            </div>

            {/* Overlay for Mobile Menu */}
            {isNavbarOpen && (
                <div
                    className="fixed inset-0 bg-black/75 z-[48] md:hidden"
                    onClick={toggleNavbar}
                    aria-label="Close Menu Overlay"
                ></div>
            )}
        </>
    );
}