import Section from "@/app/components/Section";
import Pagination from "@/app/components/Pagination";

export default function Page() {
    return (
        <Section>
            <Pagination
                previousLabel="Error Boundaries"
                previousPath="/tutorials/error-boundaries"
                nextPath="/whats-next"
                nextLabel="What's Next?" />
        </Section>
    );
}