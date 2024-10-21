import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";
import Table, { TableRow } from "@/app/components/Table";

export default function ConditionalRendering() {
    return (
        <article id="conditional-rendering">
            <Header>Conditional Rendering</Header>
            <Paragraph>Conditional Rendering means rendering components/elements based on a certain condition (true/false, {">"} 5, === “success”, etc.). This is similar to how you would use if-else statements in JavaScript.
                <br /><br />In React, there are multiple ways to do this.
            </Paragraph>

            <Header level={2}>1. Using if-else statements</Header>
            <CodeEditor id={1} initialCode={conditionalIfElse} languages={["jsx", "tsx"]} />

            <Header level={2}>2. Using Ternary Operator</Header>
            <CodeEditor id={2} initialCode={conditionalTernary} languages={["jsx", "tsx"]} />

            <Header level={2}>3. Using && (Logical AND) Operator</Header>
            <CodeEditor id={3} initialCode={conditionalLogicalAnd} languages={["jsx", "tsx"]} />

            <Header level={2}>When to Use Which Method?</Header>
            <Paragraph className="mt-5">There&apos;s no right or wrong when choosing which to use. Below are some considerations when choosing which to use.</Paragraph>
            <Table headers={headers} data={data} />
        </article>
    );
}

const conditionalIfElse = `export default function App() {
  // Get a number between 0 and 1 and round it to nearest whole number.
  const randomNum = Math.round(Math.random());

  // Use if-else to render different content based on the random number.
  if (randomNum === 1) {
    return <p>Hi, this is one!</p>;
  } else {
    return <p>Hi, this is zero!</p>
  }
}`;

const conditionalTernary = `export default function App() {
  // Get a number between 0 and 1 and round it to nearest whole number.
  const randomNum = Math.round(Math.random());
  
  return (
    <>
      {/* Use ternary operator to render different content based on the random number. */}
      <p>Hi. This is {randomNum === 1 ? "one" : "zero"}!</p>
    </>
  );
}`;

const conditionalLogicalAnd = `export default function App() {
  // Get a number between 0 and 1 and round it to nearest whole number.
  const randomNum = Math.round(Math.random());
  
  return (
    <>
      {/* Only render the element if the conditional is met */}
      {randomNum === 0 && <p>Hi. This is zero!</p>}
      {randomNum === 1 && <p>Hi. This is one!</p>}
    </>
  );
}`;

const headers = ['Situation', 'Preferred Method', 'Reason'];

const data: TableRow[] = [
    { 'Situation': 'Multiple, complex conditions', 'Preferred Method': 'if-else statement', 'Reason': "It's clearer and easier to maintain than nested ternary operators" },
    { 'Situation': 'Simple, binary conditions', 'Preferred Method': 'Ternary operator', 'Reason': 'More concise and readable for straightforward true/false conditions' },
    { 'Situation': 'Render something only if a condition is true', 'Preferred Method': 'Logical && operator', 'Reason': 'Perfect for optional content that only needs to be displayed if a condition is true' },
];