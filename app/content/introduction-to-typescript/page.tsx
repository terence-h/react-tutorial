import TSAdvantagesPage from "./TSAdvantagesPage";
import TSKeyDifferencesPage from "./TSKeyDifferencesPage";


export default function Page() {
    return (
        <section id="introduction-to-typescript">
            <TSKeyDifferencesPage />
            <TSAdvantagesPage />
        </section>
    );
}