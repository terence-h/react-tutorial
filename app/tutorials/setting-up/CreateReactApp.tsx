import Header from "@/app/components/Header";
import Hyperlink from "@/app/components/Hyperlink";
import ImageContainer from "@/app/components/ImageContainer";
import NestedList from "@/app/components/NestedList";
import Paragraph from "@/app/components/Paragraph";

import vsCodeOpenTerminal from "@/public/tutorials/setting-up/vscode-open-terminal.jpg";
import vsCodeTerminalUi from "@/public/tutorials/setting-up/vscode-terminal-ui.jpg";
import vsCodeOpenFolder from "@/public/tutorials/setting-up/vscode-open-folder.jpg";
import vsCodeNpmStart from "@/public/tutorials/setting-up/vscode-npm-start.jpg";
import defaultReactWebsite from "@/public/tutorials/setting-up/default-react-website.jpg";
import vsCodeAppJs from "@/public/tutorials/setting-up/vscode-app-js.jpg";

export default function CreateReactApp() {
    return (
        <article id="create-react-app">
            <Header>Create your first React App</Header>
            <Paragraph>If you plan to use the built in code editor in this web app, you can skip this section for now and proceed to install once you want to do the case study.
                <br />However, it is recommended that you use Visual Studio Code to follow through as it will provide a better idea on how to work with multiple files and the project structure in React.
            </Paragraph>
            <Paragraph className="mt-5">For this tutorial, we will be using Create React App to initialise a React project. You can follow the tutorial here: <Hyperlink href="https://create-react-app.dev/docs/getting-started">Create React App (create-react-app.dev)</Hyperlink> or follow the steps:
            </Paragraph>
            <NestedList items={setupReact} />
            <p>Optional: You can play around with it by going to the App.js for JavaScript or App.tsx for TypeScript as shown in the picture below.</p>
            <ImageContainer className="w-full md:w-1/2 mb-5" src={vsCodeAppJs} alt="VSCode app.js" />
        </article>
    );
}

const setupReact = [
    {
        id: 1,
        label: (<span>Open your Visual Studio Code</span>),
    },
    {
        id: 2,
        label: (<>
            <span>At the top left, click &quot;Terminal&quot; and select &quot;Terminal&quot; OR use Ctrl + Shift + `</span>
            <ImageContainer className="w-full md:w-1/2 mb-5" src={vsCodeOpenTerminal} alt="Open VSCode Terminal" />
        </>),
    },
    {
        id: 3,
        label: (<>
            <span>A terminal should open at the bottom of the UI</span>
            <ImageContainer className="w-full md:w-1/2" src={vsCodeTerminalUi} alt="VSCode Terminal UI" />
        </>),
    },
    {
        id: 4,
        label: (<span>Enter EITHER one of the commands below (We will be using JavaScript in this tutorial. TypeScript will work fine as well but may require additional coding):</span>),
        children: [
            {
                id: 41,
                label: (<span>For JavaScript: <code>npx create-react-app [project-name]</code></span>)
            },
            {
                id: 42,
                label: (<span>For TypeScript: <code>npx create-react-app [project-name] --template typescript</code></span>)
            },
            {
                id: 43,
                label: (<span>Replace <code>[project-name]</code> to what you want the project/folder name to be.</span>)
            },
            {
                id: 44,
                label: (<span>If you want to change directory, use the powershell commands to do so.</span>),
                children: [
                    {
                        id: 441,
                        label: (<span>Go back one level: <code>cd ..</code></span>)
                    },
                    {
                        id: 442,
                        label: (<span>Make a new folder: <code>mkdir [folder-name]</code></span>)
                    },
                    {
                        id: 443,
                        label: (<span>Go into a folder: <code>cd [folder-name]</code></span>)
                    },
                    {
                        id: 444,
                        label: (<span>Check the list of items in the current directory: <code>ls</code></span>)
                    },
                ]
            },
        ]
    },
    {
        id: 5,
        label: (<>
            <span>Once the installation is complete, on the top left of your VSCode, go to &quot;File&quot; and Select &quot;Open Folder&quot; and open the folder that React was initialised at</span>
            <ImageContainer className="w-full md:w-1/2 mb-5" src={vsCodeOpenFolder} alt="VSCode Open Folder" />
        </>),
    },
    {
        id: 6,
        label: (<>
            <span>Open the Terminal in VSCode again if it&apos;s closed and enter the command to start a development server: <code>npm start</code></span>
            <ImageContainer className="w-full md:w-1/2 mb-5" src={vsCodeNpmStart} alt="VSCode npm start" />
        </>),
    },
    {
        id: 7,
        label: (<>
            <span>Congratulations! You have created your first React App! To stop the project, press Ctrl + C.</span>
            <ImageContainer className="w-full md:w-1/2 mb-5" src={defaultReactWebsite} alt="React Default Website" />
        </>),
    },
];