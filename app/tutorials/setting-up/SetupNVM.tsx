import Header from "@/app/components/Header";
import ImageContainer from "@/app/components/ImageContainer";
import InformationText from "@/app/components/InformationText";
import NestedList, { ListItem } from "@/app/components/NestedList";
import Paragraph from "@/app/components/Paragraph";
import nvmInstallLts from "@/public/tutorials/setting-up/nvm-install-lts.jpg";
import nvmUseLts from "@/public/tutorials/setting-up/nvm-use-lts.jpg";

export default function SetupNVM() {
    return (
        <article id="setting-up-nvm">
            <Header>Setting up Node Version Manager (NVM)</Header>

            <InformationText><Paragraph>DO NOT follow this if you are not using NVM</Paragraph></InformationText>

            <Paragraph>Once NVM is installed, open Command Prompt and enter the command &quot;nvm&quot; to ensure that it is successfully installed.</Paragraph>

            <Paragraph className="underline">To install Node.js via NVM (Use LTS for this tutorial):</Paragraph>
            <NestedList items={nvmInstallCommands} />
            <ImageContainer src={nvmInstallLts} className="mt-2 w-full md:w-1/2" alt={"nvm install lts"} />

            <Paragraph className="mt-5">Once you installed the LTS version, type &quot;nvm use lts&quot; or &quot;nvm use [version]&quot; to set the default Node.js version to use.</Paragraph>
            <ImageContainer src={nvmUseLts} className="mt-2 w-full md:w-1/2" alt={"nvm use lts"} />
            
            <Paragraph className="mt-5 underline">Useful commands to check/change Node.js versions</Paragraph>
            <NestedList items={nvmUsefulCommands} />
        </article>
    );
}

const nvmInstallCommands: ListItem[] = [
    { id: 1, label: (<span>Latest version: <code>nvm install latest</code></span>), },
    { id: 2, label: (<span>LTS version: <code>nvm install lts</code></span>), },
    { id: 3, label: (<span>Specified version: <code>nvm install [version]</code></span>), },
];

const nvmUsefulCommands: ListItem[] = [
    { id: 1, label: (<span>Display list of versions installed: <code>nvm list</code></span>), },
    { id: 2, label: (<span>Display available list of versions able to install: <code>nvm list available</code></span>), },
    { id: 3, label: (<span>Change the current version used by the system: <code>nvm use [version]</code></span>), },
    { id: 4, label: (<span>Uninstall a version of Node.js: <code>nvm uninstall [version]</code></span>), },
];