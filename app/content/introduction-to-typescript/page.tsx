import Section from "@/app/components/Section";
import TSAdvantagesPage from "./TSAdvantagesPage";
import TSKeyDifferencesPage from "./TSKeyDifferencesPage";
import Pagination from "@/app/components/Pagination";
import TSIntroduction from "./TSIntroduction";


export default function Page() {
    return (
        <Section id="introduction-to-typescript">
            <TSIntroduction />
            <TSKeyDifferencesPage />
            <TSAdvantagesPage /> 
            <Pagination
                previousLabel="Introduction"
                previousPath="/content/introduction"
                nextPath="/content/setting-up"
                nextLabel="Setting Up Tools and React Project Environment" />
        </Section>
    );
}