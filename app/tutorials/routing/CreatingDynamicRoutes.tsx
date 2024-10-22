import CodeBlock from "@/app/components/CodeBlock";
import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function CreatingDynamicRoutes() {
    return (
        <article id="creating-dynamic-routes">
            <Header>Creating Dynamic Routes</Header>

            <Paragraph>Not all pages are static and may require to use certain parameter (e.g., an item ID) to determine what item to show on the page while using the same route.
              <br /><br />We can indicate to React that the route takes in a parameter by appending &quot;:parameterName&quot; into the back of the route URL.
            </Paragraph>
            <CodeBlock code={parameterRoute} language={"jsx"} />

            <Paragraph className="mt-5">Next, we need to tell the page to retrieve the parameter of the route URL.
            </Paragraph>
            <CodeBlock code={parameterRouteComp} language={"jsx"} />

            <Paragraph className="mt-5">However, if you go into the /about page without any parameters, it displays a blank page. This should not be the case. We should routes that are invalid by nature or we deemed as invalid.</Paragraph>
        </article>
    );
}

const parameterRoute = `// https://www.your-website.com/about/100
<Route path="/about/:id" element={<About />} />`;

const parameterRouteComp = `import { useParams } from "react-router-dom";

// Fake data to demonstrate
const data = {
    "100": { name: "Alice" },
    "101": { name: "Bob" },
    "102": { name: "Charlie" }
}

export default function About() {
  // The destructured param must be the same name as the one indicated in the Route
  const { id } = useParams();

  // If the route is https://www.your-website.com/about/100, this will show Alice.
  return <p>{data[id].name}</p>;
}`;