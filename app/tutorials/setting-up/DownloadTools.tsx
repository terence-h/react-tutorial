import Header from "@/app/components/Header";
import Hyperlink from "@/app/components/Hyperlink";
import NestedList, { ListItem } from "@/app/components/NestedList";

export default function DownloadTools() {
    return (
        <article id="download-tools">
            <Header>Download Tools</Header>
            <NestedList items={data} />
        </article>
    );
}

const data: ListItem[] = [
    {
        id: 1,
        label: (<span>Download the following items:</span>),
        children: [
            {
                id: 2,
                label: (
                    <>
                        <Hyperlink href="https://code.visualstudio.com/download">Visual Studio Code</Hyperlink>
                        <span> (recommended) or any other supported IDE</span>
                    </>
                )
            },
            {
                id: 3,
                label: (
                    <>
                        <Hyperlink href="https://github.com/coreybutler/nvm-windows/releases">Node Version Manager</Hyperlink>
                        <span> (recommended) OR </span>
                        <Hyperlink href="https://nodejs.org/en">Node.js</Hyperlink>
                    </>
                ),
            }
        ],
    }
];