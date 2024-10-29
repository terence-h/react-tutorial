import Pagination from "@/app/components/Pagination";
import Section from "@/app/components/Section";
import IntroductionContextAPI from "./IntroductionContextAPI";
import CreatingDarkMode from "./CreatingDarkMode";
import LearnMore from "@/app/components/LearnMore";
import Hyperlink from "@/app/components/Hyperlink";
import LimitationsContext from "./LimitationsContext";

export default function Page() {
    return (
        <Section>
            <IntroductionContextAPI />
            <LimitationsContext />
            <CreatingDarkMode />
            <LearnMore references={references} />
            <Pagination
                previousLabel="Practice: Side Effects with useEffect"
                previousPath="/practices/side-effects"
                nextPath="/practices/managing-complex-states"
                nextLabel="Practice: Managing Complex States with Context API" />
        </Section>
    );
}

const references = [
    {
        id: 1,
        label: (<Hyperlink href="https://react.dev/learn/passing-data-deeply-with-context">Passing Data Deeply with Context - React.dev</Hyperlink>)
    },
    {
        id: 2,
        label: (<Hyperlink href="https://www.freecodecamp.org/news/context-api-in-react/">How to Use the React Context API in Your Projects - freecodecamp.org</Hyperlink>)
    },
];