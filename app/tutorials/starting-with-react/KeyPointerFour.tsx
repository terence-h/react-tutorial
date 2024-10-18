import CodeBlock from "@/app/components/CodeBlock";
import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function KeyPointerFour() {
    return (
        <article id="key-pointer-four">
            <Header level={2}>4. Think About Reusability</Header>
            <Paragraph marginBottom={0}>As mentioned earlier in key point 1, certain codes are repeated even though they behave similar.</Paragraph>
            <CodeBlock code={htmlCode} language={"html"} />
            <Paragraph marginTop={5} marginBottom={0}>In React, we can pass the props as mentioned earlier and create different variants of the same component. Run the code and see what happens!</Paragraph>
            <CodeEditor languages={['jsx']} initialCode={reactCode} readOnly={true} />
        </article>
    );
}

const htmlCode = `<button onclick="submitForm()">Submit</button>
<button onclick="cancelForm()">Cancel</button>`;

const reactCode = `// Instead of props parameter, you can destructure props directly by adding curly braces
function Button({ label, onClick }) {
    // Use the destructured props into the HTML element
    return <button onClick={onClick} className='bg-blue-500 rounded-md p-2'>{label}</button>;
}

export default function App() {

    // Open your console (f12), it print out Hello.
    function submitForm() {
      console.log('Hello');
    }
  
    // Open your console (f12), it print out World.
    function cancelForm() {
      console.log('World');
    }
    
    return (
        <div className="flex gap-5">
            {/* Passing "label" and "onClick" props into the Button component */}
            <Button label="Submit" onClick={submitForm} />
            <Button label="Cancel" onClick={cancelForm} />
        </div>
    );
}`;