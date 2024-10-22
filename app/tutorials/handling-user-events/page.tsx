import Pagination from "@/app/components/Pagination";
import Section from "@/app/components/Section";
import AddingOnClick from "./AddingOnClick";
import LearnMore from "@/app/components/LearnMore";
import Hyperlink from "@/app/components/Hyperlink";

export default function Page() {
    return (
        <Section>
            <AddingOnClick />
            <LearnMore references={references} />
            <Pagination
                previousLabel="Practice: Building Functional Components"
                previousPath="/practices/building-functional-components"
                nextPath="/practices/handling-user-events"
                nextLabel="Practice: Handling User Events" />
        </Section>
    );
}

const references = [
    {
        id: 1,
        label: (<Hyperlink href="https://react.dev/learn/responding-to-events">Responding to Events - React.dev</Hyperlink>)
    }
];