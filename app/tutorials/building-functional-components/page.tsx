import Section from "@/app/components/Section";
import Pagination from "@/app/components/Pagination";
import AddingAHeaderAndParagraph from "./AddingAHeaderAndParagraph";
import BreakingSeparateComponents from "./BreakingSeparateComponents";
import PassingProps from "./PassingProps";
import CreatingVariants from "./CreatingVariants";
import LearnMore from "@/app/components/LearnMore";
import Hyperlink from "@/app/components/Hyperlink";

export default function Page() {
    return (
        <Section id="building-functional-components">
            <AddingAHeaderAndParagraph />
            <BreakingSeparateComponents />
            <PassingProps />
            <CreatingVariants />
            <LearnMore references={references} />
            <Pagination
                previousLabel="Starting with React"
                previousPath="/tutorials/starting-with-react"
                nextPath="/practices/building-functional-components"
                nextLabel="Practice: Building Functional Components" />
        </Section>
    );
}

const references = [
    {
        id: 1,
        label: (<Hyperlink href="https://react.dev/learn/your-first-component">Your First Component - React.dev</Hyperlink>)
    },
    {
        id: 2,
        label: (<Hyperlink href="https://react.dev/learn/importing-and-exporting-components">Importing and Exporting Components - React.dev</Hyperlink>)
    },
    {
        id: 3,
        label: (<Hyperlink href="https://react.dev/learn/writing-markup-with-jsx">Writing Markup with JSX - React.dev</Hyperlink>)
    },
    {
        id: 4,
        label: (<Hyperlink href="https://react.dev/learn/javascript-in-jsx-with-curly-braces">JavaScript in JSX with Curly Braces - React.dev</Hyperlink>)
    },
    {
        id: 5,
        label: (<Hyperlink href="https://react.dev/learn/passing-props-to-a-component">Passing Props to a Component - React.dev</Hyperlink>)
    },
];