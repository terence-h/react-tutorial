import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function ImplementationsUseEffect() {
    return (
        <article id="implementations">
            <Header>Implmentations of useEffect</Header>

            <Header level={2}>Running useEffect every render</Header>
            <Paragraph>The effect will run every time the App component renders. Be careful when using this implementation if you are setting state as this will set your state every time your component render.</Paragraph>
            <CodeEditor id={1} initialCode={everyRender} languages={["jsx", "tsx"]} />

            <Header level={2}>Running useEffect once</Header>
            <Paragraph>The effect will only run once when the component mounts and will not run again unless the component is unmounted and re-mounted.</Paragraph>
            <CodeEditor id={2} initialCode={onMounted} languages={["jsx", "tsx"]} />

            <Header level={2}>Running useEffect on Dependency Changes</Header>
            <Paragraph>Every time the &quot;count&quot; state changes, the effect will trigger.</Paragraph>
            <CodeEditor id={3} initialCode={onDependenciesChange} languages={["jsx", "tsx"]} />

            <Header level={2}>Subscribing and Cleaning Up Event Listeners</Header>
            <Paragraph>An event listener is added for resize when the component mounts.
                <br /><br />If you need to interact with things outside of React such as window event listeners, or DOM changes the chances are you will need to use useEffect.
                <br />When the component is about to unmount, the cleanup function removes the event listener to prevent memory leaks.
                <br />The component re-renders when the browser window is resized, updating the window width in the state.
            </Paragraph>
            <CodeEditor id={4} initialCode={eventListeners} languages={["jsx", "tsx"]} />

            <Header level={2}>Fetching Data from External Sources</Header>
            <Paragraph>The useEffect only runs the API call if userId is not null, preventing unnecessary requests when there&apos;s no valid userId. The component displays either the fetched user data or a placeholder message when no user is selected.</Paragraph>
            <CodeEditor id={5} initialCode={fetchingData} languages={["jsx", "tsx"]} />
        </article>
    );
}

const everyRender = `import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Rendered');
  }); // Parameter for dependencies left out, this will run everytime the component rerenders

  return (
    <>
      <p>Click the button to trigger a rerender. Open your browser console (F12) and see what happens.</p>
      <button className="bg-blue-500 p-2"onClick={() => setCount(count + 1)}>Rerender triggered: {count}</button>
    </>
  );
}`;

const onMounted = `import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Component mounted');
  }, []); // Empty array of dependencies ensures this runs only when the component is mounted

  return (
    <>
      <p>Click the button to trigger a rerender. Open your browser console (F12) and see what happens.</p>
      <button className="bg-blue-500 p-2"onClick={() => setCount(count + 1)}>Rerender triggered: {count}</button>
    </>
  );
}`;

const onDependenciesChange = `import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("State value 'count' has been updated.");
  }, [count]); // Empty array of dependencies ensures this runs only when the component is mounted

  return (
    <>
      <p>Click the button to trigger a rerender. Open your browser console (F12) and see what happens.</p>
      <button className="bg-blue-500 p-2"onClick={() => setCount(count + 1)}>Rerender triggered: {count}</button>
    </>
  );
}`;

const eventListeners = `import { useState, useEffect } from 'react';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // Cleanup function to prevent memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Effect only runs on mount and cleanup on unmount

  return <div>Window width: {windowWidth}</div>;
}`;

const fetchingData = `import { useState, useEffect } from 'react';

export default function App() {
  const [userId, setUserId] = useState(0);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!userId) return; // Only fetch if userId is present

    fetch('/api/users/' + userId)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, [userId]); // Effect runs when 'userId' changes

  return (
    <>
      <p>Only user ID 1 to 3 exist, feel free to try other numbers</p>
      <label>User ID:</label>
      <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} />
      {userData?.name ? <p>Name: {userData.name} | Lucky Number: {userData.luckyNumber}</p>
      : <p>User does not exist</p>}
    </>
  );
}`;