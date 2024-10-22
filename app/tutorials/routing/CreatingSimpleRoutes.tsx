import CodeBlock from "@/app/components/CodeBlock";
import Header from "@/app/components/Header";
import ImageContainer from "@/app/components/ImageContainer";
import Paragraph from "@/app/components/Paragraph";

import ProjectStructure from "@/public/tutorials/routing/project-structure.jpg";

export default function CreatingSimpleRoutes() {
    return (
        <article id="creating-simple-routes">
            <Header>Creating Simple Routes</Header>

            <Paragraph>To install the react-router-dom library, stop the server if you haven&apos;t done so and run this command to install the package:
                <br /><code>npm install react-router-dom</code>
            </Paragraph>

            <Paragraph>The project structure that we will be using will include a &quot;pages&quot; folder that will contain all the routes we have in the project.</Paragraph>
            <ImageContainer className="mt-5 mb-5 md:w-1/2" src={ProjectStructure} alt={"VSCode Project Structure"} />

            <Paragraph>In the root of the web app (typically App.js/Page.js/Index.js), we will wrap the component with the router. For this tutorial, we are using BrowserRouter.</Paragraph>
            <CodeBlock code={browserRouterWrapping} language={"jsx"} />

            <Paragraph className="mt-5">In React, {"<Link>"} replaces {"<a>"}. Using {"<Link>"} allows navigation between routes without reloading the page.</Paragraph>
            <CodeBlock code={linkRoute} language={"jsx"} />
        </article>
    );
}

const browserRouterWrapping = `// src/App.js
export default function App() {
  return (
    {/* BrowserRouter: Wrap the entire component to enable routing functionality */}
    <BrowserRouter>
      {/* Routes: Contains all the individual routes defined by the Route component */}
      <Routes>
        {/* Route: When the URL matches the defined path: Render the defined element */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
  
// src/pages/Home.jsx
// https://www.your-website.com/
export default function Home() {
  return <p>This is the home page</p>;
}
  
// src/pages/About.jsx
// https://www.your-website.com/about
export default function About() {
  return <p>This is the about page</p>;
}`;

const linkRoute = `// src/pages/Home.jsx
// https://www.your-website.com/
export default function Home() {
  return (
    <p>This is the home page</p>;
    // Click on this will route the web app to https://www.your-website.com/about
    <Link to="/about">About</Link>
  );
}`;