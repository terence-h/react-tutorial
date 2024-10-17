import Header from "./Header";
import NestedList, { ListItem } from "./NestedList";

interface LearnMoreProps {
    references: ListItem[];
}

export default function LearnMore({ references }: LearnMoreProps) {
    return (
        <>
            <Header level={2}>Learn More</Header>
            <NestedList items={references} />
        </>
    );
}