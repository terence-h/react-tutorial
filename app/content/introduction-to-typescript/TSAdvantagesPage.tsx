import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";
import ImageContainer from '@/app/components/ImageContainer';
import CodeBlock from "@/app/components/CodeBlock";
import jsAdvStaticType1 from '../../../public/content/introduction-to-typescript/js-advantage-static-typing-1.jpg';
import tsAdvStaticType1 from '../../../public/content/introduction-to-typescript/ts-advantage-static-typing-1.jpg';
import jsAdvStaticTypeFunc1 from '../../../public/content/introduction-to-typescript/js-advantage-static-typing-func-1.jpg';
import tsAdvStaticTypeFunc1 from '../../../public/content/introduction-to-typescript/ts-advantage-static-typing-func-1.jpg';
import tsAdvInterface1 from '../../../public/content/introduction-to-typescript/ts-advantage-interface-1.jpg';
import tsAdvInterface2 from '../../../public/content/introduction-to-typescript/ts-advantage-interface-2.jpg';
import tsAdvAutoCompletion1 from '../../../public/content/introduction-to-typescript/ts-advantage-autocompletion-1.jpg';

export default function TSAdvantagesPage() {
    return (
        <article id="advantages">
            <Header>Advantages of TypeScript</Header>

            <Header level={2}>1. Static Typing, Type Inference, and Compile Time Error Detection</Header>
            <Paragraph>In TypeScript, you can define the type of a variable, function parameter, or function return value at compile time. This helps catch errors early before the code runs.</Paragraph>
            <Paragraph>Notice that in the TypeScript code, it highlights an error in red underline. TypeScript supports type inference. This means TypeScript recognises &quot;iAmANumber&quot; is of type number and throws an error when assigning a non-number to it during compile time.</Paragraph>
            <div className="mx-auto max-w-[90%] flex flex-col md:flex-row mb-10 gap-y-2 md:gap-y-0">
                <div className="md:hidden">JavaScript</div>
                <ImageContainer src={jsAdvStaticType1} className={`md:w-[45%] mx-auto`} alt='Code' />
                <div className="md:hidden">TypeScript</div>
                <ImageContainer src={tsAdvStaticType1} className={`md:w-[45%] mx-auto`} alt='Code' />
            </div>
            <Paragraph>Here&apos;s another example but with function parameters this time. Notice the &quot;: number&quot; and &quot;: string&quot; beside the parameters/variables? TypeScript supports static typing which allows you to assign a type. Similarly, the TypeScript version highlights an error in red underline. The Add function is expecting 2 number parameters but received 1 number and 1 string.</Paragraph>
            <div className="mx-auto max-w-[90%] flex flex-col md:flex-row gap-y-2 md:gap-y-0">
                <div className="md:hidden">JavaScript</div>
                <ImageContainer src={jsAdvStaticTypeFunc1} className={`md:w-[45%] mx-auto`} alt='Code' />
                <div className="md:hidden">TypeScript</div>
                <ImageContainer src={tsAdvStaticTypeFunc1} className={`md:w-[45%] mx-auto`} alt='Code' />
            </div>

            <Header level={2}>2. Interfaces and Advanced Autocompletion</Header>
            <Paragraph>Interfaces allows you to define the structure of an object. It introduces type safety and reusability. Since &quot;person&quot; is a type of &quot;Person&quot; interface, it is expected that &quot;name&quot; to be a string and age to be a &quot;number&quot;. If we were to give &quot;age&quot; a string value, the editor will throw an error indicating that it is expecting a number.</Paragraph>
            <div className="mx-auto max-w-[90%] flex flex-col md:flex-row mb-10 gap-y-2 md:gap-y-0">
                <ImageContainer src={tsAdvInterface1} className={`md:w-[45%] mx-auto`} alt='Code' />
                <ImageContainer src={tsAdvInterface2} className={`md:w-[45%] mx-auto`} alt='Code' />
            </div>
            <Paragraph>Another advantage of interfaces is to provide autocompletion. Assuming this is the JSON response you receive from your backend API.{<br />}Auto completion is much more powerful in TypeScript as shown below because &quot;persons&quot; is initialised as the array type of Person interface.</Paragraph>
            <div className="mx-auto max-w-[90%] flex flex-col md:flex-row mb-10 gap-y-2 md:gap-y-0">
                <CodeBlock className={`md:w-1/3 mx-auto`} code={tsAdvAutoCompletionCode} language={"json"} />
                <ImageContainer src={tsAdvAutoCompletion1} className={`md:w-[45%] mx-auto`} alt='Code' />
            </div>
        </article>
    );
}

const tsAdvAutoCompletionCode = `[
    {
        "name": "Alice",
        "age": 22
    },
    {
        "name": "Bob",
        "age": 24
    },
    {
        "name": "Charlie",
        "age": 26
    }
]`;