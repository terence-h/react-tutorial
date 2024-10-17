import CodeBlock from "@/app/components/CodeBlock";
import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function TSAdvantagesPage() {
    return (
        <article id="ts-advantages">
            <Header>Advantages of TypeScript</Header>
            <Header level={2}>1. Static Typing, Type Inference, and Compile Time Error Detection</Header>
            <Paragraph>In TypeScript, you can define the type of a variable, function parameter, or function return value at compile time. This helps catch errors early before the code runs.</Paragraph>
            <CodeBlock code={"console.log('abc')"} language={"javascript"} />
        </article>
    );
}