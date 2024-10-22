import Pagination from "@/app/components/Pagination";
import Section from "@/app/components/Section";
import KeyPointerOne from "./KeyPointerOne";
import KeyPointerTwo from "./KeyPointerTwo";
import KeyPointerThree from "./KeyPointerThree";
import KeyPointerFour from "./KeyPointerFour";
import KeyPointerFive from "./KeyPointerFive";
import LearnMore from "@/app/components/LearnMore";
import Hyperlink from "@/app/components/Hyperlink";

export default function Page() {
    return (
        <Section>
            <KeyPointerOne />
            <KeyPointerTwo />
            <KeyPointerThree />
            <KeyPointerFour />
            <KeyPointerFive />
            <LearnMore references={references} />
            <Pagination
                previousLabel="Setting Up Tools and React Project Environment"
                previousPath="/tutorials/setting-up"
                nextPath="/tutorials/building-functional-components"
                nextLabel="Building Functional Components" />
        </Section>
    );
}

const references = [
    {
        id: 1,
        label: (<Hyperlink href="https://react.dev/learn/thinking-in-react">(Step 1 only) Thinking in React - React.dev</Hyperlink>)
    },
];