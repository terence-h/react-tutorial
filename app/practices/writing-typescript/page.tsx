import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";
import Section from "../../components/Section";
import Pagination from "@/app/components/Pagination";

export default function Page() {
    return (
        <Section id="writing-typescript">
            <Header>Practice: Writing TypeScript</Header>

            <InformationText>The code changes in the practice sections are saved into your browser locally so you do not have to finish in one go!
                <br /><br />If you are an offline editor like VSCode, the file extension for TypeScript is .ts
            </InformationText>
            <Paragraph className="mt-5">You are given 5 JavaScript code snippets and asked to convert them to TypeScript.</Paragraph>

            <Header level={2}>Challenge 1</Header>
            <Paragraph>Convert the following JavaScript function to TypeScript by specifying the proper type for the parameter and return value.</Paragraph>
            <CodeEditor id={1} initialCode={challengeOneInitial} languages={['typescript']} saveKey="intro-ts-c1" />

            <Header level={2}>Challenge 2</Header>
            <Paragraph>Convert the following JavaScript object declaration to TypeScript by defining an interface for the object and typing the variable.</Paragraph>
            <CodeEditor id={2} initialCode={challengeTwoInitial} languages={['typescript']} saveKey="intro-ts-c2" />

            <Header level={2}>Challenge 3</Header>
            <Paragraph>Convert the following JavaScript array declaration to TypeScript by specifying the array type.</Paragraph>
            <CodeEditor id={3} initialCode={challengeThreeInitial} languages={['typescript']} saveKey="intro-ts-c3" />

            <Header level={2}>Challenge 4</Header>
            <Paragraph>Convert the following JavaScript function to TypeScript by specifying that the function returns a Promise which resolves to a string. Hint: This was mentioned in the first link (video) in the TypeScript references. Feel free to use Google or ChatGPT!</Paragraph>
            <CodeEditor id={4} initialCode={challengeFourInitial} languages={['typescript']} saveKey="intro-ts-c4" />

            <Header level={2}>Challenge 5</Header>
            <Paragraph>Convert the following JavaScript function to TypeScript by typing the parameters and making the second parameter optional. Hint: Ask ChatGPT or Google if you can&apos;t figure it out.</Paragraph>
            <CodeEditor id={5} initialCode={challengeFiveInitial} languages={['typescript']} saveKey="intro-ts-c5" />

            <Pagination
                previousLabel="Introduction to TypeScript"
                previousPath="/tutorials/introduction-to-typescript"
                nextPath="/tutorials/setting-up"
                nextLabel="Setting Up Tools and React Project Environments" />
        </Section>
    );
}

const challengeOneInitial = `// The code will still execute by default, but your changes should not change the output
function greet(name) {
    return 'Hello, ' + name + '!';
}

console.log(greet('John'));`;

const challengeTwoInitial = `const person = {
    name: "John",
    age: 30
};

console.log(person.name);`;

const challengeThreeInitial = `const numbers = [1, 2, 3, 4, 5];
console.log(numbers);`;

const challengeFourInitial = `function fetchData() {
    return new Promise((resolve) => {
        console.log("Data fetched");
        resolve("Data fetched");
    });
}

fetchData();`;

const challengeFiveInitial = `function display(message, count) {
    if (count) {
        console.log(message.repeat(count));
    } else {
        console.log(message);
    }
}

display('hi ', 5);`;