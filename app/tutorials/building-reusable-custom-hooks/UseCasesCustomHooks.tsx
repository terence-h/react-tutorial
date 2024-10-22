import Header from "@/app/components/Header";
import NestedList, { ListItem } from "@/app/components/NestedList";

export default function UseCasesCustomHooks() {
    return (
        <article id="use-cases">
            <Header>Use Cases of Custom Hooks</Header>
            <NestedList items={useCasesList} />
        </article>
    );
}

const useCasesList: ListItem[] = [
    {
        id: 1,
        label: <span><span className="font-bold">Data Fetching</span>: Reuse the logic for fetching data from an API across multiple components</span>
    },
    {
        id: 2,
        label: <span><span className="font-bold">Managing LocalStorage</span>: Reuse the logic for interacting with localStorage in multiple components</span>
    },
    {
        id: 3,
        label: <span><span className="font-bold">Handling Timers</span>: Create a reusable timer or interval logic using hooks like useEffect and useState</span>
    },
    {
        id: 4,
        label: <span><span className="font-bold">Event Listeners</span>: Create custom hooks to add and clean up event listeners (e.g., window resize, scrolling)</span>
    },
]