import CodeBlock from "@/app/components/CodeBlock";
import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";

export default function ImplementingErrorBoundaries() {
    return (
        <article id="implementation">
            <Header>Implementing an Error Boundary</Header>
            <InformationText className="mb-5"><Paragraph>Error Boundaries relies on lifecycle methods such as componentDidCatch and getDerivedStateFromError that is part of React. Therefore, it is created as a class to access the React lifecycle methods.</Paragraph></InformationText>
            <CodeBlock code={errorBoundaryCode} language={"jsx"} />
            <InformationText className="mt-5 mb-5"><Paragraph>To see the difference, you can comment out the ErrorBoundary in App. Without the error boundary, the sandboxed output will crash with an runtime error instead.</Paragraph></InformationText>
            <CodeEditor id={1} initialCode={errorBoundaryImplementation} languages={['jsx', 'tsx']} />
        </article>
    );
}

const errorBoundaryCode = `import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError() {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // Optionally, send error and errorInfo to a logging service
  }
  
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1 className="bg-blue-500">Something went wrong.</h1>;
    }
    return this.props.children;
  }
}`;

const errorBoundaryImplementation = `import { useState } from 'react';

// Ignore the warning. 'React' is already defined on the editor logic.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError() {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // Optionally, send error and errorInfo to a logging service
  }
  
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1 className="bg-blue-500">Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

function DummyError() {
  const [triggerError, setTriggerError] = useState(false);

  // Throw an error on purpose to test the error boundary.
  if (triggerError) {
    throw new Error('An intentional error occurred!');
  }
  
  return (
    <>
      <h1 className="bg-blue-500">This component is working fine</h1>
      <button onClick={() => setTriggerError(true)} className="bg-blue-500 p-2">
        Click to Trigger Error
      </button>
    </>
  );
}

function AnotherComponent() {
  return <h1>I am another component outside of the error boundary.</h1>
}

export default function App() {
  return (
    <>
      {/* Errors that occurs within the error boundary will not crash components outside of it. */}
      {/* Comment out the ErrorBoundary to see the differences! */}
      <ErrorBoundary>
        <DummyError />
      </ErrorBoundary>
      <AnotherComponent />
    </>
  );
}`;