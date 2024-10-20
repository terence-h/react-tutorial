import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";
import Section from "../../components/Section";
import Pagination from "@/app/components/Pagination";

export default function Page() {
    return (
        <Section id="building-functional-components">
            <Header>Practice: Building Functional Components</Header>

            <InformationText>The code changes in the practices section are saved into your browser locally so you do not have to finish in one go!</InformationText>

            <Header level={2}>Challenge 1</Header>
            <Paragraph>You are now asked to create a Paragraph component. The Paragraph component must be able to take in the style property and be able to change the text. Paragraph styling: text-decoration: &quot;underline dotted&quot;
            </Paragraph>
            <CodeEditor id={1} height="300px" initialCode={challengeOneInitial} languages={['jsx', 'tsx']} saveCode="building-fc-c1" />

            <Header level={2}>Challenge 2</Header>
            <Paragraph>You are now tasked to create a Section component that wraps 3 different components (Header, Paragraph and Button) together. The new Section component must be able to style BOTH Header and Paragraph components. It must also be able to set BOTH Header and Paragraph text.</Paragraph>
            <CodeEditor id={2} height="300px" initialCode={challengeTwoInitial} languages={['jsx', 'tsx']} saveCode="building-fc-c2" />

            <Pagination
                previousLabel="Building Functional Components"
                previousPath="/tutorials/building-functional-components"
                nextPath="/tutorials/handling-user-events"
                nextLabel="Handling User Events" />
        </Section>
    );
}

const challengeOneInitial = `// Remember, any function outside of App are considered separate file/component.
export default function App() {
  
}`;

const challengeTwoInitial = `// Hint: Since you need to have 2 text (header and paragraph), you can use 1 new prop
// for the header text and children prop for the paragraph text.
export default function App() {
  
}`;