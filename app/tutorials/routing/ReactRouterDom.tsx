import Header from "@/app/components/Header";
import NestedList, { ListItem } from "@/app/components/NestedList";
import Paragraph from "@/app/components/Paragraph";

export default function ReactRouterDom() {
    return (
        <article id="react-router-dom">
            <Header>What is react-router-dom?</Header>
            <Paragraph>react-router-dom is a library that allows you to:</Paragraph>
            <NestedList items={ReactRouterDomFuncs} />
        </article>
    );
}

const ReactRouterDomFuncs: ListItem[] = [
    {
        id: 1,
        label: <span><span className="font-bold">Define Routes</span>: Map URLs to specific components.</span>
    },
    {
        id: 2,
        label: <span><span className="font-bold">Navigate Between Pages</span>: Create links and navigation bars that allow users to move between different pages without reloading the page.</span>
    },
    {
        id: 3,
        label: <span><span className="font-bold">Handle Dynamic Parameters</span>: Pass dynamic parameters in the URL (like user IDs or post slugs) and access them in components.</span>
    },
    {
        id: 4,
        label: <span><span className="font-bold">Redirect Users</span>: Redirect users based on certain conditions (like authentication or form submission).</span>
    },
    {
        id: 5,
        label: <span><span className="font-bold">Nested Routing</span>: Define routes inside other routes (e.g., a &quot;dashboard&quot; route with nested sub-pages).</span>
    },
]