"use client";

import Accordion from "@/app/components/Accordion";
import AccordionItem from "@/app/components/AccordionItem";
import CodeBlock from "@/app/components/CodeBlock";
import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";

export default function AddingOnClick() {
    return (
        <article id="adding-onclick">
            <Header>Adding onClick Handler to Buttons</Header>

            <Paragraph className="mb-5">In this section, you will learn how to handle user events such as button clicking. Try executing the code below and see how it goes!</Paragraph>
            <CodeEditor id={1} initialCode={buggyAddOnClick} languages={['jsx', 'tsx']} />

            <Paragraph>What happened? Why did running the code causes the alert message to appear without clicking the button? Do you know why? Try and see if you can solve it on your own. Solutions can be found below if you are unable to solve it.
                <br /><br />If you look into the onClick event handler, you are calling the alert function directly which caused the alert function to execute when the component gets rendered.
            </Paragraph>

            <Accordion allowMultipleOpen={true}>
                <AccordionItem title="Solution 1 - Declaring a function">
                    <Paragraph>This solution is more ideal to use if your onClick function are used in multiple elements or have multiple lines of code.
                    <br/>If you want to pass parameters into the function, you have to use the arrow function to call the function. E.g., <code>() ={">"} handleClick(&quot;hello&quot;)</code>
                    </Paragraph>
                    <CodeBlock code={fixedAddOnClickOne} language={"jsx"} />
                </AccordionItem>
                <AccordionItem title="Solution 2 - Arrow function">
                    <Paragraph>This solution is ideal to use if you need to pass parameters into the function or this button functionality is short and only used in this button.</Paragraph>
                    <CodeBlock code={fixedAddOnClickTwo} language={"jsx"} />
                </AccordionItem>
            </Accordion>

            <InformationText className="mt-5 mb-5">In React, most things are converted to camel casing. onclick -{">"} onClick. onchange -{">"} onChange.
                <br />There are other things that are changed as well like class -{">"} className. Remember, we are writing HTML directly in JavaScript.
            </InformationText>
        </article>
    );
}

const buggyAddOnClick = `// Try and fix the issue if you can!
export default function App() {
  return <button onClick={alert("Hello!")}>Click me!</button>
}`;

const fixedAddOnClickOne = `export default function App() {
    // Simply declare a function how you normally would in JavaScript and set it to the onClick
    // This is inside App component because it's not a separate component. It's only a function to handle the button onClick
    function handleOnClick() {
      alert("Hello!");
    }
    
    return <button onClick={handleOnClick}>Click me!</button>
  }`;

const fixedAddOnClickTwo = `export default function App() {
  // The arrow function is a shorter way to declare a function in ES6+
  return <button onClick={() => alert("Hello!")}>Click me!</button>;
}

// This is similar to how you would write an inline function in JavaScript as shown below
// onClick="(function(){alert('Hey i am calling'); return false; })();return false;"`;