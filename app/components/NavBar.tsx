import React, { useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import {
    Bars3Icon,
    XMarkIcon,
    SunIcon,
    MoonIcon,
    HomeIcon,
} from '@heroicons/react/24/outline';

interface NavLink {
    name: string;
    href: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const navigation: NavLink[] = [
    { name: 'Home', href: '/', icon: HomeIcon },
];

export default function Navbar() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <>
            {/* Mobile Navbar */}
            <div className="md:hidden fixed inset-y-0 h-auto bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
                {/* <div className="text-xl font-bold">React Learning Guide</div> */}
                <button
                    onClick={handleMobileMenuToggle}
                    className="text-gray-700 dark:text-gray-300 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? (
                        <XMarkIcon className="h-6 w-6" />
                    ) : (
                        <Bars3Icon className="h-6 w-6" />
                    )}
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 transform overflow-y-scroll hidden-scrollbar ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 transition-transform duration-200 ease-in-out bg-gray-100 dark:bg-gray-800 w-64 z-50`}
            >
                <div className="flex flex-col h-full">
                    {/* Navbar Header */}
                    <div className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-900">
                        <span className="text-lg font-semibold">React Learning Guide</span>
                        {/* Close button for mobile */}
                        <button
                            onClick={handleMobileMenuToggle}
                            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
                            aria-label="Close Menu"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 p-4">
                        <ul>
                            {navigation.map((link) => (
                                <li key={link.name} className="mb-1">
                                    <a
                                        href={link.href}
                                        className="flex items-center p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                                        onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                                    >
                                        {/* <link.icon className="h-5 w-5 mr-3" /> */}
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Dark Mode Toggle */}
                    <div className="p-4">
                        <button
                            onClick={toggleDarkMode}
                            className="flex items-center w-full p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded focus:outline-none"
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
                </div>
            </div>

            {/* Overlay for Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
                    onClick={handleMobileMenuToggle}
                    aria-label="Close Menu Overlay"
                ></div>
            )}
        </>
    );
};