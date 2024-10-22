import Section from "@/app/components/Section";
import Pagination from "@/app/components/Pagination";
import IntroductionRouting from "./IntroductionRouting";
// import LearnMore from "@/app/components/LearnMore";
// import Hyperlink from "@/app/components/Hyperlink";

export default function Page() {
    return (
        <Section>
            <IntroductionRouting />
            {/* <LearnMore references={references} /> */}
            <Pagination
                previousLabel="Practice: Building Reusable Custom Hooks"
                previousPath="/practices/building-reusable-custom-hooks"
                nextPath="/tutorials/error-Boundaries"
                nextLabel="Error Boundaries" />
        </Section>
    );
}

// const references = [
//     {
//         id: 1,
//         label: (<Hyperlink href="https://react.dev/learn/reusing-logic-with-custom-hooks">Reusing Logic with Custom Hooks - React.dev</Hyperlink>)
//     },
// ];