import Section from "@/app/components/Section";
import Pagination from "@/app/components/Pagination";
// import LearnMore from "@/app/components/LearnMore";
// import Hyperlink from "@/app/components/Hyperlink";

export default function Page() {
    return (
        <Section>
            {/* <LearnMore references={references} /> */}
            <Pagination
                previousLabel="Routing for Apps with Multiple Pages"
                previousPath="/tutorials/routing"
                nextPath="/case-study"
                nextLabel="Case Study" />
        </Section>
    );
}

// const references = [
//     {
//         id: 1,
//         label: (<Hyperlink href="https://react.dev/learn/reusing-logic-with-custom-hooks">Reusing Logic with Custom Hooks - React.dev</Hyperlink>)
//     },
// ];