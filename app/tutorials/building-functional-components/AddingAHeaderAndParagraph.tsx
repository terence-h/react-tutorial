import CodeBlock from "@/app/components/CodeBlock";
import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function AddingAHeaderAndParagraph() {
    return (
        <article id="adding-header-paragraph">
            <Header>Adding a Header and Paragraph</Header>
            <Paragraph className="mb-0">Typically, the React root of the app starts in App.js and HTML codes are directly written into the JSX/TSX file as shown below.
                <br />All 3 options are acceptable and it&apos;s mostly preference on how you want to your React component.
            </Paragraph>
            <CodeBlock code={reactAppDefaultCode} language={"jsx"} />
            <Paragraph className="mt-5 mb-0">As mentioned earlier, we directly write HTML code into JavaScript in React. Give it a shot and write your first HTML directly in JavaScript!
                <br />Note: You can Toggle between JSX (JavaScript) or TSX (TypeScript). You can also change the theme!
            </Paragraph>
            <CodeEditor id={1} initialCode={reactWriteHeaderCode} languages={["jsx", "tsx"]} />
        </article>
    );
}

const reactAppDefaultCode = `export default function App() {
    return ({/* Insert your HTML element here */});
}

// OR

function App() {
    return ({/* Insert your HTML element here */});
}
export default App;

// OR

const App = () => {
    return ({/* Insert your HTML element here */});
}
export default App;`

const reactWriteHeaderCode = `export default function App() {
  return (
    // Insert your HTML element below. Just like how you would do it in HTML.
    
  );
}`