import Pagination from "@/app/components/Pagination";
import Section from "@/app/components/Section";
import LearnMore from "@/app/components/LearnMore";
import Hyperlink from "@/app/components/Hyperlink";

export default function Page() {
    return (
        <Section id="managing-states">
            {/* <LearnMore references={references} /> */}
            <Pagination
                previousLabel="Practice: Handling User Events"
                previousPath="/practices/handling-user-events"
                nextPath="/"
                nextLabel="Rendering Conditionally and Dynamically" />
        </Section>
    );
}

const references = [
    {
        id: 1,
        label: (<Hyperlink href="https://react.dev/learn/responding-to-events">Responding to Events - React.dev</Hyperlink>)
    }
];