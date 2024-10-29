import Header from "@/app/components/Header";
import NestedList, { ListItem } from "@/app/components/NestedList";
import Paragraph from "@/app/components/Paragraph";

export default function LimitationsContext() {
    return (
        <article id="limitations">
            <Header>Limitations of Context API</Header>
            <Paragraph>While the Context API is great for global state management, there are some cases where it might not be ideal:</Paragraph>
            <NestedList items={limitations} />
        </article>
    );
}

const limitations: ListItem[] = [
    {
        id: 1,
        label: <span><span className="font-bold">Frequent updates</span>: Since context triggers a re-render on every context change, components that consume it will re-render whenever the context value changes. This might cause performance issues for large applications with frequent updates.</span>
    },
    {
        id: 2,
        label: <span><span className="font-bold">Complex State</span>: If the state is highly complex, it might be beneficial to use a state management library like Redux, which offers more features for state handling and debugging.</span>
    }
]