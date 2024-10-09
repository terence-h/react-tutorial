"use client";

import CodeEditor from "./components/CodeEditor";
import NavBar from "./components/NavBar";
import { DarkModeProvider } from "./contexts/DarkModeContext";

export default function Home() {

  return (
    <DarkModeProvider>
      <div className="flex">
        <NavBar />
        <main className="flex-1 p-5 ml-0 md:ml-64">
          <CodeEditor />
        </main>
      </div>
    </DarkModeProvider>
  );
}