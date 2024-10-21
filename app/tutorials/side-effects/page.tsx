import Pagination from "@/app/components/Pagination";
import Section from "@/app/components/Section";
// import LearnMore from "@/app/components/LearnMore";
// import Hyperlink from "@/app/components/Hyperlink";

export default function Page() {
    return (
        <Section id="side-effects">
            {/* <LearnMore references={references} /> */}
            <Pagination
                previousLabel="Practice: Rendering Conditionally and Dynamic Content"
                previousPath="/practices/rendering-conditionally-dynamic"
                nextPath="/"
                nextLabel="..." />
        </Section>
    );
}

// const references = [
//     {
//         id: 1,
//         label: (<Hyperlink href="https://react.dev/learn/conditional-rendering">Conditional Rendering - React.dev</Hyperlink>)
//     },
//     {
//         id: 2,
//         label: (<Hyperlink href="https://react.dev/learn/rendering-lists">Rendering Lists - React.dev</Hyperlink>)
//     },
//     {
//         id: 3,
//         label: (<Hyperlink href="https://www.freecodecamp.org/news/react-conditional-rendering/">React Conditional Rendering - freecodecamp.org</Hyperlink>)
//     },
// ];