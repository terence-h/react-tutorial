import Pagination from "@/app/components/Pagination";
import Section from "@/app/components/Section";

export default function Page() {
    return (
        <Section id="starting-with-react">
            <Pagination
                previousLabel="Setting Up Tools and React Project Environment"
                previousPath="/tutorials/setting-up"
                nextPath="/"
                nextLabel="..." />
        </Section>
    );
}