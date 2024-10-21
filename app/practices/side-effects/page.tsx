import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";
import Section from "../../components/Section";
import Pagination from "@/app/components/Pagination";
import NestedList, { ListItem } from "@/app/components/NestedList";
import ImageContainer from "@/app/components/ImageContainer";
import ChallengeOneOutput from "@/public/practices/side-effects/c1_expected_output.jpg";
import ChallengeTwoOutput from "@/public/practices/side-effects/c2_expected_output.jpg";

export default function Page() {
    return (
        <Section id="side-effects">
            <Header>Practice: Side Effects with useEffect</Header>

            <InformationText>The code changes in the practice sections are saved into your browser locally so you do not have to finish in one go!</InformationText>

            <Header level={2}>Challenge 1</Header>
            <Paragraph>Add an useEffect hook to the existing code below to make sure the counter persists when you run the code again. Below are some hints to help you out.</Paragraph>
            <NestedList items={hintsOne} className="mb-5" />
            <Paragraph>Your output should look something like this:</Paragraph>
            <ImageContainer className="md:w-2/3 mb-5" src={ChallengeOneOutput} alt={"Challenge 1 Output"} />
            <CodeEditor id={1} initialCode={challengeOneInitial} languages={['jsx', 'tsx']} saveKey="side-effects-c1" />

            <Header level={2}>Challenge 2</Header>
            <Paragraph>Implement a simple timer with useEffect. The timer should increment every second. Below are some hints to help you out.</Paragraph>
            <NestedList items={hintsTwo} className="mb-5" />
            <Paragraph>Your output should look something like this:</Paragraph>
            <ImageContainer className="w-2/3 md:w-1/2 mb-5" src={ChallengeTwoOutput} alt={"Challenge 2 Output"} />
            <CodeEditor id={2} initialCode={challengeTwoInitial} languages={['jsx', 'tsx']} saveKey="side-effects-c2" />

            <Pagination
                previousLabel="Side Effects with useEffect"
                previousPath="/tutorials/side-effects"
                nextPath="/"
                nextLabel="..." />
        </Section>
    );
}

const hintsOne: ListItem[] = [
    {
        id: 1,
        label: <span>JavaScript contains setInterval/clearInterval function.</span>
    },
    {
        id: 2,
        label: <span>setInterval is a function that executes repeatedly. You have to do something when the component unmounts to prevent potential memory leaks. This was mention earlier in this section.</span>
    },
];

const hintsTwo: ListItem[] = [
    {
        id: 1,
        label: <span>You can use localStorage to store and retrieve data from the browser.</span>
    },
    {
        id: 2,
        label: <span>You can set the default value of the state with your localStorage when it renders.</span>
    },
];

const challengeOneInitial = `import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <>
      <p>Click counter: {count}</p>
      <button className="bg-blue-500 p-2" onClick={handleClick}>Increment count by 1</button>
    </>
  );
}`;

const challengeTwoInitial = `export default function App() {

}`;

// ANSWER TO C1
// import { useState, useEffect } from "react";

// export default function App() {
//   const storedCount = window.localStorage.getItem("count")
//   const [count, setCount] = useState(storedCount ? parseInt(storedCount) : 0);

//   useEffect(() => {
//     window.localStorage.setItem("count", count);
//   }, [count])

//   function handleClick() {
//     setCount(count + 1);
//   }
  
//   return (
//     <>
//       <p>Click counter: {count}</p>
//       <button className="bg-blue-500 p-2" onClick={handleClick}>Increment count by 1</button>
//     </>
//   );
// }

// ANSWER TO C2
// import { useState, useEffect } from "react";

// export default function App() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []); // Runs only once when the component mounts

//   return <p>Timer: {seconds} seconds</p>
// }