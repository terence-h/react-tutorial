"use client";

import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import Navbar from "./components/Navbar";
import { DarkModeProvider } from "./contexts/DarkModeContext";

export default function Home() {
  const [isNavbarOpen, setIsNavbarOpenOpen] = useState<boolean>(false);

  return (
    <DarkModeProvider>
      <div className="flex">
        <Navbar isNavbarOpen={isNavbarOpen} setIsNavbarOpen={setIsNavbarOpenOpen} />
        <main className={`flex-1 text-wrap p-5 ${isNavbarOpen ? 'md:ml-64' : 'md:ml-10'}`}>
          <CodeEditor />
        </main>
      </div>
    </DarkModeProvider>
  );
}