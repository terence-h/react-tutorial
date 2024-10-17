import Section from "@/app/components/Section";
import Pagination from "@/app/components/Pagination";


export default function Page() {
    return (
        <Section id="setting-up">
            <Pagination
                previousLabel="Introduction to TypeScript"
                previousPath="/content/introduction-to-typescript"
                nextPath="/"
                nextLabel="..." />
        </Section>
    );
}