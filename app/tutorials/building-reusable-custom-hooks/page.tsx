import Section from "@/app/components/Section";
import Pagination from "@/app/components/Pagination";
import IntroductionCustomHooks from "./IntroductionCustomHooks";
import DifferencesCustomHooks from "./DifferencesCustomHooks";
import UseCasesCustomHooks from "./UseCasesCustomHooks";
import CreatingAHook from "./CreatingAHook";
import LearnMore from "@/app/components/LearnMore";
import Hyperlink from "@/app/components/Hyperlink";

export default function Page() {
    return (
        <Section>
            <IntroductionCustomHooks />
            <DifferencesCustomHooks />
            <UseCasesCustomHooks />
            <CreatingAHook />
            <LearnMore references={references} />
            <Pagination
                previousLabel="Practice: Managing Complex States with Context API"
                previousPath="/practices/managing-complex-states"
                nextPath="/practices/building-reusable-custom-hooks"
                nextLabel="Practice: Building Reusable Custom Hooks" />
        </Section>
    );
}

const references = [
    {
        id: 1,
        label: (<Hyperlink href="https://react.dev/learn/reusing-logic-with-custom-hooks">Reusing Logic with Custom Hooks - React.dev</Hyperlink>)
    },
];