import Section from "@/app/components/Section";
import Pagination from "@/app/components/Pagination";
import DownloadTools from "./DownloadTools";
import SetupNVM from "./SetupNVM";
import CreateReactApp from "./CreateReactApp";

export default function Page() {
    return (
        <Section>
            <DownloadTools />
            <SetupNVM />
            <CreateReactApp />
            <Pagination
                previousLabel="Practice: Writing TypeScript"
                previousPath="/practices/writing-typescript"
                nextPath="/tutorials/starting-with-react"
                nextLabel="Starting with React" />
        </Section>
    );
}