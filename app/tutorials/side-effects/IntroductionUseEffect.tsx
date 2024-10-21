import Header from "@/app/components/Header";
import NestedList, { ListItem } from "@/app/components/NestedList";
import Paragraph from "@/app/components/Paragraph";
import Table, { TableRow } from "@/app/components/Table";

export default function IntroductionUseEffect() {
    return (
        <article id="introduction">
            <Header>Introduction to useEffect</Header>

            <Paragraph>The useEffect hook allows you to manage side effects in components. Side effects include fetching data from an API, directly updating the DOM, and setting up timers or subscriptions like window event listeners. In this guide, you will learn how to use useEffect.
                <br />< br />The useEffect hook runs side effects AFTER every render or when specific dependencies change depending on how you declare the dependencies.
                <br />< br />It is essentially React&apos;s way of handling effects that would have been managed using lifecycle methods in class components (componentDidMount, componentDidUpdate, and componentWillUnmount). Here&apos;s a table to explain the 3 lifecycle methods.
            </Paragraph>

            <Table headers={headers} data={data} />
        </article>
    );
}

const mountingUseCases: ListItem[] = [
    {
        id: 1,
        label: <span>Fetching data from an API</span>
    },
    {
        id: 2,
        label: <span>Setting up subscriptions or event listeners</span>
    },
    {
        id: 3,
        label: <span>Timers or intervals</span>
    }
];

const updatingUseCases: ListItem[] = [
    {
        id: 1,
        label: <span>Responding to state or prop changes</span>
    },
    {
        id: 2,
        label: <span>Making subsequent API requests</span>
    },
    {
        id: 3,
        label: <span>Re-rendering based on user interaction or external events (e.g, window resize)</span>
    }
];

const unmountingUseCases: ListItem[] = [
    {
        id: 1,
        label: <span>Cleaning up subscriptions, event listeners, or timers</span>
    },
    {
        id: 2,
        label: <span>Stopping animations or ongoing processes</span>
    },
    {
        id: 3,
        label: <span>Freeing up resources to prevent memory leaks or unintended behaviour</span>
    }
];

const headers = ['Phase', 'When It Happens', 'Common Use Case'];

const data: TableRow[] = [
    { 'Phase': 'Mounting', 'When It Happens': 'When a component is created and inserted into the DOM', 'Common Use Case': <NestedList items={mountingUseCases} /> },
    { 'Phase': 'Updating', 'When It Happens': "When a component's props or state changes", 'Common Use Case': <NestedList items={updatingUseCases} /> },
    { 'Phase': 'Unmounting', 'When It Happens': 'When a component is removed from the DOM', 'Common Use Case': <NestedList items={unmountingUseCases} /> },
];