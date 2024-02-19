import { nanoid } from "nanoid";
import React from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Panel from "./components/Panel";
import Todo from "./components/Todo";
import "./index.css";

export default function App() {
  const [formValue, setFormValue] = React.useState("");
  const [todos, setTodos] = React.useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filteredTodos, setFilteredTodos] = React.useState(
    JSON.parse(localStorage.getItem("filteredTodos")) || todos
  );

  const [activeFilterButton, setActiveFilterButton] = React.useState(
    JSON.parse(localStorage.getItem("activeFilterButton")) || "allTodos"
  );

  function changeCompletionStatus(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleFormChange(event) {
    setFormValue(event.target.value);
  }

  function createTodo(event) {
    event.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: nanoid(), title: formValue, completed: false },
    ]);
    setFormValue("");
  }

  function deleteTodo(id) {
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
  }

  function updateTodo(event, id) {
    const value = event.target.value;
    setTodos((oldTodos) =>
      oldTodos.map((todo) => (todo.id === id ? { ...todo, title: value } : todo))
    );
  }

  function changeCompletionStatusForAllTodos() {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: !todo.completed }))
    );
  }

  function showAllTodos() {
    setFilteredTodos(todos);
    setActiveFilterButton("allTodos");
  }

  function filterUncompletedTodos() {
    const uncompletedTodos = todos.filter((todo) => !todo.completed);
    setFilteredTodos(uncompletedTodos);
    setActiveFilterButton("unCompletedTodos");
  }

  function filterCompletedTodos() {
    const completedTodos = todos.filter((todo) => todo.completed);
    setFilteredTodos(completedTodos);
    setActiveFilterButton("completedTodos");
  }

  function deleteAllCompletedTodos() {
    const uncompletedTodos = todos.filter((todo) => !todo.completed);
    setTodos(uncompletedTodos);
    setFilteredTodos(uncompletedTodos);
  }

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("activeFilterButton", JSON.stringify(activeFilterButton));
    localStorage.setItem("filteredTodos", JSON.stringify(filteredTodos));
  }, [todos, filteredTodos, activeFilterButton]);

  const unCompletedTodosCount = todos.filter((todo) => !todo.completed).length;

  const completedTodosCount = todos.filter((todo) => todo.completed).length;

  const staircaseEffectStyles =
    "before:w-[27rem] before:absolute before:-bottom-2 before:border-b before:h-2 before:left-2 before:bg-white after:absolute after:-bottom-4 after:w-[26rem] after:border-b after:border-gray-200 before:border-gray-200 before:z-20 after:h-3 after:left-4 after:bg-white after:z-10";

  const TodoElement = todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        changeCompletionStatus={changeCompletionStatus}
      />
    );
  });

  return (
    <main className="flex flex-col items-center min-h-screen bg-cyan-200">
      <Header />
      <section
        className={`relative shadow-lg mb-10 shadow-gray-400 ${
          todos.length > 0 ? staircaseEffectStyles : ""
        }`}
      >
        <Form
          handleFormChange={handleFormChange}
          formValue={formValue}
          changeCompletionStatusForAllTodos={changeCompletionStatusForAllTodos}
          createTodo={createTodo}
          todosLength={todos.length}
        />
        <ul>{TodoElement}</ul>
        {todos.length > 0 && (
          <Panel
            activeFilterButton={activeFilterButton}
            unCompletedTodosCount={unCompletedTodosCount}
            completedTodosCount={completedTodosCount}
            showAllTodos={showAllTodos}
            filterUncompletedTodos={filterUncompletedTodos}
            filterCompletedTodos={filterCompletedTodos}
            deleteAllCompletedTodos={deleteAllCompletedTodos}
          />
        )}
      </section>
      <Footer />
    </main>
  );
}
