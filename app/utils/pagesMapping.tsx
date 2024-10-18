interface SubCategory {
    id: number;
    name: string;
    link: string;
}

interface Category {
    id: number;
    name: string;
    subCategories?: SubCategory[];
    link?: string;
}

const pages: Category[] = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "Introduction",
        subCategories: [
            { id: 21, name: "Learning Outcomes", link: "/tutorials/introduction#learning-outcomes" },
            { id: 22, name: "Learning Plan", link: "/tutorials/introduction#learning-plan" },
            { id: 23, name: "Pre-Requisites", link: "/tutorials/introduction#prerequisites" },
        ]
    },
    {
        id: 3,
        name: "Introduction to TypeScript",
        subCategories: [
            { id: 31, name: "What is TypeScript?", link: "/tutorials/introduction-to-typescript#introduction" },
            { id: 32, name: "Key Differences", link: "/tutorials/introduction-to-typescript#key-differences" },
            { id: 33, name: "Advantages over JavaScript", link: "/tutorials/introduction-to-typescript#advantages" },
            { id: 34, name: "When to use JavaScript or TypeScript", link: "/tutorials/introduction-to-typescript#when-to-use" },
            { id: 35, name: "Learn More", link: "/tutorials/introduction-to-typescript#learn-more" },
            { id: 36, name: "Practice: Writing TypeScript", link: "/tutorials/introduction-to-typescript#practice" },
        ]
    },
    {
        id: 4,
        name: "Setting Up Tools and React Project Environments",
        subCategories: [
            { id: 41, name: "Download Tools", link: "/tutorials/setting-up#download-tools" },
            { id: 42, name: "Setting Up NVM", link: "/tutorials/setting-up#setting-up-nvm" },
            { id: 43, name: "Create your first React App", link: "/tutorials/setting-up#create-react-app" },
        ]
    },
    {
        id: 5,
        name: "Setting Up Tools and React Project Environments",
        subCategories: [
            { id: 51, name: "Temp", link: "/tutorials/starting-with-react" },
        ]
    },
];

export default pages;