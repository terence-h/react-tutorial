import Pagination from "@/app/components/Pagination";
import Section from "@/app/components/Section";
import LearnMore from "@/app/components/LearnMore";
import Hyperlink from "@/app/components/Hyperlink";
import IntroductionStates from "./IntroductionStates";
import CreatingState from "./CreatingState";
import IndividualSharedState from "./IndividualSharedState";
import WorkingWithForms from "./WorkingWithForms";

export default function Page() {
    return (
        <Section id="managing-states">
            <IntroductionStates />
            <CreatingState />
            <IndividualSharedState />
            <WorkingWithForms />
            <LearnMore references={references} />
            <Pagination
                previousLabel="Practice: Handling User Events"
                previousPath="/practices/handling-user-events"
                nextPath="/practices/managing-states"
                nextLabel="Practice: Managing States with useState" />
        </Section>
    );
}

const references = [
    {
        id: 1,
        label: (<Hyperlink href="https://react.dev/learn/state-a-components-memory">State: A Component&apos;s Memory - React.dev</Hyperlink>)
    },
    {
        id: 2,
        label: (<Hyperlink href="https://react.dev/learn/render-and-commit">Render and Commit - React.dev</Hyperlink>)
    },
    {
        id: 3,
        label: (<Hyperlink href="https://react.dev/learn/state-as-a-snapshot">State as a Snapshot - React.dev</Hyperlink>)
    },
    {
        id: 4,
        label: (<Hyperlink href="https://react.dev/learn/queueing-a-series-of-state-updates">Queueing a Series of State Updates - React.dev</Hyperlink>)
    },
    {
        id: 5,
        label: (<Hyperlink href="https://react.dev/learn/updating-objects-in-state">Updating Objects in State - React.dev</Hyperlink>)
    },
    {
        id: 6,
        label: (<Hyperlink href="https://react.dev/learn/referencing-values-with-refs">Referencing Values with Refs - React.dev</Hyperlink>)
    },
    {
        id: 7,
        label: (<Hyperlink href="https://react.dev/learn/manipulating-the-dom-with-refs">Manipulating the DOM with Refs - React.dev</Hyperlink>)
    },
    {
        id: 8,
        label: (<Hyperlink href="https://www.freecodecamp.org/news/react-state-management/">State Management in React - When and Where to use State - freecodecamp.org</Hyperlink>)
    },
];