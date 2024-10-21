import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";
import Table, { TableRow } from "@/app/components/Table";

export default function IntroductionContextAPI() {
    return (
        <article id="introduction">
            <Header>Introduction to Context API</Header>
            <Paragraph>Up until now, we have been creating states with useState and passing it down to the children component. However, what if we have a state that is required by a lot of child components? Or if the structure of the app has deeply nested components (Root -{">"} Grandparent component -{">"} Parent component -{">"} Child component -{">"} Grandchild component)? It would be tedious to manage the state and passing the state variable and state function down via props.
                <br /><br />Context API is the solution to such problems. It allows you to create a global state that can be shared among any components in your app. It also avoids the need to prop drill a deeply nested component as well.
                <br /><br />Below is a summary comparison between useState and Context API.
            </Paragraph>

            <Table headers={headers} data={data} />
        </article>
    );
}

const headers = ['Aspect', 'useState', 'Context API'];

const data: TableRow[] = [
    { 'Aspect': 'Primary Purpose', 'useState': 'Manages local state in a component', 'Context API': 'Manages global/shared state across multiple component' },
    { 'Aspect': 'Use Case', 'useState': 'Best for simple, isolated state within a component', 'Context API': 'Best for managing global state/prevent nested prop drilling' },
    { 'Aspect': 'Performance', 'useState': 'Can cause re-renders only in the components using it', 'Context API': 'Can cause unnecessary re-renders in multiple consumers unless implementation is optimised' },
    { 'Aspect': 'Common Use Cases', 'useState': 'Managing form inputs, toggling values, timers', 'Context API': 'Managing authentication state, theme, eCommerce cart, app-wide data' },
];