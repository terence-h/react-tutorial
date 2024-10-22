import CodeBlock from "@/app/components/CodeBlock";
import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function Handling404Pages() {
    return (
        <article id="handling-404-pages">
            <Header>Handling 404 Pages</Header>

            <Paragraph>To handle invalid routes, we can create a simple error 404 page first.</Paragraph>
            <CodeBlock code={errorPage} language={"jsx"} />

            <Paragraph className="mt-5">We can use the wildcard * to indicate that any routes that we did not define, is considered invalid.</Paragraph>
            <CodeBlock code={wildCardRoute} language={"jsx"} />

            <Paragraph className="mt-5">Once this is added, going to /about without parameters will show a 404 Not Found text instead of a blank page.</Paragraph>
        </article>
    );
}

const errorPage = `// src/pages/Error.jsx
export default function Error({ children }) {
  return <h1>{children}</h1>
}`;

const wildCardRoute = `// src/App.js
export default function App() {
...
  return (
    ...
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        {/* Any path that is not listed above, display a Not Found page */}
        <Route path="*" element={<Error>404 Not Found</Error>} />
      </Routes>
    ...
  );
}`;