"use client";

import Accordion from "@/app/components/Accordion";
import AccordionItem from "@/app/components/AccordionItem";
import CodeBlock from "@/app/components/CodeBlock";
import Header from "@/app/components/Header";

export default function Solutions() {
    return (
        <article id="solutions">
            <Header>Solutions</Header>
            <Accordion allowMultipleOpen={true}>
                <AccordionItem title="Challenge 1 Solution">
                    <CodeBlock code={c1solution} language={"typescript"} />
                </AccordionItem>
            </Accordion>
        </article>
    );
}

const c1solution = `import { createContext, useContext, useState } from "react";

export default function App() {
  return (
    <AuthProvider>
      <LoginButton />
      <Paragraph />
    </AuthProvider>
  );
}

function Paragraph() {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn ? <p>Welcome back, Alice.</p> : <p>You are not authorised to access this page.</p>
}

function LoginButton() {
  const { loggedIn, toggleLoggedIn } = useContext(AuthContext);
  return <button className="p-2 bg-blue-500 rounded-md" onClick={toggleLoggedIn}>{loggedIn ? "Logout" : "Login"}</button>
}

// Create a context.
const AuthContext = createContext(false);

// Context provider for the theme
function AuthProvider({ children }) {
  // A state to trigger a rerender when the user login or logout
  const [loggedIn, setLoggedIn] = useState(false);
  
  function toggleLoggedIn() {
    setLoggedIn(!loggedIn);
  }
  return (
    // Wrap the theme context provider around the children content
    // Provide the values that we want to allow the children components to access
    // 1st parameter - state variable
    // 2nd parameter - toggleTheme function
    <AuthContext.Provider value={{ loggedIn, toggleLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}`;