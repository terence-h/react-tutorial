import CodeBlock from "@/app/components/CodeBlock";
import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function KeyPointerThree() {
    return (
        <article id="key-pointer-three">
            <Header level={2}>3. Managing State for Dynamic Data</Header>

            <Paragraph>In traditional HTML/JavaScript, managing dynamic data like a counter requires manual updating the DOM element.</Paragraph>
            <CodeBlock code={htmlCode} language={"html"} allowCopy={false} />
            
            <Paragraph className="mt-5">In React, we use <span className="underline">states</span> to track dynamic data. <span className="underline">We do not directly manipulate the DOM in most cases</span> but we &quot;tell&quot; React to update the DOM when we make changes to a state. Run the code and see what happens!</Paragraph>
            <CodeEditor id={1} languages={['jsx']} initialCode={reactCode} readOnly={true} />
        </article>
    );
}

const htmlCode = `<p id="counter">Count: 0</p>
<button onclick="increment()">Increment</button>

<script>
    let count = 0;
    function increment() {
        count++;
        document.getElementById('counter').innerText = 'Count: ' + count;
    }
</script>`;

const reactCode = `import { useState } from 'react';

export default function App() {
    // This is a basic state that stores the number of times the button has been clicked
    // It includes a "setCount" state function that lets you update the count.
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>

            {/* When the button is clicked, count will increment by 1
            Since the state has changed, React will automatically rerender the DOM */}
            <button onClick={() => setCount(count + 1)} className='bg-blue-500 rounded-md p-2'>Increment</button>
        </div>
    );
}`;