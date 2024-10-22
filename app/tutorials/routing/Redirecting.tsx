import CodeBlock from "@/app/components/CodeBlock";
import Header from "@/app/components/Header";
import ImageContainer from "@/app/components/ImageContainer";
import Paragraph from "@/app/components/Paragraph";
import MissingData from "@/public/tutorials/routing/missing-data-route.jpg";

export default function Redirecting() {
    return (
        <article id="redirecting">
            <Header>Redirecting User to Another Page</Header>

            <Paragraph>Using the fake data used previously as an example, we only have data from 100 to 102. What happens if the user went to 99 or 103? It is a valid route but the data does not exist.</Paragraph>
            <CodeBlock code={parameterRouteComp} language={"jsx"} />

            <Paragraph className="mt-5">An error would occur indicating that data[id].name is undefined.</Paragraph>
            <ImageContainer src={MissingData} alt={"Console Log error"} />

            <Paragraph className="mt-5">In this case, we can redirect the user if data[id] is undefined by using the useNavigate hook in react-router-dom</Paragraph>
            <CodeBlock code={useNavigate} language="jsx" />

            <Paragraph className="mt-5">We can also pass values into the page we are navigating to show different error messages.</Paragraph>
            <CodeBlock code={passValue} language="jsx" />
        </article>
    );
}

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

const useNavigate = `import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Fake data to demonstrate
const data = {
    "100": { name: "Alice" },
    "101": { name: "Bob" },
    "102": { name: "Charlie" }
}

export default function About() {
  // The destructured param must be the same name as the one indicated in the Route
  const { id } = useParams();

  const navigate = useNavigate();

  // useNavigate is only available when the page has rendered
  useEffect(() => {
    if (!data[id]) {
      // The route doesn't matter as long its an invalid route, it would show the 404 Not Found page
      navigate('/namenotfound');
    }
  }, [id, navigate]) // We only want to trigger this when id and navigate have been set.

  // Don't return any HTML content if the data element doesn't exist.
  if (!data[id])
    return <></>
  
  return <p>{data[id].name}</p>;
}`;

const passValue = `import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Fake data to demonstrate
const data = {
    "100": { name: "Alice" },
    "101": { name: "Bob" },
    "102": { name: "Charlie" }
}

export default function About() {
  ...
  useEffect(() => {
    if (!data[id]) {
      // The route doesn't matter as long its an invalid route, it would show the 404 Not Found page
      navigate('/namenotfound', {
        // Passing state/data to the new page
        state: { errorMessage: "User " + id + " does not exist!" }
      });
    }
  }, [id, navigate]) // We only want to trigger this when id and navigate have been set.
  ...
}

// Modify the Error page
// src/pages/Error.jsx
import { useLocation } from "react-router-dom";

export default function Error({ children }) {
  // useLocation returns the current location object, which also contains the state that we added in About page
  const location = useLocation();
  const { errorMessage } = location.state || {};
  
  // If errorMessage exist, display it, if not, display the children message set instead.
  return <h1>{errorMessage || children}</h1>
}`;