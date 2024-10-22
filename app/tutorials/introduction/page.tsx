import Section from "@/app/components/Section";
import LearningOutcomes from "./LearningOutcomes";
import LearningPlan from "./LearningPlan";
import Prerequisites from "./Prerequisites";
import Pagination from "@/app/components/Pagination";

export default function Page() {
    return (
        <Section>
            <LearningOutcomes />
            <LearningPlan />
            <Prerequisites />
            <Pagination
                previousLabel="Home"
                previousPath="/"
                nextPath="/tutorials/introduction-to-typescript"
                nextLabel="Introduction to TypeScript" />
        </Section>
    );
}