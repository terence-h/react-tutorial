import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";

export default function CreatingAHook() {
    return (
        <article id="creating-a-hook">
            <Header>Creating a Hook to Toggle True/False</Header>
            <Paragraph className="mb-5">Creating a hook is very similar to creating a React component. The only difference is that <span className="underline">you return the values that you want to allow the components using the custom hook to access when using the custom hook</span>.</Paragraph>
            <CodeEditor id={1} initialCode={creatingAHook} languages={["jsx", "tsx"]} height="500px" />
            <InformationText className="mt-5">Did you notice that the states of the button are not shared while in Context API section, the state is shared across all components.
                <br /><br />Remember Context API provides <span className="underline">1 state</span> to ALL nested components. In the case of this custom hook, we are providing a new state to EACH component.
            </InformationText>
        </article>
    );
}

const creatingAHook = `import { useState } from 'react';

export default function App() {
  return (
    <div className='flex gap-2'>
      {/* Create 3 toggle buttons */}
      <ToggleButton />
      <ToggleButton />
      <ToggleButton />
    </div>
  );
}

function ToggleButton() {
  // Access the custom hook and grabbing the 2 values that we returned in the custom hook.
  const [value, toggle] = useToggle(false);
  
  return <button onClick={toggle} className="bg-blue-500 p-2">{value.toString()}</button>;
}

// A custom hook name typically start with useXYZ
// In an actual environment, this would be in another file and exported.
function useToggle(initialValue = false) {
  
  // State for the toggle
  const [value, setValue] = useState(initialValue);

  // Function to toggle true and false
  function toggle() {
    setValue(!value);
  }

  // We return the state value and toggle function since we want other components using this custom hook to access them.
  return [value, toggle];
}`;