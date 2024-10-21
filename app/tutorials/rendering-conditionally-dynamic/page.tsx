import Pagination from "@/app/components/Pagination";
import Section from "@/app/components/Section";
import ConditionalRendering from "./ConditionalRendering";
import RenderingDynamicContent from "./RenderingDynamicContent";
import LearnMore from "@/app/components/LearnMore";
import Hyperlink from "@/app/components/Hyperlink";

export default function Page() {
    return (
        <Section id="rendering-conditionally-dynamic">
            <ConditionalRendering />
            <RenderingDynamicContent />
            <LearnMore references={references} />
            <Pagination
                previousLabel="Practice: Managing States with useState"
                previousPath="/practices/managing-states"
                nextPath="/practices/rendering-conditionally-dynamic"
                nextLabel="Practice: Rendering Conditionally and Dynamic Content" />
        </Section>
    );
}

const references = [
    {
        id: 1,
        label: (<Hyperlink href="https://react.dev/learn/conditional-rendering">Conditional Rendering - React.dev</Hyperlink>)
    },
    {
        id: 2,
        label: (<Hyperlink href="https://react.dev/learn/rendering-lists">Rendering Lists - React.dev</Hyperlink>)
    },
    {
        id: 3,
        label: (<Hyperlink href="https://www.freecodecamp.org/news/react-conditional-rendering/">React Conditional Rendering - freecodecamp.org</Hyperlink>)
    },
];