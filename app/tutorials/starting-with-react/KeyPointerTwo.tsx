import CodeBlock from "@/app/components/CodeBlock";
import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function KeyPointerTwo() {
    return (
        <article id="key-pointer-two">
            <Header level={2}>2. Components &quot;Talk&quot; to Each Other with Props</Header>

            <Paragraph>In traditional HTML/JavaScript, you would use global variables or find elements by their ID to pass information.</Paragraph>
            <CodeBlock code={htmlCode} language={"html"} allowCopy={false} />
            
            <Paragraph className="mt-5">In React, we pass data called <span className="underline">&quot;props&quot;</span> to components, which then can be used in the component function itself. Run the code and see what happens!</Paragraph>
            <CodeEditor id={1} languages={['jsx']} initialCode={reactCode} readOnly={true} />
        </article>
    );
}

const htmlCode = `<button onclick="greet('Alice')">Greet Alice</button>
<button onclick="greet('Bob')">Greet Bob</button>

<script>
    function greet(name) {
        alert('Hello, ' + name);
    }
</script>`;

const reactCode = `// "props" here is an object that contains whatever you given in the Greeting component
function Greeting(props) {
    return <p>Hello, {props.name}!</p>;
}

export default function App() {
    return (
        <div>
            {/* Greeting component with the prop "name" */}
            <Greeting name="Alice" />
            {/* Greeting component with the prop "name" */}
            <Greeting name="Bob" />
        </div>
    );
}`;