import CodeEditor from "@/app/components/CodeEditor";
import Header from "@/app/components/Header";
import Paragraph from "@/app/components/Paragraph";
import Table, { TableRow } from "@/app/components/Table";

export default function WorkingWithForms() {
    return (
        <article id="working-with-forms">
            <Header>Working with Forms</Header>

            <Paragraph>Working with forms is very similar to how you would do it in HTML/JavaScript. There are some minor differences to take note of when working with forms in React.
                <br /><br />There are 2 types of forms. Controlled and uncontrolled. Uncontrolled forms should be familiar with you as it is how you would read form data directly through the DOM in JavaScript. We will be focusing on controlled forms in this section.
                <br /><br />Controlled forms are basically forms that React have full control through states. The form data is stored in a state and typically retrieved using the state value instead of the DOM.
                <br />Below are examples of 1 controlled form and 1 uncontrolled form.
            </Paragraph>

            <div className="flex flex-wrap md:grid md:grid-cols-2 gap-5">
                <div className="md:col-span-1">
                    <Header level={2}>Controlled Form</Header>
                    <CodeEditor id={1} initialCode={controlledFormExample} languages={["jsx", "tsx"]} readOnly={true} height="600px" />
                </div>
                <div className="md:col-span-1">
                    <Header level={2}>Uncontrolled Form</Header>
                    <CodeEditor id={2} initialCode={uncontrolledFormExample} languages={["jsx", "tsx"]} readOnly={true} height="600px" />
                </div>
            </div>

            <Header level={2}>Differences between Controlled and Uncontrolled Forms</Header>
            <Table headers={headers} data={data} />
        </article>
    );
}

const controlledFormExample = `import { useState } from 'react';

export default function App() {
  // Create a state to store the form data object
  const [formData, setFormData] = useState(
    {
      username: ''
    }
  );

  function handleChange(event) {
    setFormData(
      {
        ...formData, // Use JavaScript's spread operator to get the current form input values
        [event.target.name]: event.target.value // Use square bracket to dynamically set the key. In this case, it's the "name" prop of the input
      }
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    // See how we are retrieving the username from the state instead of the DOM (document.getElementById(...))?
    alert("Controlled Form Submitted: " + formData.username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          // Set the name of the input, this is necessary to allow us uniquely identify each input field.
          name="username"
          // The value is set to the name value in the state because we want to let React have full control of the input field.
          // This means that when the name value in the state changes, this input field will change as well.
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`;

const uncontrolledFormExample = `import { useRef } from 'react';

export default function App() {
  // Ref in a nutshell is similar to document.getElementById but in React way.
  // We won't go through refs in this tutorial but it's highly recommended to look it up in React.dev tutorial.
  const usernameInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    // To access the ref, we always use refVar.current.xyz
    alert("Uncontrolled Form Submitted: " + usernameInputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          // In uncontrolled form, we don't set the value because we are not using states. We let the DOM handle the input instead.
          type="text"
          name="username"
          ref={usernameInputRef}  // Using a ref to access the input value
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`;

const headers = ['Aspect', 'Controlled Form', 'Uncontrolled Form'];

const data: TableRow[] = [
    { 'Aspect': 'State Management', 'Controlled Form': 'Form data is controlled by React state (useState)', 'Uncontrolled Form': 'Form data is managed by the DOM and accessed via refs' },
    { 'Aspect': 'Form Value Access', 'Controlled Form': 'React controls and updates the input values in real-time', 'Uncontrolled Form': 'Input values are accessed through refs when needed' },
    { 'Aspect': 'Real-Time Validation', 'Controlled Form': 'Easy to validate in real-time as the data is in state', 'Uncontrolled Form': 'Harder to validate in real-time since data is not in state' },
    { 'Aspect': 'Complexity', 'Controlled Form': 'More code is needed (state, handlers)', 'Uncontrolled Form': 'Simpler to set up initially (with refs)' },
    { 'Aspect': 'Use Case', 'Controlled Form': 'Best when you need to validate, control, or manipulate the form data', 'Uncontrolled Form': 'Best when you need a simple form without frequent updates or validation' },
];