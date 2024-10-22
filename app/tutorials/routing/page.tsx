import Section from "@/app/components/Section";
import Pagination from "@/app/components/Pagination";
import IntroductionRouting from "./IntroductionRouting";
import ReactRouterDom from "./ReactRouterDom";
import CreatingSimpleRoutes from "./CreatingSimpleRoutes";
import CreatingDynamicRoutes from "./CreatingDynamicRoutes";
import Handling404Pages from "./Handling404Pages";
import Redirecting from "./Redirecting";
import LazyLoading from "./LazyLoading";
import LearnMore from "@/app/components/LearnMore";
import Hyperlink from "@/app/components/Hyperlink";

export default function Page() {
    return (
        <Section>
            <IntroductionRouting />
            <ReactRouterDom />
            <CreatingSimpleRoutes />
            <CreatingDynamicRoutes />
            <Handling404Pages />
            <Redirecting />
            <LazyLoading />
            <LearnMore references={references} />
            <Pagination
                previousLabel="Practice: Building Reusable Custom Hooks"
                previousPath="/practices/building-reusable-custom-hooks"
                nextPath="/tutorials/error-boundaries"
                nextLabel="Error Boundaries" />
        </Section>
    );
}

const references = [
    {
        id: 1,
        label: (<Hyperlink href="https://reactrouter.com/en/main">Guides - reactrouter.com</Hyperlink>)
    },
    {
        id: 2,
        label: (<Hyperlink href="https://www.youtube.com/watch?v=SMq1IQRweDc">Learn React Router v6 - Full Course - youtube.com</Hyperlink>)
    },
];