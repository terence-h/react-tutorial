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
                <AccordionItem title="Challenge 3 Solution">
                    <CodeBlock code={c3solution} language={"typescript"} />
                </AccordionItem>
                <AccordionItem title="Challenge 4 Solution">
                    <CodeBlock code={c4solution} language={"typescript"} />
                </AccordionItem>
                <AccordionItem title="Challenge 5 Solution">
                    <CodeBlock code={c5solution} language={"typescript"} />
                </AccordionItem>
            </Accordion>
        </article>
    );
}

const c1solution = `function greet(name: string): string {
    return 'Hello, ' + name + '!';
}

console.log(greet('John'));`;

const c2solution = `interface Person {
  name: string;
  age: string
}

const person: Person = {
  name: "John",
  age: 30
};

console.log(person.name);`;

const c3solution = `let numbers: number[] = [1, 2, 3, 4, 5];`;

const c4solution = `function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    resolve("Data fetched");
    });
}`;

const c5solution = `function display(message: string, count?: number): void {
  if (count) {
    console.log(message.repeat(count));
  } else {
    console.log(message);
  }
}`;