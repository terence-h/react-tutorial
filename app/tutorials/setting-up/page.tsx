import Section from "@/app/components/Section";
import Pagination from "@/app/components/Pagination";
import DownloadTools from "./DownloadTools";
import SetupNVM from "./SetupNVM";
import CreateReactApp from "./CreateReactApp";


export default function Page() {
    return (
        <Section id="setting-up">
            <DownloadTools />
            <SetupNVM />
            <CreateReactApp />
            <Pagination
                previousLabel="Introduction to TypeScript"
                previousPath="/tutorials/introduction-to-typescript"
                nextPath="/tutorials/starting-with-react"
                nextLabel="Starting with React" />
        </Section>
    );
}