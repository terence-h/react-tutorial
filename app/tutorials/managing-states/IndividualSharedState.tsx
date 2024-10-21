"use client";

import Accordion from "@/app/components/Accordion";
import AccordionItem from "@/app/components/AccordionItem";
import CodeBlock from "@/app/components/CodeBlock";
import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import NestedList, { ListItem } from "@/app/components/NestedList";
import Paragraph from "@/app/components/Paragraph";

export default function IndividualSharedState() {
  return (
    <article id="individual-shared-states">
      <Header>Individual & Shared States</Header>

      <Paragraph>An individual state means that the state is only used by one component and no other components depend on it.
        <br />A shared state means that the state is used by multiple components.
        <br /><br />Using the code editor below, {"<ButtonWithCounter>"} has been duplicated in the App component. Click on any of the button and see what happens.</Paragraph>
      <CodeEditor id={1} initialCode={useStateDupe} languages={["jsx", "tsx"]} readOnly={false} />

      <Paragraph className="mt-5">Both text is changing! Can you guess why?
        <br /><br />The reason that both numbers are changing when either of the buttons are pressed is because <span className="underline">they are sharing the same state</span>.
        <br /><br />Think first before you create the state. Does your state need to be used in other sibling components?</Paragraph>
      <NestedList items={thinkFirstStateList} />

      <Paragraph className="mt-5">With that said, can you try and separate the shared state into individual state to each ButtonWithCounter component? Use the code editor provided above.</Paragraph>

      <Accordion>
        <AccordionItem title={"Solution"}>
          <Paragraph>By moving the state into the ButtonWithCounter component, a new state is created whenever it is used. The state is completely independent from other ButtonWithCounter components.</Paragraph>
          <CodeBlock code={individualStateAnswer} language={"jsx"} />
        </AccordionItem>
      </Accordion>
    </article>
  );
}

const thinkFirstStateList: ListItem[] = [
  {
    id: 1,
    label: <span>If so, create the state in the closest common parent component.</span>
  },
  {
    id: 2,
    label: <span>If not, create the state in the component itself.</span>
  }
];

const useStateDupe = `import { useState } from "react";

export default function App() {
  // 1st element: Returns the current state value.
  // 2nd element: A function that allows you to update this state value.
  // 0 value in the useState - setting the default value
  const [count, setCount] = useState(0);

  function handleOnClick() {
    // Update the state by increasing the current state value by 1
    setCount(count + 1);
  }

  return (
    <>
      <ButtonWithCounter onClickFunc={handleOnClick} clickCount={count}>Increment count by 1</ButtonWithCounter>
      <ButtonWithCounter onClickFunc={handleOnClick} clickCount={count}>Increment count by 1</ButtonWithCounter>
    </>
  );
}

function ButtonWithCounter({ children, onClickFunc, clickCount }) {
  return (
    <>
      <p>I have clicked the button {clickCount} time(s)</p>
      <button onClick={onClickFunc}>{children}</button>
    </>
  );
}`;

const individualStateAnswer = `import { useState } from "react";

export default function App() {
  return (
    <>
      <ButtonWithCounter>Increment count by 1</ButtonWithCounter>
      <ButtonWithCounter>Increment count by 1</ButtonWithCounter>
    </>
  );
}

// Since we no longer have the state in the App component, we can remove the 2 props that was previously used
function ButtonWithCounter({ children }) {
  // The state has been moved into this component instead
  // This means when ButtonWithCounter component is rendered, a new state is created
  const [count, setCount] = useState(0);

  function handleOnClick() {
    // Update the state by increasing the current state value by 1
    setCount(count + 1);
  }
  
  return (
    <>
      <p>I have clicked the button {count} time(s)</p>
      <button onClick={handleOnClick}>{children}</button>
    </>
  );
}`;
