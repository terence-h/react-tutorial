import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";
import Section from "../../components/Section";
import Pagination from "@/app/components/Pagination";
import ImageContainer from "@/app/components/ImageContainer";
import ChallengeOneOutput from "@/public/practices/rendering-conditionally-dynamic/c1_expected_output.jpg";
import ChallengeTwoOutputOne from "@/public/practices/rendering-conditionally-dynamic/c2_expected_output_1.jpg";
import ChallengeTwoOutputTwo from "@/public/practices/rendering-conditionally-dynamic/c2_expected_output_2.jpg";
import NestedList, { ListItem } from "@/app/components/NestedList";

export default function Page() {
    return (
        <Section>
            <Header>Practice: Rendering Conditionally and Dynamic Content</Header>

            <InformationText>The code changes in the practice sections are saved into your browser locally so you do not have to finish in one go!</InformationText>

            <Header level={2}>Challenge 1</Header>
            <Paragraph>You are to render a list of todo list, The object provided in the code editor contains 2 done and 2 not done tasks. You are required to render ALL items of the todo list.
                <br /><br />Your output should look something like this:
            </Paragraph>
            <ImageContainer className="w-2/3 md:w-1/2 mb-5" src={ChallengeOneOutput} alt={"Challenge 1 Output"} />
            <CodeEditor id={1} initialCode={challengeOneInitial} languages={['jsx', 'tsx']} saveKey="rendering-dynamic-c1" />

            <Header level={2}>Challenge 2</Header>
            <Paragraph>Using your answer in Challenge 1, add in a button that allows you to toggle showing and hiding todos that are done.
                <br /><br />The button text must display what the button does. E.g., If clicking the button hides done todos, it must show &quot;Hide Done&quot;. If the button removes the filter, it should show &quot;Show All&quot;.
                <br /><br />Here are some hints to help you out:
            </Paragraph>
            <NestedList items={hintsC1} />
            <Paragraph className="mt-5 mb-5">Your output should look something like this:</Paragraph>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="col-span-1">
                    <Paragraph>Show all tasks</Paragraph>
                    <ImageContainer src={ChallengeTwoOutputOne} alt={"Challenge 2 Output 1"} />
                </div>
                <div className="col-span-1">
                    <Paragraph>Done tasks hidden</Paragraph>
                    <ImageContainer src={ChallengeTwoOutputTwo} alt={"Challenge 2 Output 2"} />
                </div>
            </div>
            <CodeEditor id={1} initialCode={challengeTwoInitial} languages={['jsx', 'tsx']} saveKey="rendering-dynamic-c2" />

            <Pagination
                previousLabel="Rendering Conditionally and Dynamic Content"
                previousPath="/tutorials/rendering-conditionally-dynamic"
                nextPath="/tutorials/side-effects"
                nextLabel="Side Effects with useEffect" />
        </Section>
    );
}

const hintsC1: ListItem[] = [
    {
        id: 1,
        label: <span>You will need to manage 1 state with useState as you are changing the page display.</span>
    },
    {
        id: 2,
        label: <span>To filter out certain items, JavaScript contains a built-in function called .filter().</span>
    },
    {
        id: 3,
        label: <span>Conditional Rendering will be useful here.</span>
    }
]

const challengeOneInitial = `const toDoList = [
  { title: "Buy Bread", details: "Head to supermarket after work and purchase from the supermarket.", done: false },
  { title: "Work Meeting for project", details: "Meet with team at 9:00am to provide updates on the project.", done: true },
  { title: "Visit grandparents", details: "Go to grandparents house at 8:30pm", done: false },
  { title: "Fix Work Laptop", details: "Head to scheduled IT support appointment to get laptop fixed.", done: true }
];

export default function App() {
  return (
    <>
      {/* Render the todo list */}
    </>
  );
}`;

const challengeTwoInitial = `// Copy your Challenge 1 answer here`;

// ANSWER FOR C1
// const toDoList = [
//   { title: "Buy Bread", details: "Head to supermarket after work and purchase from the supermarket.", done: false },
//   { title: "Work Meeting for project", details: "Meet with team at 9:00am to provide updates on the project.", done: true },
//   { title: "Visit grandparents", details: "Go to grandparents house at 8:30pm", done: false },
//   { title: "Fix Work Laptop", details: "Head to scheduled IT support appointment to get laptop fixed.", done: true }
// ];

// export default function App() {
//   return (
//     <>
//       {toDoList.map((todo, index) => (
//       <div key={index}>
//         <h1>{todo.title} - <span style={{ fontWeight: "bold" }}>{todo.done ? "Done" : "Not Done"}</span></h1>
//         <p>{todo.details}</p>
//         <br />
//       </div>
//       ))}
//     </>
//   );
// }

// ANSWER FOR C2
// import { useState } from "react";

// const toDoList = [
//   { title: "Buy Bread", details: "Head to supermarket after work and purchase from the supermarket.", done: false },
//   { title: "Work Meeting for project", details: "Meet with team at 9:00am to provide updates on the project.", done: true },
//   { title: "Visit grandparents", details: "Go to grandparents house at 8:30pm", done: false },
//   { title: "Fix Work Laptop", details: "Head to scheduled IT support appointment to get laptop fixed.", done: true }
// ];

// export default function App() {
//   const [showNotDoneOnly, setShowNotDoneOnly] = useState(false);

//   function handleOnClick() {
//     setShowNotDoneOnly(!showNotDoneOnly);
//   }

//   return (
//     <>
//       <button onClick={handleOnClick}>
//         {showNotDoneOnly ? "Show All" : "Hide Done"}
//       </button>
//       <br/><br/>
//       {toDoList
//         .filter((todo) => !showNotDoneOnly || !todo.done)
//         .map((todo, index) => (
//       <div key={index}>
//         <h1>{todo.title} - <span style={{ fontWeight: "bold" }}>{todo.done ? "Done" : "Not Done"}</span></h1>
//         <p>{todo.details}</p>
//         <br />
//       </div>
//       ))}
//     </>
//   );
// }