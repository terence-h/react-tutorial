import CodeBlock from "@/app/components/CodeBlock";
import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function KeyPointerFive() {
    return (
        <article id="key-pointer-five">
            <Header level={2}>5. Let React Handle the UI Updates</Header>
            <Paragraph marginBottom={0}>In traditional HTML/JavaScript, you have to handle the updating the UI yourself especially when working with dynamic data.</Paragraph>
            <CodeBlock code={htmlCode} language={"html"} />
            <Paragraph marginTop={5} marginBottom={0}>As mentioned earlier in key point 3, we describe what the UI will look like and let React update the UI. Run the code and see what happens!</Paragraph>
            <CodeEditor languages={['jsx']} initialCode={reactCode} readOnly={true} />
        </article>
    );
}

const htmlCode = `<p id="status">Not Clicked</p>
<button onclick="updateStatus()">Click Me</button>

<script>
    function updateStatus() {
        document.getElementById('status').innerText = 'Clicked';
    }
</script>`;

const reactCode = `import { useState } from 'react';

export default function App() {
    // Simple state to determined if the button is clicked
    const [clicked, setClicked] = useState(false);

    return (
        <div>
            {/* Render text based on the current state value */}
            <p>{clicked ? 'Clicked' : 'Not Clicked'}</p>
            <button onClick={() => setClicked(true)} className='bg-blue-500 rounded-md p-2'>Click Me</button>
        </div>
    );
}`;