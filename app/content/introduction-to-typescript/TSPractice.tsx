import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";

export default function TSPractice() {
    return (
        <article id="practice">
            <Header level={2}>Practice: Writing TypeScript</Header>
            <Paragraph>You are given 5 piece of JavaScript codes snippets and asked to convert to TypeScript.{<br />}Note: If you are an offline editor like VSCode, the file extension for TypeScript is .ts.</Paragraph>

            <Header level={3}>Challenge 1</Header>
            <Paragraph>Convert the following JavaScript function to TypeScript by specifying the proper type for the parameter and return value.</Paragraph>
            <CodeEditor height="300px" initialCode={challengeOneInitial} languages={['typescript']} />

            <Header level={3}>Challenge 2</Header>
            <Paragraph>Convert the following JavaScript object declaration to TypeScript by defining an interface for the object and typing the variable.</Paragraph>
            <CodeEditor height="300px" initialCode={challengeTwoInitial} languages={['typescript']} />

            <Header level={3}>Challenge 3</Header>
            <Paragraph>Convert the following JavaScript array declaration to TypeScript by specifying the array type.</Paragraph>
            <CodeEditor height="200px" initialCode={challengeThreeInitial} languages={['typescript']} />

            <Header level={3}>Challenge 4</Header>
            <Paragraph>Convert the following JavaScript function to TypeScript by specifying that the function returns a Promise which resolves to a string. Hint: This was mentioned in the first link (video) in the TypeScript references. Feel free to use Google or ChatGPT!</Paragraph>
            <CodeEditor height="300px" initialCode={challengeFourInitial} languages={['typescript']} />

            <Header level={3}>Challenge 5</Header>
            <Paragraph>Convert the following JavaScript function to TypeScript by typing the parameters and making the second parameter optional. Hint: Ask ChatGPT or Google if you can&apos;t figure it out.</Paragraph>
            <CodeEditor height="300px" initialCode={challengeFiveInitial} languages={['typescript']} />
        </article>
    );
}

const challengeOneInitial = `// The code will still execute by default, but your changes should not change the output
function greet(name) {
    return 'Hello, ' + name + '!';
}

console.log(greet('John'));`;

const challengeTwoInitial = `// Autocompletion does not show up here but you can try it on VSCode instead if you want to see it
const person = {
    name: "John",
    age: 30
};

console.log(person.name);`;

const challengeThreeInitial = `const numbers = [1, 2, 3, 4, 5];
console.log(numbers);`;

const challengeFourInitial = `function fetchData() {
    return new Promise((resolve) => {
        console.log("Data fetched");
        resolve("Data fetched");
    });
}

fetchData();`;

const challengeFiveInitial = `function display(message, count) {
    if (count) {
        console.log(message.repeat(count));
    } else {
        console.log(message);
    }
}

display('hi ', 5);`;