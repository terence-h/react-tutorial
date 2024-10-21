import Pagination from "@/app/components/Pagination";
import Section from "@/app/components/Section";
import IntroductionUseEffect from "./IntroductionUseEffect";
import ImplementationsUseEffect from "./ImplementationsUseEffect";
import LearnMore from "@/app/components/LearnMore";
import Hyperlink from "@/app/components/Hyperlink";

export default function Page() {
    return (
        <Section id="side-effects">
            <IntroductionUseEffect />
            <ImplementationsUseEffect />
            <LearnMore references={references} />
            <Pagination
                previousLabel="Practice: Rendering Conditionally and Dynamic Content"
                previousPath="/practices/rendering-conditionally-dynamic"
                nextPath="/practices/side-effects"
                nextLabel="Practice: Side Effects with useEffect" />
        </Section>
    );
}

const references = [
    {
        id: 1,
        label: (<Hyperlink href="https://react.dev/learn/synchronizing-with-effects">Synchronizing with Effects - React.dev</Hyperlink>)
    },
    {
        id: 2,
        label: (<Hyperlink href="https://react.dev/learn/you-might-not-need-an-effect">You Might Not Need an Effect - React.dev</Hyperlink>)
    },
    {
        id: 3,
        label: (<Hyperlink href="https://react.dev/learn/lifecycle-of-reactive-effects">Lifecycle of Reactive Effects - React.dev</Hyperlink>)
    },
    {
        id: 4,
        label: (<Hyperlink href="https://react.dev/learn/separating-events-from-effects">Separating Events from Effects - React.dev</Hyperlink>)
    },
    {
        id: 5,
        label: (<Hyperlink href="https://react.dev/learn/removing-effect-dependencies">Removing Effect Dependencies - React.dev</Hyperlink>)
    },
    {
        id: 6,
        label: (<Hyperlink href="https://www.youtube.com/watch?v=0ZJgIjIuY7U">Learn useEffect In 13 Minutes - youtube.com</Hyperlink>)
    },
];