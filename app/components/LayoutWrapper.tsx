"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { DarkModeProvider } from "../contexts/DarkModeContext";
import Navbar from "./Navbar";

export default function LayoutWrapper({ children }: PropsWithChildren) {
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(true);

    function handleToggleNavBar() {
        setIsNavbarOpen(!isNavbarOpen);
        localStorage.setItem("navbar", `${!isNavbarOpen}`);
    }

    useEffect(() => {
        const isOpen = localStorage.getItem("navbar") === "true" || !localStorage.getItem("navbar");
        setIsNavbarOpen(isOpen);
    }, []);
    
    return (
        <DarkModeProvider>
            <div className="flex">
                <Navbar isNavbarOpen={isNavbarOpen} toggleNavbar={handleToggleNavBar} />
                <main className={`flex-1 text-wrap p-5 ${isNavbarOpen ? 'md:ml-96' : 'md:ml-10'}`}>
                    {children}
                </main>
            </div>
        </DarkModeProvider>
    );
}