import CodeBlock from "@/app/components/CodeBlock";
import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import ImageContainer from "@/app/components/ImageContainer";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";
import TypeScriptHoverType from "@/public/tutorials/building-functional-components/typescript-hover-type.jpg";
import DoubleCurlyBraces from "@/public/tutorials/building-functional-components/double-curly-braces.jpg";

export default function PassingProps() {
    return (
        <article id="passing-props">
            <Header>Passing Props to Components</Header>

            <Paragraph>Passing props (or prop drilling) is one of the key features in React you will use very often during development.
                <br /><br />We will start with the Header component adding some styles and changing how the text is displayed so it can be changed when reusing the component.
            </Paragraph>
            <CodeEditor id={1} initialCode={headerComponentProps} languages={["jsx", "tsx"]} />

            <div className="w-full flex justify-center mt-5"><Paragraph className="font-extrabold">--- TypeScript only portion starts here ---</Paragraph></div>
            <InformationText className="mt-5 mb-5">If you are using TypeScript in React, you might get a warning: Parameter &apos;props&apos; implicitly has an &apos;any&apos; type.
                <br /><br />Remember that TypeScript wants properties to be inferred and preferably not using the &quot;any&quot; type as it opens to potential bugs caused by human error, especially in larger projects.
                <br /><br />If you are unsure what type to use, you can hover over the &quot;style&quot; in the {`<h1>`} element in your VSCode editor and it will indicate what type it is expecting.</InformationText>
            <CodeBlock code={typeScriptWarning} language={"tsx"} />
            <ImageContainer src={TypeScriptHoverType} className="mt-5 w-2/3 md:1/2" alt="TypeScript hover type" />
            <div className="w-full flex justify-center mb-5"><Paragraph className="font-extrabold">--- TypeScript only portion ends here ---</Paragraph></div>

            <Paragraph>Wait. Why are there 2 curly braces in the style this time?!
                <br /><br />CSS styles are like objects. Just like in JavaScript, you create objects using curly braces. <span className="underline">The outer curly brace is used in React so we can write JavaScript code in it. The inner curly brace is just a JavaScript object just like how you create a JavaScript object in plain JavaScript</span>.
                <br /><br />You can even verify this! Go to your web page (or the built-in editor output) and right click the header text and Inspect Element. Do you notice the curly braces?
            </Paragraph>
            <ImageContainer src={DoubleCurlyBraces} className="mt-5 w-2/3 md:1/2" alt="Double curly brace in React" />

            <Paragraph className="mt-5">Now that we have successfully changed the Header component so that you can create different styling of the Header component, let&apos;s change the hardcoded text so it can be different for every Header.
                <br /><br />In both the Header and Button component, simply replace the text with &quot;props.children&quot;. Try adding more Header components and Button components with different styling and text!
            </Paragraph>
            <CodeEditor id={2} initialCode={propsChildren} languages={["jsx", "tsx"]} />
            
            <InformationText className="mt-5 mb-5">Do you notice that we have to type props.xyz every time we want to reference a prop? Isn&apos;t it quite repetitive?
                <br /><br />If you have a decent amount of experience in JavaScript, you may know that you can destructure objects. You can do so in React too!
            </InformationText>
            <CodeBlock code={destructureProps} language={"jsx"} />
        </article>
    );
}

const headerComponentProps = `// Add in a props parameter and provide the h1 element style.
function Header(props) {
  return <h1 style={props.style}>Header</h1>;
}

function Button() {
  return <button>Button</button>;
}

export default function App() {
  return (
    <>
      {/* Add in any CSS color! Not sure what to use? Here's a color: #f34587
      NOTE: The code editor supports Tailwind CSS.
      If you are familiar with it, feel free to use it in the className prop instead of style prop. */}
      <Header style={{ backgroundColor: ""}} />
      <Button />
    </>
  );
}`;

const typeScriptWarning = `// Ignore this portion and the image below if you are using JavaScript
// Create an interface in TypeScript to indicate the typing of each property
interface HeaderProps extends PropsWithChildren {
    style?: CSSProperties | undefined;
}

// Indicate the type of props
function Header(props: HeaderProps) {
    return <h1 style={props.style}>Welcome to my page</h1>;
}`;

const propsChildren = `function Header(props) {
  // "children" is a built into React props. It allows you to indicate whatever you want inside it.
  // Typically, it is used to represent the text of the component to display.
  return <h1 style={props.style}>{props.children}</h1>;
}

function Button(props) {
  return <button>{props.children}</button>;
}

export default function App() {
  return (
    <>
      {/* Since you are using the children prop now, you should be using this enclosing tag instead. */}
      {/* Try adding more headers and buttons! */}
      <Header style={{ color: "#f34587"}}>Welcome to my page</Header>
      <Button>Click me!</Button>
    </>
  );
}`;

const destructureProps = `// Destructure the props object by using curly braces
function Header({ style, children }) {
    return <h1 style={style}>{children}</h1>;
}`;