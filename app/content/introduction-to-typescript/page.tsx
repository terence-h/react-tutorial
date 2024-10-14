import Section from "@/app/components/Section";
import TSAdvantagesPage from "./TSAdvantagesPage";
import TSKeyDifferencesPage from "./TSKeyDifferencesPage";


export default function Page() {
    return (
        <Section id="introduction-to-typescript">
            <TSKeyDifferencesPage />
            <TSAdvantagesPage />
        </Section>
    );
}