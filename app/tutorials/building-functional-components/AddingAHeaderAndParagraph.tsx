"use client";

import Accordion from "@/app/components/Accordion";
import AccordionItem from "@/app/components/AccordionItem";
import CodeBlock from "@/app/components/CodeBlock";
import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";

export default function AddingAHeaderAndParagraph() {
    return (
        <article id="adding-header-paragraph">
            <Header>Adding a Header and Paragraph</Header>
            <Paragraph>Typically, the React root of the app starts in App.js and HTML codes are directly written into the JSX/TSX file as shown below.
                <br />All 3 options are acceptable and it&apos;s mostly preference on how you want to write your React component.
            </Paragraph>
            <CodeBlock code={reactAppDefaultCode} language={"jsx"} allowCopy={false} />
            <Paragraph className="mt-5">As mentioned earlier, we directly write HTML code into JavaScript in React. Give it a shot and write your first HTML directly in JavaScript!</Paragraph>
            <InformationText className="mb-5">You can Toggle between JSX (JavaScript) or TSX (TypeScript). You can also change the theme!</InformationText>
            <CodeEditor id={1} initialCode={reactWriteHeaderCode} languages={["jsx", "tsx"]} />
            <Paragraph className="mt-5">Let&apos;s try adding a button into the same component. The code has been written for you. Try running and code and see what happens.
                <br />Can you try and fix the error? <span className="italic">Hint: The error provides you with the solution. Your React component return can only have 1 root element. You do not have to remove anything.</span>
                <br />The solutions are right below the code editor if you want to check out the different ways to solve this issue.
            </Paragraph>
            <CodeEditor id={2} initialCode={fixMultipleRootCode} languages={["jsx", "tsx"]} />
            <Accordion allowMultipleOpen={true}>
                <AccordionItem title="Solution 1 - Using JSX fragment">
                    <CodeBlock code={solutionOneMultipleRootCode} language={"jsx"} />
                </AccordionItem>
                <AccordionItem title="Solution 2 - Using HTML">
                    <CodeBlock code={solutionTwoMultipleRootCode} language={"jsx"} />
                </AccordionItem>
            </Accordion>
        </article>
    );
}

const reactAppDefaultCode = `export default function App() {
    return ({/* Insert your HTML element here */});
}

// OR

function App() {
    return ({/* Insert your HTML element here */});
}
export default App;

// OR

const App = () => {
    return ({/* Insert your HTML element here */});
}
export default App;`;

const reactWriteHeaderCode = `export default function App() {
  return (
    // Insert your <h1> element below. Just like how you would do it in HTML.
    
  );
}`;

const fixMultipleRootCode = `export default function App() {
  return (
    <h1>Header</h1>
    <button>Button</button>
  );
}`;

const solutionOneMultipleRootCode = `export default function App() {
  return (
    // You can use the JSX enclosing tag to wrap the adjacent elements so there's only one root element.
    <>
      <h1>Header</h1>
      <button>Button</button>
    </>
  );
}`;

const solutionTwoMultipleRootCode = `export default function App() {
  return (
    // If you need to add classes or styles to the root, you can use a div to wrap the adjacent elements instead.
    <div>
      <h1>Header</h1>
      <button>Button</button>
    </div>
  );
}`;