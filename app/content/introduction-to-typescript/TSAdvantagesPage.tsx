import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";
import ImageContainer from '@/app/components/ImageContainer';
import jsAdvStaticType1 from '../../../public/content/introduction-to-typescript/js-advantage-static-typing-1.jpg';
import tsAdvStaticType1 from '../../../public/content/introduction-to-typescript/ts-advantage-static-typing-1.jpg';
import jsAdvStaticTypeFunc1 from '../../../public/content/introduction-to-typescript/js-advantage-static-typing-func-1.jpg';
import tsAdvStaticTypeFunc1 from '../../../public/content/introduction-to-typescript/ts-advantage-static-typing-func-1.jpg';
import tsAdvInterface1 from '../../../public/content/introduction-to-typescript/ts-advantage-interface-1.jpg';
import tsAdvInterface2 from '../../../public/content/introduction-to-typescript/ts-advantage-interface-2.jpg';
import CodeBlock from "@/app/components/CodeBlock";
import tsAdvAutoCompletion1 from '../../../public/content/introduction-to-typescript/ts-advantage-autocompletion-1.jpg';
import Table, { TableRow } from "@/app/components/Table";
import Link from "next/link";
import NestedList from "@/app/components/NestedList";
import CodeEditor from "@/app/components/CodeEditor";

export default function TSAdvantagesPage() {
    return (
        <article id="ts-advantages">
            <Header>Advantages of TypeScript</Header>

            <Header level={2}>1. Static Typing, Type Inference, and Compile Time Error Detection</Header>
            <Paragraph>In TypeScript, you can define the type of a variable, function parameter, or function return value at compile time. This helps catch errors early before the code runs.</Paragraph>
            <Paragraph>Notice that in the TypeScript code, it highlights an error in red underline. TypeScript supports type inference. This means TypeScript recognises &quot;iAmANumber&quot; is of type number and throws an error when assigning a non-number to it during compile time.</Paragraph>
            <div className="mx-auto max-w-[90%] flex flex-col md:flex-row mb-10 gap-y-2 md:gap-y-0">
                <div className="md:hidden">JavaScript</div>
                <ImageContainer src={jsAdvStaticType1} className={`md:w-[45%] mx-auto`} alt='Code' />
                <div className="md:hidden">TypeScript</div>
                <ImageContainer src={tsAdvStaticType1} className={`md:w-[45%] mx-auto`} alt='Code' />
            </div>
            <Paragraph>Here&apos;s another example but with function parameters this time. Notice the &quot;: number&quot; and &quot;: string&quot; beside the parameters/variables? TypeScript supports static typing which allows you to assign a type. Similarly, the TypeScript version highlights an error in red underline. The Add function is expecting 2 number parameters but received 1 number and 1 string.</Paragraph>
            <div className="mx-auto max-w-[90%] flex flex-col md:flex-row gap-y-2 md:gap-y-0">
                <div className="md:hidden">JavaScript</div>
                <ImageContainer src={jsAdvStaticTypeFunc1} className={`md:w-[45%] mx-auto`} alt='Code' />
                <div className="md:hidden">TypeScript</div>
                <ImageContainer src={tsAdvStaticTypeFunc1} className={`md:w-[45%] mx-auto`} alt='Code' />
            </div>

            <Header level={2}>2. Interfaces and Advanced Autocompletion</Header>
            <Paragraph>Interfaces allows you to define the structure of an object. It introduces type safety and reusability. Since &quot;person&quot; is a type of &quot;Person&quot; interface, it is expected that &quot;name&quot; to be a string and age to be a &quot;number&quot;. If we were to give &quot;age&quot; a string value, the editor will throw an error indicating that it is expecting a number.</Paragraph>
            <div className="mx-auto max-w-[90%] flex flex-col md:flex-row mb-10 gap-y-2 md:gap-y-0">
                <ImageContainer src={tsAdvInterface1} className={`md:w-[45%] mx-auto`} alt='Code' />
                <ImageContainer src={tsAdvInterface2} className={`md:w-[45%] mx-auto`} alt='Code' />
            </div>
            <Paragraph>Another advantage of interface is to provide autocompletion. Assuming this is the JSON response you receive from your backend API.{<br />}Auto completion is much more powerful in TypeScript as shown below because &quot;persons&quot; is initialised as the array type of Person interface.</Paragraph>
            <div className="mx-auto max-w-[90%] flex flex-col md:flex-row mb-10 gap-y-2 md:gap-y-0">
                <CodeBlock className={`md:w-1/3 mx-auto`} code={tsAdvAutoCompletionCode} language={"json"} />
                <ImageContainer src={tsAdvAutoCompletion1} className={`md:w-[45%] mx-auto`} alt='Code' />
            </div>

            <Header level={2}>3. When to use JavaScript or TypeScript</Header>
            <Paragraph>This is only a general guideline/recommendation and not to be followed strictly.</Paragraph>
            <Table headers={headers} data={data} />

            <Header level={2}>Learn More</Header>
            <NestedList items={references} />

            <Header level={2}>Practice: Writing TypeScript</Header>
            <Paragraph>You are given 5 piece of JavaScript codes snippets and asked to convert to TypeScript.{<br />}Note: If you are an offline editor like VSCode, the file extension for TypeScript is .ts.</Paragraph>
            <Header level={3}>Challenge 1</Header>
            <Paragraph>Convert the following JavaScript function to TypeScript by specifying the proper type for the parameter and return value.</Paragraph>
            <CodeEditor initialCode={challengeOneInitial} languages={['typescript']} />
        </article>
    );
}

const tsAdvAutoCompletionCode = `[
    {
        "name": "Alice",
        "age": 22
    },
    {
        "name": "Bob",
        "age": 24
    },
    {
        "name": "Charlie",
        "age": 26
    }
]`;

const headers = ['Consideration', 'Use JavaScript', 'Use TypeScript'];

const data: TableRow[] = [
    { 'Consideration': 'Project Size', 'Use JavaScript': 'Small or simple projects', 'Use TypeScript': 'Large or complex projects' },
    { 'Consideration': 'Team Size', 'Use JavaScript': 'Small team or solo development', 'Use TypeScript': 'Large team with multiple developers' },
    { 'Consideration': 'Maintainability', 'Use JavaScript': 'Short-term/one-off project', 'Use TypeScript': 'Long-term maintainability' },
    { 'Consideration': 'Development Speed', 'Use JavaScript': 'Fast prototyping/MVPs', 'Use TypeScript': 'Long-term maintainability is more important' },
    { 'Consideration': 'Codebase Scale', 'Use JavaScript': 'Minimal or less structured', 'Use TypeScript': 'Highly structured and scalable' },
];

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

const challengeOneInitial = `// Note: The code will still execute by default, but your changes should not change the output
function greet(name) {
    return 'Hello, ' + name + '!';
}

console.log(greet('John'));`;