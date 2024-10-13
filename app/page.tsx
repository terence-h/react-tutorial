"use client";

import CodeEditor from "./components/core/CodeEditor";
import NavBar from "./components/core/NavBar";
import { DarkModeProvider } from "./contexts/DarkModeContext";

export default function Home() {
  return (
    <DarkModeProvider>
      <div className="flex">
        <NavBar />
        <main className="flex-1 text-wrap p-5 ml-7 md:ml-64">
          <CodeEditor />
        </main>
      </div>
    </DarkModeProvider>
  );
}