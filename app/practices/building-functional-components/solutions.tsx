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

const c1solution = `export default function App() {
  return <Paragraph style={{ textDecoration: "underline dotted"}}>Hi! I am a paragraph.</Paragraph>
}

function Paragraph({ style, children}) {
  return <p style={style}>{children}</p>;
}`;

const c2solution = `export default function App() {
  return <Section
           headerText="New Section Header"
           headerStyle={{ color: "darkorchid" }}
           paragraphStyle={{ textDecoration: "underline dotted" }}>
    Hello I am a section that contains a header, paragraph and button.
  </Section>;
}

function Section({ headerStyle, paragraphStyle, headerText, children }) {
  return (
    <>
      <Header style={headerStyle}>{headerText}</Header>
      <Paragraph style={paragraphStyle}>{children}</Paragraph>
      <Button />
    </>
  );
}

function Header({ style, children }) {
  return <h1 style={style}>{children}</h1>;
}

function Paragraph({ style, children}) {
  return <p style={style}>{children}</p>;
}

function Button() {
  return <button>Button</button>
}`;