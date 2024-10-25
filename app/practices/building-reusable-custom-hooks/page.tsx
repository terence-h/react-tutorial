import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";
import Section from "../../components/Section";
import Pagination from "@/app/components/Pagination";
import ImageContainer from "@/app/components/ImageContainer";
import ChallengeOneOutput from "@/public/practices/building-reusable-custom-hooks/c1_expected_output.jpg";
import ChallengeTwoOutput from "@/public/practices/building-reusable-custom-hooks/c2_expected_output.jpg";
import Solutions from "./solutions";

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
            
            <Solutions />
            
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