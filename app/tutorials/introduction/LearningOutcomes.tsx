import Header from "@/app/components/Header";
import NestedList, { ListItem } from "@/app/components/NestedList";

export default function LearningOutcomes() {
    return (
        <article id="learning-outcomes">
            <Header className="mt-0">Learning Outcomes</Header>
            <NestedList items={data} />
        </article>
    );
}

const data: ListItem[] = [
    {
        id: 1,
        label: (<span>JavaScript vs TypeScript</span>),
        className: 'font-bold',
        children: [
            {
                id: 2,
                label: (
                    <span><span className="underline">Understand the core difference</span> between JavaScript and TypeScript</span>
                )
            },
            {
                id: 3,
                label: (
                    <span><span className="underline">Recognise the advantages of TypeScript</span>, such as early error detection.</span>
                ),
            },
            {
                id: 4,
                label: (
                    <span><span className="underline">Learn basic TypeScript features</span>, such as static typing, and type inference.</span>
                ),
            },
            {
                id: 5,
                label: (
                    <span><span className="underline">Know when to use JavaScript or TypeScript</span> depending on the project.</span>
                ),
            },
        ],
    },
    {
        id: 6,
        label: (<span>React - Fundamentals</span>),
        className: 'font-bold',
        children: [
            {
                id: 7,
                label: (
                    <span><span className="underline">Understand React Basics</span>: Learn React&apos;s virtual DOM and component-based architecture, JSX syntax, and set up a React project using Create React App.</span>
                )
            },
            {
                id: 8,
                label: (
                    <span><span className="underline">Build Functional Components</span>: Pass data through props, manage state with the useState hook, and handle user events like clicks and form submissions.</span>
                ),
            },
            {
                id: 9,
                label: (
                    <span><span className="underline">Conditional Rendering</span>: Display dynamic content based on conditions.</span>
                ),
            },
            {
                id: 10,
                label: (
                    <span><span className="underline">Rendering a List of Items</span>: Render dynamic lists using .map().</span>
                ),
            },
        ],
    },
    {
        id: 11,
        label: (<span>React - Intermediate</span>),
        className: 'font-bold',
        children: [
            {
                id: 12,
                label: (
                    <span><span className="underline">Side Effects with useEffect</span>: Manage side effects like fetching data or interacting with the DOM through the useEffect hook.</span>
                )
            },
            {
                id: 13,
                label: (
                    <span><span className="underline">Context API for State Management</span>: Managing global state with React&apos;s Context API.</span>
                ),
            },
            {
                id: 14,
                label: (
                    <span><span className="underline">Custom Hooks</span>: Create reusable hooks for encapsulating logic that can be shared across components.</span>
                ),
            },
        ],
    },
    {
        id: 15,
        label: (<span>React - Advanced</span>),
        className: 'font-bold',
        children: [
            {
                id: 16,
                label: (
                    <span><span className="underline">Advanced State Management</span>: Use the useReducer hook for managing more complex state logic.</span>
                )
            },
            {
                id: 17,
                label: (
                    <span><span className="underline">Routing with react-router-dom</span>: Implement client-side routing for multiple pages and dynamic routes.</span>
                ),
            },
            {
                id: 18,
                label: (
                    <span><span className="underline">Error Boundaries</span>: Handle errors with Error Boundaries.</span>
                ),
            },
        ],
    },
];