import Header from "@/app/components/Header";
import NestedList, { ListItem } from "@/app/components/NestedList";

export default function Prerequisites() {
    return (
        <article id="prerequisites">
            <Header>Pre-Requisites</Header>
            <NestedList items={data} />
        </article>
    );
}

const data: ListItem[] = [
    {
        id: 1,
        label: (<span>Basic understanding of HTML</span>),
    },
    {
        id: 2,
        label: (<span>Basic understanding of JavaScript and/or TypeScript</span>),
    },
    {
        id: 3,
        label: (<span>Basic understanding of CSS</span>),
    },
    {
        id: 4,
        label: (<span>Be sure to complete the challenges of each tutorial! It is necessary to do so to continue to the next sections.</span>),
    },
];