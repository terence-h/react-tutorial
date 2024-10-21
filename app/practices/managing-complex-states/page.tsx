import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import InformationText from "@/app/components/InformationText";
import Paragraph from "@/app/components/Paragraph";
import Section from "../../components/Section";
import Pagination from "@/app/components/Pagination";
import ImageContainer from "@/app/components/ImageContainer";
import ChallengeOneOutputOne from "@/public/practices/managing-complex-states/c1_expected_output_1.jpg";
import ChallengeOneOutputTwo from "@/public/practices/managing-complex-states/c1_expected_output_2.jpg";

export default function Page() {
    return (
        <Section id="managing-complex-states">
            <Header>Practice: Managing Complex States with Context API</Header>

            <InformationText>The code changes in the practice sections are saved into your browser locally so you do not have to finish in one go!</InformationText>

            <Header level={2}>Challenge 1</Header>
            <Paragraph>Create a context provider that provides the value of whether the user is logged in or not. The login/logout button and paragraph component has been provided to you. The text displayed should be different when the user is logged in or logged out.
            <br /><br />Your output should look something like this:
            </Paragraph>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div className="col-span-1">
                    <ImageContainer src={ChallengeOneOutputOne} alt={"Challenge 1 Output 1"} />
                </div>
                <div className="col-span-1">
                    <ImageContainer src={ChallengeOneOutputTwo} alt={"Challenge 1 Output 2"} />
                </div>
            </div>
            <CodeEditor id={1} initialCode={challengeOneInitial} languages={['jsx', 'tsx']} saveKey="managing-complex-states-c1" />

            <Pagination
                previousLabel="Managing Complex States with Context API"
                previousPath="/tutorials/managing-complex-states"
                nextPath="/"
                nextLabel="..." />
        </Section>
    );
}

const challengeOneInitial = `export default function App() {
  return (
    <>
      <LoginButton />
      <Paragraph />
    </>
  );
}

function Paragraph() {
  return (
    <>
      {/* This should be displayed when the user is logged in */}
      <p>Welcome back, Alice.</p>

      {/* This should be displayed when the user is logged out */}
      <p>You are not authorised to access this page.</p>
    </>
  );
}

function LoginButton() {
  // The button should display Login OR Logout depending on whether the user is logged in or not
  return <button className="p-2 bg-blue-500 rounded-md">Login/Logout</button>
}

// Create your context here
`;

// C1 ANSWER
// import { createContext, useContext, useState } from "react";

// export default function App() {
//   return (
//     <AuthProvider>
//       <LoginButton />
//       <Paragraph />
//     </AuthProvider>
//   );
// }

// function Paragraph() {
//   const { loggedIn } = useContext(AuthContext);
//   return loggedIn ? <p>Welcome back, Alice.</p> : <p>You are not authorised to access this page.</p>
// }

// function LoginButton() {
//   const { loggedIn, toggleLoggedIn } = useContext(AuthContext);
//   return <button className="p-2 bg-blue-500 rounded-md" onClick={toggleLoggedIn}>{loggedIn ? "Logout" : "Login"}</button>
// }

// // Create a context.
// const AuthContext = createContext(false);

// // Context provider for the theme
// function AuthProvider({ children }) {
//   // A state to trigger a rerender when the user login or logout
//   const [loggedIn, setLoggedIn] = useState(false);
  
//   function toggleLoggedIn() {
//     setLoggedIn(!loggedIn);
//   }
//   return (
//     // Wrap the theme context provider around the children content
//     // Provide the values that we want to allow the children components to access
//     // 1st parameter - state variable
//     // 2nd parameter - toggleTheme function
//     <AuthContext.Provider value={{ loggedIn, toggleLoggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }