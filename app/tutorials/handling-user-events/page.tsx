import Pagination from "@/app/components/Pagination";
import Section from "@/app/components/Section";
import AddingOnClick from "./AddingOnClick";

export default function Page() {
    return (
        <Section id="handling-user-events">
            <AddingOnClick />
            {/* <LearnMore references={references} /> */}
            <Pagination
                previousLabel="Practice: Building Functional Components"
                previousPath="/practices/building-functional-components"
                nextPath="/tutorials/managing-states"
                nextLabel="Managing States with useState" />
        </Section>
    );
}