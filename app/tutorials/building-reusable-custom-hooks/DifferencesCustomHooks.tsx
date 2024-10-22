import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";
import Table, { TableRow } from "@/app/components/Table";

export default function DifferencesCustomHooks() {
    return (
        <article id="differences-hooks-context">
            <Header>Differences between Context API and Custom Hooks</Header>
            <Paragraph>You might ask &quot;isn&apos;t this similar to Context API?&quot; Yes! They share similarities but remember that Context API is more suited for global states.
                <br /><br />Below is a table showing some of the key differences between the two of them.
            </Paragraph>

            <Table headers={headers} data={data} />
        </article>
    );
}

const headers = ['Aspect', 'Context API', 'Custom Hooks'];

const data: TableRow[] = [
    {
        'Aspect': 'Purpose',
        'Context API': 'Provides a way to share state and data across multiple components without passing props through every level', 'Custom Hooks':
        'Encapsulates reusable logic (often related to state and effects) to be shared between components'
    },
    {
        'Aspect': 'State Management',
        'Context API': 'Used for global state management that is shared across various components in the tree',
        'Custom Hooks': 'Can manage local or shared state, but state sharing is not automatic; can work with Context API to manage global state'
    },
    {
        'Aspect': 'State Sharing',
        'Context API': 'Automatically shares a singular state with all components under the provider',
        'Custom Hooks': 'Does not inherently share state across components but can help structure reusable logic across components'
    },
    {
        'Aspect': 'Access',
        'Context API': 'Components wrapped in the provider can consume the context directly using useContext or Context.Consumer.',
        'Custom Hooks': 'Only components that explicitly call the custom hook can access the logic it provides.'
    },
];