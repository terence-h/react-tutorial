import CodeEditor from "./components/CodeEditor";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Paragraph from "./components/Paragraph";

export default function Home() {

  return (
    <>
      <Header>Welcome to React Learning Guide</Header>
      <Paragraph>Here&apos;s a code editor for you to have fun writing JavaScript, TypeScript and React in either JSX or TSX!</Paragraph>
      <CodeEditor />
      <Pagination
        nextPath="/content/introduction"
        nextLabel="Introduction" />
    </>

  );
}