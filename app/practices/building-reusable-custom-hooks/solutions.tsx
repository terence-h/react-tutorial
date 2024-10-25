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
                <AccordionItem title="Challenge 2 Solution">
                    <CodeBlock code={c2solution} language={"typescript"} />
                </AccordionItem>
            </Accordion>
        </article>
    );
}

const c1solution = `import { useState, useEffect } from 'react';

export default function App() {
  const windowSize = useWindowResize();

  return (
    <p>{"width: " + windowSize.x + " | height: " + windowSize.y}</p>
  );
}

function useWindowResize() {
  // State to store the width and height
  const [windowSize, setWindowSize] = useState({ x: window.innerWidth, y: window.innerHeight });

  useEffect(() => {
    // Function to update the state
    function handleResize() {
      setWindowSize({ x: window.innerWidth, y: window.innerHeight });
    }

    // Listen on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to prevent memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Effect only runs on mount and cleanup on unmount

  // Return the state value that we want other components using this hook to have access.
  return windowSize;
}`;

const c2solution = `import { useState } from "react";

export default function App() {
  // Using the key "randomNumber" and set a default value if the key does not exist
  const [storedValue, setValue] = useLocalStorage("randomNumber", Math.random().toFixed(2));
  
  return (
    <button onClick={() => setValue(Math.random().toFixed(2))}>{storedValue}</button>
  );
}

function useLocalStorage(key, initialValue) {
  // We can also use arrow function to write JS code to set a initial state value
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);

    // If the key doesn't exist, create the key and set the initial value provided in the parameter
    if (!item)
      window.localStorage.setItem(key, initialValue);
    
    return item ?? initialValue;
  });

  // Function to update the state and local storage
  function setValue(value) {
    setStoredValue(value);
    window.localStorage.setItem(key, value);
  }

  // Return the stored value of the localStorage key and state function to update the localStorage key
  return [storedValue, setValue];
}`;