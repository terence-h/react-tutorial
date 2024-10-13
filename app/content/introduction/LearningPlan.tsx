import Header from "@/app/components/Header";
import Table, { TableRow } from "@/app/components/Table";

const headers = ['ID', 'Name', 'Email', 'Role'];

const data: TableRow[] = [
    { ID: 1, Name: 'John Doe', Email: 'john@example.com', Role: 'Admin' },
    { ID: 2, Name: 'Jane Smith', Email: 'jane@example.com', Role: 'Editor' },
    { ID: 3, Name: 'Bob Johnson', Email: 'bob@example.com', Role: 'Viewer' },
    { ID: 4, Name: 'Alice Williams', Email: 'alice@example.com', Role: 'Contributor' },
];

export default function LearningPlan() {
    return (
        <article id="learning-plan">
            <Header>Learning Plan</Header>
            <Table headers={headers} data={data} />
        </article>
    );
}