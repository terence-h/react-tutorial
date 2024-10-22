import CodeBlock from "@/app/components/CodeBlock";
import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";

export default function CreatingDarkMode() {
  return (
    <article id="create-dark-mode-context">
      <Header>Creating a Dark Mode Context API</Header>
      <Paragraph>Creating a context is fairly simple. It&apos;s like a function that wraps a state around and return context element with the children content.</Paragraph>
      <CodeEditor id={1} initialCode={darkModeContextProvider} languages={["jsx", "tsx"]} height="500px" />
      <InformationText className="mt-5"><Paragraph>On a proper project environment, the createContext and ThemeProvider function would be in another file and you would export both of them as shown below.
        <br /><code>export const ThemeContext = createContext(&apos;light&apos;)</code>
        <br /><code>export default function ThemeProvider{"({ children })"}</code></Paragraph>
      </InformationText>
      <Paragraph className="mt-5">You can also nest context if you need to provide multiple global states as shown below.</Paragraph>
      <CodeBlock code={nestedContext} language="jsx" />
    </article>
  );
}

const nestedContext = `return (
  <AnotherProvider>
    <ThemeProvider>
      <YourComponentOne />
      <YourComponentTwo />
    </ThemeProvider>
  </AnotherProvider>
);`;

const darkModeContextProvider = `import { createContext, useContext, useState } from 'react';

export default function App() {
  return (
    // Notice how we dont need to create the theme state in this root component and pass the props to the children?
    // This makes the code much more cleaner and provides better scalability.
    <ThemeProvider>
      <ToggleThemeButton />
      <Paragraph>Hello, this is paragraph one.</Paragraph>
      <Paragraph>Hello, this is paragraph two.</Paragraph>
      <Paragraph>Hello, this is paragraph three.</Paragraph>
    </ThemeProvider>
  );
}

function ToggleThemeButton() {
  // Provide both the theme state variable and state function since we will toggle the theme with the button
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Change the text depending on the current theme
  return <button className="p-2 bg-blue-500" onClick={toggleTheme}>Change to {theme === 'light' ? "dark" : "light"} theme</button>;
}

function Paragraph({ children }) {
  // Provide only the theme state variable since we are not toggling the theme here.
  const { theme } = useContext(ThemeContext);

  // Change the style depending on the current theme
  return <p className="p-5" style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>{children}</p>
}

// Create a context.
const ThemeContext = createContext('light');

// Context provider for the theme
function ThemeProvider({ children }) {
  // A state to trigger a rerender whenever light or dark mode is toggled.
  const [theme, setTheme] = useState('light');
  
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }
  return (
    // Wrap the theme context provider around the children content
    // Provide the values that we want to allow the children components to access
    // 1st parameter - state variable
    // 2nd parameter - toggleTheme function
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}`;