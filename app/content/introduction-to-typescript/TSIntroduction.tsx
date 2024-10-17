import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function TSIntroduction() {
    return (
        <article id="introduction">
            <Header>Introduction to TypeScript</Header>
            <Paragraph>It&apos;s not required to go through the TypeScript section as we are mainly using JavaScript in the tutorial. However, it is still good knowledge to do so as React in TypeScript is more popular in bigger/complex projects.</Paragraph>
            <Paragraph>TypeScript is a superset of JavaScript; this means that any valid JavaScript code is also valid TypeScript code. What TypeScript offers over JavaScript are better error checking, maintainability and productivity in larger/team projects which we will dive deeper later on.</Paragraph>
        </article>
    );
}