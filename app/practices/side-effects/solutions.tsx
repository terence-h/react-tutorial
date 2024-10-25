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

const c1solution = `import { useState, useEffect } from "react";

export default function App() {
  const storedCount = window.localStorage.getItem("count")
  const [count, setCount] = useState(storedCount ? parseInt(storedCount) : 0);

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count])

  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <>
      <p>Click counter: {count}</p>
      <button className="bg-blue-500 p-2" onClick={handleClick}>Increment count by 1</button>
    </>
  );
}`;

const c2solution = `import { useState, useEffect } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []); // Runs only once when the component mounts

  return <p>Timer: {seconds} seconds</p>
}`;