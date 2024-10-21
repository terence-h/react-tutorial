import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import ImageContainer from "@/app/components/ImageContainer";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";
import ProjectStructureImg from "@/public/tutorials/building-functional-components/project-structure.jpg"

export default function BreakingSeparateComponents() {
    return (
        <article id="breaking-separate-components">
            <Header>Breaking into Separate Components</Header>

            <Paragraph>If you remember in the Starting React section key point 1, we should break things into their own components especially if they are meant to be reusable.
                <br /><br />For reference, you can refer to the image below to see the basic React project structure.
            </Paragraph>
            <InformationText className="mb-5">If you are not using a local React project and using the built in Code Editor of this web app, <span className="underline">assume any functions outside of the &quot;App&quot; component is a separate component/file.</span></InformationText>
            <ImageContainer src={ProjectStructureImg} className="w-2/3 md:w-1/2" alt={"React Project Structure"} />
            
            <Paragraph className="mt-5">To start, let&apos;s create a &quot;components&quot; folder inside the src folder and create 2 components named &quot;Header.jsx&quot; and &quot;Button.jsx&quot; (if your are using TypeScript, use .tsx)
                <br /><br />Move the code to the respective component as well.
            </Paragraph>
            <CodeEditor id={1} initialCode={separateHeaderButtonComponentCode} languages={["jsx", "tsx"]} />
            
            <Paragraph className="mt-5">However, if you were to add more Header and Button into your App file, the text doesn&apos;t change. We will do that in the next section.</Paragraph>
        </article>
    );
}

const separateHeaderButtonComponentCode = `// Assume that anything outside of function App are separate components/files.
// The only difference you would have to do in an editor would be to export the function and import it.
function Header() {
  return <h1>Header</h1>;
}

function Button() {
  return <button>Button</button>;
}

export default function App() {
  return (
    <>
      {/* Remember to add back in the component as well! Hint: This has been showcased in "Starting with React" key point 1! */}
      
    </>
  );
}`;