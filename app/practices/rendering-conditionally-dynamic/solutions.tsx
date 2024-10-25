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

const c1solution = `const toDoList = [
  { title: "Buy Bread", details: "Head to supermarket after work and purchase from the supermarket.", done: false },
  { title: "Work Meeting for project", details: "Meet with team at 9:00am to provide updates on the project.", done: true },
  { title: "Visit grandparents", details: "Go to grandparents house at 8:30pm", done: false },
  { title: "Fix Work Laptop", details: "Head to scheduled IT support appointment to get laptop fixed.", done: true }
];

export default function App() {
  return (
    <>
      {toDoList.map((todo, index) => (
        <div key={index}>
          <h1>{todo.title} - <span style={{ fontWeight: "bold" }}>{todo.done ? "Done" : "Not Done"}</span></h1>
          <p>{todo.details}</p>
          <br />
        </div>
      ))}
    </>
  );
}`;

const c2solution = `import { useState } from "react";

const toDoList = [
  { title: "Buy Bread", details: "Head to supermarket after work and purchase from the supermarket.", done: false },
  { title: "Work Meeting for project", details: "Meet with team at 9:00am to provide updates on the project.", done: true },
  { title: "Visit grandparents", details: "Go to grandparents house at 8:30pm", done: false },
  { title: "Fix Work Laptop", details: "Head to scheduled IT support appointment to get laptop fixed.", done: true }
];

export default function App() {
  const [showNotDoneOnly, setShowNotDoneOnly] = useState(false);

  function handleOnClick() {
   setShowNotDoneOnly(!showNotDoneOnly);
  }

  return (
    <>
      <button onClick={handleOnClick}>
        {showNotDoneOnly ? "Show All" : "Hide Done"}
      </button>
      <br/><br/>
      {toDoList
        .filter((todo) => !showNotDoneOnly || !todo.done)
        .map((todo, index) => (
          <div key={index}>
            <h1>{todo.title} - <span style={{ fontWeight: "bold" }}>{todo.done ? "Done" : "Not Done"}</span></h1>
            <p>{todo.details}</p>
            <br />
          </div>
        ))}
    </>
  );
}`;