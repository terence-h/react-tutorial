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

const c1solution = `export default function App() {
  function handleOnClick(message) {
    alert(message);
  }
  
  return <Button onClick={() => handleOnClick("You clicked me!")}>Click me</Button>
}

function Button({ children, onClick }) {
  return <button className="p-2 bg-blue-500 rounded-md" onClick={onClick}>{children}</button>
}`;