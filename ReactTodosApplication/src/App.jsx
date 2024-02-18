import React from "react";
// import {nanoid} from "nanoid";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Task from "./components/Task.jsx";
import "./index.css";

export default function App() {
  const [formValue, setFormValue] = React.useState("");

  // React.useEffect(() => {}, [formValue]);

  function handleFormChange(event) {
    setFormValue(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formValue);
  }

  return (
    <main className="flex flex-col items-center min-h-screen bg-cyan-200">
      <Header />
      <section className="relative shadow-lg shadow-gray-400 before:w-[23rem] before:absolute before:-bottom-2 before:border-b before:h-2 before:left-2 before:bg-white after:absolute after:-bottom-4 after:w-[22rem] after:border-b after:border-gray-200 before:border-gray-200 before:z-20 after:h-3 after:left-4 after:bg-white after:z-10">
        <Form
          handleFormChange={handleFormChange}
          formValue={formValue}
          handleFormSubmit={handleFormSubmit}
        />
        <ul>
          <Task />
        </ul>
      </section>
      <Footer />
    </main>
  );
}
