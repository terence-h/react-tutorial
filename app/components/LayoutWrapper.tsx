"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { DarkModeProvider } from "../contexts/DarkModeContext";
import Navbar from "./Navbar";
import { LocalStorageProvider } from "../contexts/LocalStorageContext";

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
        <LocalStorageProvider storageKey={"codeTheme"} initialValue={'vscode-dark'} >
            <DarkModeProvider>
                <div className="flex">
                    <Navbar isNavbarOpen={isNavbarOpen} toggleNavbar={handleToggleNavBar} />
                    <main className={`flex-1 text-wrap px-5 py-14 ${isNavbarOpen ? 'md:ml-96' : 'md:ml-16 md:mr-16 xl:ml-40 xl:mr-40 2xl:ml-48 2xl:mr-48'}`}>
                        {children}
                    </main>
                </div>
            </DarkModeProvider>
        </LocalStorageProvider>

    );
}