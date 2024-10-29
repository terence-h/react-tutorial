import CodeBlock from "@/app/components/CodeBlock";
import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function CreatingVariants() {
    return (
        <article id="creating-variants">
            <Header>Creating Variants of a Component</Header>
            
            <Paragraph>You can also create another variant of a component. Using the Header component as an example, create a new component named &quot;HeaderWithRule&quot; in your component folder.
                <br /><br />Instead of creating a {`<h1>`} element again, we can use the existing Header component and add a horizontal rule below it as shown below.
            </Paragraph>
            <CodeBlock code={creatingVariants} language="jsx" />
        </article>
    );
}

const creatingVariants = `import Header from "./Header";

export default function HeaderWithRule({ style, children }) {
  return (
    <>
      <Header style={style}>{children}</Header>
      <hr />
    </>
  )
}`;