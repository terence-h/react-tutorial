import Section from "@/app/components/Section";
import Pagination from "@/app/components/Pagination";
import IntroductionErrorBoundaries from "./IntroductionErrorBoundaries";
import LimitationsErrorBoundaries from "./LimitationsErrorBoundaries";
import ImplementingErrorBoundaries from "./ImplementingErrorBoundaries";
import ExternalPackagesErrorBoundaries from "./ExternalPackagesErrorBoundaries";
import LearnMore from "@/app/components/LearnMore";
import Hyperlink from "@/app/components/Hyperlink";

export default function Page() {
    return (
        <Section>
            <IntroductionErrorBoundaries />
            <LimitationsErrorBoundaries />
            <ImplementingErrorBoundaries />
            <ExternalPackagesErrorBoundaries />
            <LearnMore references={references} />
            <Pagination
                previousLabel="Routing for Apps with Multiple Pages"
                previousPath="/tutorials/routing"
                nextPath="/case-study"
                nextLabel="Case Study" />
        </Section>
    );
}

const references = [
    {
        id: 1,
        label: (<Hyperlink href="https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary">Component (Catching Rendering Errors) - React.dev</Hyperlink>)
    },
];