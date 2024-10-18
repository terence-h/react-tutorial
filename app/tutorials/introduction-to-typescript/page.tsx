import Section from "@/app/components/Section";
import TSAdvantagesPage from "./TSAdvantagesPage";
import TSKeyDifferencesPage from "./TSKeyDifferencesPage";
import Pagination from "@/app/components/Pagination";
import TSIntroduction from "./TSIntroduction";
import TSWhenToUse from "./TSWhenToUse";
import LearnMore from "@/app/components/LearnMore";
import Link from "next/link";
import TSPractice from "./TSPractice";


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
                previousPath="/content/introduction"
                nextPath="/content/setting-up"
                nextLabel="Setting Up Tools and React Project Environment" />
        </Section>
    );
}

const references = [
    {
        id: 1,
        label: (<Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.youtube.com/watch?v=ahCwqrYpIuM">TypeScript – The Basics by Fireship</Link>)
    },
    {
        id: 2,
        label: (<Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.typescriptlang.org/docs/handbook/2/basic-types.html">Official TypeScript Handbook (Basics Portion)</Link>)
    },
    {
        id: 3,
        label: (<Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://basarat.gitbook.io/typescript">TypeScript Deep Dive by Basarat</Link>)
    },
];