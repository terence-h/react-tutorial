import CodeEditor from "./components/CodeEditor";
import Header from "./components/Header";
import LoaderWrapper from "./components/LoaderWrapper";
import Pagination from "./components/Pagination";
import Paragraph from "./components/Paragraph";
import Table, { TableRow } from "./components/Table";
import { LatestVersionNo } from "./utils/VersionNo";

export default function Home() {

  return (
    <LoaderWrapper>
      <Header>Your first step to learning React starts here!</Header>
      <Paragraph>Here&apos;s a code editor for you to have fun writing JavaScript, TypeScript and React in either JSX or TSX!</Paragraph>
      <CodeEditor id={1} />
      <Header>Version History</Header>
      <Table headers={headers} data={data} />
      <Pagination
        nextPath="/tutorials/introduction"
        nextLabel="Introduction" />
    </LoaderWrapper>
  );
}

const headers = ['Version No.', 'Updated On', 'Changes'];

const data: TableRow[] = [
  {
    'Version No.': LatestVersionNo, 'Updated On': '29/10/2024', 'Changes':
      <>
        <Paragraph>Upgraded project framework from NextJS 14.2.15 -&gt; NextJS 15.0.1.</Paragraph>
        <Paragraph>Modified API routes to use server side rendering.</Paragraph>
        <Paragraph>Updated project name to React Tutorial</Paragraph>
        <Paragraph>Updated favicon.</Paragraph>
      </>
  },
  {
    'Version No.': '1.0.1', 'Updated On': '28/10/2024', 'Changes':
      <>
        <Paragraph>Added version history to home page.</Paragraph>
        <Paragraph>Added more context to Individual vs Shared states.</Paragraph>
        <Paragraph>Added Limitations of Context API section.</Paragraph>
        <Paragraph>Fixed typos on certain sections.</Paragraph>
      </>
  },
  { 'Version No.': '1.0.0', 'Updated On': '25/10/2024', 'Changes': 'Initial release.' },
];