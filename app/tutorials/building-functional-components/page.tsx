import Section from "@/app/components/Section";
import Pagination from "@/app/components/Pagination";
import AddingAHeaderAndParagraph from "./AddingAHeaderAndParagraph";

export default function Page() {
    return (
        <Section id="building-functional-components">
            <AddingAHeaderAndParagraph />
            <Pagination
                previousLabel="Starting with React"
                previousPath="/tutorials/starting-with-react"
                nextPath="/tutorials/handling-user-events"
                nextLabel="Handling User Events" />
        </Section>
    );
}