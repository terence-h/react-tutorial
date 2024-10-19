import CodeBlock from "@/app/components/CodeBlock";
import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function KeyPointerOne() {
    return (
        <article id="key-pointer-one">
            <Header level={2}>1. Break Everything Down into Components</Header>
            <Paragraph>In traditional HTML/JavaScript, you typically write large blocks of HTML for different parts of your webpage. Some codes are repeated even if the behaviour is the same as shown below.</Paragraph>
            <CodeBlock code={htmlCode} language={"html"} />
            <Paragraph className="mt-5">In React, we break down these elements into <span className="underline">reusable components</span>. It&apos;s also highly recommended to adhere to <span className="underline">&quot;1 component, 1 responsibility&quot;</span>. Run the code and see what happens!</Paragraph>
            <CodeEditor id={1} languages={['jsx']} initialCode={reactCode} readOnly={true} />
        </article>
    );
}

const htmlCode = `<button>Click Me</button>
<button>Click Me</button>
<button>Click Me</button>`;

const reactCode = `function Button() {
    return <button className='bg-blue-500 rounded-md p-2'>Click Me</button>;
}

export default function App() {
    return (
        // Note: The editor supports Tailwind CSS!
        <div className='flex flex-row gap-5'>
            {/* Reusing the Button component multiple times */}
            <Button />
            <Button />
            <Button />
        </div>
    );
}`;