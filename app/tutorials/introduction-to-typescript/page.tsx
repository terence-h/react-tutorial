import Section from "@/app/components/Section";
import TSAdvantagesPage from "./TSAdvantagesPage";
import TSKeyDifferencesPage from "./TSKeyDifferencesPage";
import Pagination from "@/app/components/Pagination";
import TSIntroduction from "./TSIntroduction";
import TSWhenToUse from "./TSWhenToUse";
import LearnMore from "@/app/components/LearnMore";
import TSPractice from "./TSPractice";
import Hyperlink from "@/app/components/Hyperlink";


export default function Page() {
    return (
        <Section id="introduction-to-typescript">
            <TSIntroduction />
            <TSKeyDifferencesPage />
            <TSAdvantagesPage />
            <TSWhenToUse />
            <LearnMore references={references}/>
            <TSPractice />
            <Pagination
                previousLabel="Introduction"
                previousPath="/tutorials/introduction"
                nextPath="/tutorials/setting-up"
                nextLabel="Setting Up Tools and React Project Environment" />
        </Section>
    );
}

const references = [
    {
        id: 1,
        label: (<Hyperlink href="https://www.youtube.com/watch?v=ahCwqrYpIuM">TypeScript – The Basics by Fireship</Hyperlink>)
    },
    {
        id: 2,
        label: (<Hyperlink href="https://www.typescriptlang.org/docs/handbook/2/basic-types.html">Official TypeScript Handbook (Basics Portion)</Hyperlink>)
    },
    {
        id: 3,
        label: (<Hyperlink href="https://basarat.gitbook.io/typescript">TypeScript Deep Dive by Basarat</Hyperlink>)
    },
];