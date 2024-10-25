import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";
import Section from "../../components/Section";
import Pagination from "@/app/components/Pagination";
import ImageContainer from "@/app/components/ImageContainer";
import ChallengeOneOutputOne from "@/public/practices/managing-complex-states/c1_expected_output_1.jpg";
import ChallengeOneOutputTwo from "@/public/practices/managing-complex-states/c1_expected_output_2.jpg";
import Solutions from "./solutions";

export default function Page() {
    return (
        <Section>
            <Header>Practice: Managing Complex States with Context API</Header>

            <InformationText><Paragraph>The code changes in the practice sections are saved into your browser locally so you do not have to finish in one go!</Paragraph></InformationText>

            <Header level={2}>Challenge 1</Header>
            <Paragraph>Create a context provider that provides the value of whether the user is logged in or not. The login/logout button and paragraph component has been provided to you. The text displayed should be different when the user is logged in or logged out.
            <br /><br />Your output should look something like this:
            </Paragraph>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="col-span-1">
                    <ImageContainer src={ChallengeOneOutputOne} alt={"Challenge 1 Output 1"} />
                </div>
                <div className="col-span-1">
                    <ImageContainer src={ChallengeOneOutputTwo} alt={"Challenge 1 Output 2"} />
                </div>
            </div>
            <CodeEditor id={1} initialCode={challengeOneInitial} languages={['jsx', 'tsx']} saveKey="managing-complex-states-c1" />

            <Solutions />
            
            <Pagination
                previousLabel="Managing Complex States with Context API"
                previousPath="/tutorials/managing-complex-states"
                nextPath="/tutorials/building-reusable-custom-hooks"
                nextLabel="Building Reusable Custom Hooks" />
        </Section>
    );
}

const challengeOneInitial = `export default function App() {
  return (
    <>
      <LoginButton />
      <Paragraph />
    </>
  );
}

function Paragraph() {
  return (
    <>
      {/* This should be displayed when the user is logged in */}
      <p>Welcome back, Alice.</p>

      {/* This should be displayed when the user is logged out */}
      <p>You are not authorised to access this page.</p>
    </>
  );
}

function LoginButton() {
  // The button should display Login OR Logout depending on whether the user is logged in or not
  return <button className="p-2 bg-blue-500 rounded-md">Login/Logout</button>
}

// Create your context here
`;