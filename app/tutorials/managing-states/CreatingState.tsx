import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";

export default function CreatingState() {
    return (
        <article id="creating-a-state">
            <Header>Creating a State</Header>

            <Paragraph>To create a state, we simply import &quot;useState&quot; from react and call useState() in a component.</Paragraph>
            <CodeEditor id={1} initialCode={useStateSample} languages={["jsx", "tsx"]} />
            
            <InformationText className="mt-5">You SHOULD NOT modify the state value directly (e.g, &quot;count = 5&quot;). You should ALWAYS be using the state function (setCount in this case) to set the value of the state.
                <br />React will only trigger a rerender when updating the state value through the state function.
            </InformationText>
        </article>
    );
}

const useStateSample = `import { useState } from "react";

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