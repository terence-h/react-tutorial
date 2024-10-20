import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";
import Section from "../../components/Section";
import Pagination from "@/app/components/Pagination";

export default function Page() {
    return (
        <Section id="handling-user-events">
            <Header>Practice: Handling User Events</Header>

            <InformationText>The code changes in the practices section are saved into your browser locally so you do not have to finish in one go!</InformationText>

            <Header level={2}>Challenge 1</Header>
            <Paragraph>Create an onClick function for the button that sends an alert message. The function must take in a string parameter that determines the alert message.
            </Paragraph>
            <CodeEditor id={1} initialCode={challengeOneInitial} languages={['jsx', 'tsx']} saveKey="user-events-c1" />

            <Pagination
                previousLabel="Handling User Events"
                previousPath="/tutorials/handling-user-events"
                nextPath="/tutorials/managing-states"
                nextLabel="Managing States with useState" />
        </Section>
    );
}

const challengeOneInitial = `// Modify where necessary
export default function App() {
  return <Button>Click me</Button>
}

function Button({ children }) {
  return <button className="p-2 bg-blue-500 rounded-md">{children}</button>
}`;