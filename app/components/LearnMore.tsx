import Header from "./Header";
import NestedList, { ListItem } from "./NestedList";

interface LearnMoreProps {
    references: ListItem[];
}

export default function LearnMore({ references }: LearnMoreProps) {
    return (
        <article id="learn-more">
            <Header>Learn More</Header>
            <NestedList items={references} />
        </article>
    );
}