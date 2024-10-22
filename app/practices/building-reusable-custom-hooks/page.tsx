import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";
import Section from "../../components/Section";
import Pagination from "@/app/components/Pagination";
import ImageContainer from "@/app/components/ImageContainer";
import ChallengeOneOutput from "@/public/practices/building-reusable-custom-hooks/c1_expected_output.jpg";
import ChallengeTwoOutput from "@/public/practices/building-reusable-custom-hooks/c2_expected_output.jpg";

export default function Page() {
    return (
        <Section>
            <Header>Practice: Building Reusable Custom Hooks</Header>

            <InformationText><Paragraph>The code changes in the practice sections are saved into your browser locally so you do not have to finish in one go!</Paragraph></InformationText>

            <Header level={2}>Challenge 1</Header>
            <Paragraph>Create a reusable custom hook named useWindowSize to allow components to reuse the state. The state value should hold an object containing the width of the window and the height of the window. Render the state values into the output.
                <br /><br />Your output should look like this. The numbers should change whenever you resize your window.
            </Paragraph>
            <ImageContainer src={ChallengeOneOutput} className="mb-5" alt={"Challenge One Output"} />
            <CodeEditor id={1} initialCode={challengeOneInitial} languages={['jsx', 'tsx']} saveKey="building-custom-hooks-c1" />

            <Header level={2}>Challenge 2</Header>
            <Paragraph>Create a reusable hook that allows you to access the browser&apos;s localStorage. Your hook should allow you to input the key of localStorage and also set the initial value if the localStorage key does not exist. Use a button and use the onClick event to set a randomised value between 0 and 1 (2 decimal points). Display the randomised value on the button&apos;s text.</Paragraph>
            <ImageContainer src={ChallengeTwoOutput} className="mb-5" alt={"Challenge Two Output"} />
            <CodeEditor id={2} initialCode={challengeTwoInitial} languages={['jsx', 'tsx']} saveKey="building-custom-hooks-c2" />
            <Pagination
                previousLabel="Building Reusable Custom Hooks"
                previousPath="/tutorials/building-reusable-custom-hooks"
                nextPath="/tutorials/routing"
                nextLabel="Routing for Apps with Multiple Pages" />
        </Section>
    );
}

const challengeOneInitial = `export default function App() {
  return (
    <p>Render your width and height here.</p>
  );
}

function useWindowResize() {
  
}`;

const challengeTwoInitial = `export default function App() {
  return <button>Your localStorage random number</button>;
}

function useLocalStorage() {

}`;

// C1 ANSWER
// import { useState, useEffect } from 'react';

// export default function App() {
//   const windowSize = useWindowResize();

//   return (
//     <p>{"width: " + windowSize.x + " | height: " + windowSize.y}</p>
//   );
// }

// function useWindowResize() {
//   // State to store the width and height
//   const [windowSize, setWindowSize] = useState({ x: window.innerWidth, y: window.innerHeight });

//   useEffect(() => {
//     // Function to update the state
//     function handleResize() {
//       setWindowSize({ x: window.innerWidth, y: window.innerHeight });
//     }

//     // Listen on window resize
//     window.addEventListener('resize', handleResize);

//     // Cleanup function to prevent memory leaks
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []); // Effect only runs on mount and cleanup on unmount

//   // Return the state value that we want other components using this hook to have access.
//   return windowSize;
// }


// C2 ANSWER
// import { useState } from "react";

// export default function App() {
//   // Using the key "randomNumber" and set a default value if the key does not exist
//   const [storedValue, setValue] = useLocalStorage("randomNumber", Math.random().toFixed(2));
  
//   return (
//     <button onClick={() => setValue(Math.random().toFixed(2))}>{storedValue}</button>
//   );
// }

// function useLocalStorage(key, initialValue) {
//   // We can also use arrow function to write JS code to set a initial state value
//   const [storedValue, setStoredValue] = useState(() => {
//     const item = window.localStorage.getItem(key);

//     // If the key doesn't exist, create the key and set the initial value provided in the parameter
//     if (!item)
//       window.localStorage.setItem(key, initialValue);
    
//     return item ?? initialValue;
//   });

//   // Function to update the state and local storage
//   function setValue(value) {
//     setStoredValue(value);
//     window.localStorage.setItem(key, value);
//   }

//   // Return the stored value of the localStorage key and state function to update the localStorage key
//   return [storedValue, setValue];
// }