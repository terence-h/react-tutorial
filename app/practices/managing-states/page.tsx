import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";
import Section from "../../components/Section";
import Pagination from "@/app/components/Pagination";
import ImageContainer from "@/app/components/ImageContainer";
import ChallengeOneOutput from "@/public/practices/managing-states/c1_expected_output.jpg";
import ChallengeTwoOutputOne from "@/public/practices/managing-states/c2_expected_output_1.jpg";
import ChallengeTwoOutputTwo from "@/public/practices/managing-states/c2_expected_output_2.jpg";

export default function Page() {
    return (
        <Section>
            <Header>Practice: Managing States with useState</Header>

            <InformationText><Paragraph>The code changes in the practice sections are saved into your browser locally so you do not have to finish in one go!</Paragraph></InformationText>

            <Header level={2}>Challenge 1</Header>
            <Paragraph>Create a controlled form with inputs for &quot;Username&quot; and &quot;Password&quot;. Display a message under the form that updates in real-time as the user types, showing the username and password being entered.
                <br /><br />Your output should look something like this:
            </Paragraph>
            <ImageContainer className="w-2/3 md:w-1/2 mb-5" src={ChallengeOneOutput} alt={"Challenge 1 Output"} />
            <CodeEditor id={1} initialCode={challengeOneInitial} languages={['jsx', 'tsx']} saveKey="managing-states-c1" />

            <Header level={2}>Challenge 2</Header>
            <Paragraph>Using your answer in Challenge 1, add a dropdown select list that allows the user to select their preferred programming langauge (JavaScript or TypeScript).
                <br /><br />Add a submit button. When the user submits, prevent the default behaviour and trigger an alert message displaying the username, password and preferred langauge.
                <br /><br />Your output should look something like this:
            </Paragraph>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="col-span-1">
                    <ImageContainer src={ChallengeTwoOutputOne} alt={"Challenge 2 Output 1"} />
                </div>
                <div className="col-span-1">
                    <ImageContainer src={ChallengeTwoOutputTwo} alt={"Challenge 2 Output 2"} />
                </div>
            </div>
            <CodeEditor id={1} initialCode={challengeTwoInitial} languages={['jsx', 'tsx']} saveKey="managing-states-c2" />

            <Pagination
                previousLabel="Managing States with useState"
                previousPath="/tutorials/managing-states"
                nextPath="/tutorials/rendering-conditionally-dynamic"
                nextLabel="Rendering Conditionally and Dynamic Content" />
        </Section>
    );
}

const challengeOneInitial = `export default function App() {
  <>
    <form>
      
    </form>
  </>
}`;

const challengeTwoInitial = `// Copy your Challenge 1 answer here`;

// ANSWER FOR Q1
// import { useState } from 'react';

// export default function App() {
//   const [formData, setFormData] = useState({ username: '', password: '' });

//   function handleChange(event) {
//     // Get the input name value and input current value
//     const { name, value } = event.target;
    
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   }

//   return (
//     <>
//       <form>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </label>
//       </form>
//       <h1 className='mt-5'>Preview</h1>
//       <p>Username: {formData.username}</p>
//       <p>Password: {formData.password}</p>
//     </>
//   );
// }

// ANSWER FOR Q2
// import { useState } from 'react';

// export default function App() {
//   const [formData, setFormData] = useState({ username: "", password: "", language: "JavaScript" });

//   function handleChange(event) {
//     // Get the input name value and input current value
//     const { name, value } = event.target;
    
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     alert(`Name: ${formData.username} | Password: ${formData.password} | Preferred Programming Language: ${formData.language}`);
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Preferred Programming Language:
//           <select name="language" value={formData.language} onChange={handleChange}>
//             <option value="JavaScript">JavaScript</option>
//             <option value="TypeScript">TypeScript</option>
//           </select>
//         </label>
//         <br />
//         <button className="bg-blue-500 p-2" type="submit">Submit</button>
//       </form>
//       <h1 className='mt-5'>Preview</h1>
//       <p>Username: {formData.username}</p>
//       <p>Password: {formData.password}</p>
//       <p>Preferred Programming Language: {formData.language}</p>
//     </>
//   );
// }