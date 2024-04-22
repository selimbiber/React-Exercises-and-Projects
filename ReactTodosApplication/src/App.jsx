/* eslint-disable react-hooks/exhaustive-deps */
import { nanoid } from "nanoid";
import { useCallback, useEffect, useMemo, useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Panel from "./components/Panel";
import Todo from "./components/Todo";
import "./index.css";

export default function App() {
  const [formValue, setFormValue] = useState("");

  const [todos, setTodos] = useState(getInitialValues);

  const [filteredTodos, setFilteredTodos] = useState(
    JSON.parse(localStorage.getItem("filteredTodos")) || getInitialValues()
  );

  const [activeFilterButton, setActiveFilterButton] = useState(
    JSON.parse(localStorage.getItem("activeFilterButton")) || "allTodos"
  );

  function getInitialValues() {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  }

  function changeCompletionStatus(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    setFilteredTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    moveCompletedTodosToTop();
  }

  function moveCompletedTodosToTop() {
    setTodos((prevTodos) => {
      const completedTodos = prevTodos.filter((todo) => todo.completed);
      const uncompletedTodos = prevTodos.filter((todo) => !todo.completed);
      return [...completedTodos, ...uncompletedTodos];
    });
    setFilteredTodos((prevFilteredTodos) => {
      const completedTodos = prevFilteredTodos.filter((todo) => todo.completed);
      const uncompletedTodos = prevFilteredTodos.filter((todo) => !todo.completed);
      return [...completedTodos, ...uncompletedTodos];
    });
  }

  const handleFormChange = useCallback(
    (event) => {
      setFormValue(event.target.value);
    },
    [formValue]
  );

  const createTodo = useCallback(
    (event) => {
      event.preventDefault();

      const newTodo = { id: nanoid(), title: formValue, completed: false };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setFilteredTodos((prevFilteredTodos) => [...prevFilteredTodos, newTodo]);
      setActiveFilterButton("allTodos");
      setFormValue("");
    },
    [formValue]
  );

  const deleteTodo = useCallback((id) => {
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
    setFilteredTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
  }, []);

  const updateTodo = useCallback(
    (event, id) => {
      const value = event.target.value;
      if (value.length === 0) return;
      setTodos((oldTodos) =>
        oldTodos.map((todo) => (todo.id === id ? { ...todo, title: value } : todo))
      );
      setFilteredTodos((oldTodos) =>
        oldTodos.map((todo) => (todo.id === id ? { ...todo, title: value } : todo))
      );
    },
    [todos, filteredTodos]
  );

  const changeCompletionStatusForAllTodos = useCallback(() => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: !todo.completed }))
    );
    setFilteredTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: !todo.completed }))
    );
  }, []);

  const showAllTodos = useCallback(() => {
    setFilteredTodos(todos);
    setActiveFilterButton("allTodos");
  }, [todos]);

  const filterUncompletedTodos = useCallback(() => {
    const uncompletedTodos = todos.filter((todo) => !todo.completed);
    setFilteredTodos(uncompletedTodos);
    setActiveFilterButton("unCompletedTodos");
  }, [todos]);

  const filterCompletedTodos = useCallback(() => {
    const completedTodos = todos.filter((todo) => todo.completed);
    setFilteredTodos(completedTodos);
    setActiveFilterButton("completedTodos");
  }, [todos]);

  const deleteAllCompletedTodos = useCallback(() => {
    const uncompletedTodos = todos.filter((todo) => !todo.completed);
    setTodos(uncompletedTodos);
    setFilteredTodos(uncompletedTodos);
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("activeFilterButton", JSON.stringify(activeFilterButton));
    localStorage.setItem("filteredTodos", JSON.stringify(filteredTodos));
  }, [todos, activeFilterButton, filteredTodos]);

  const firstUncompletedTodoId = todos.find((todo) => !todo.completed)?.id;

  const unCompletedTodosCount = todos.filter((todo) => !todo.completed).length;
  const completedTodosCount = todos.filter((todo) => todo.completed).length;

  const staircaseEffectStyles =
    "before:w-[27rem] before:absolute before:-bottom-2 before:border-b before:h-2 before:left-2 before:bg-white after:absolute after:-bottom-4 after:w-[26rem] after:border-b after:border-gray-200 before:border-gray-200 before:z-20 after:h-3 after:left-4 after:bg-white after:z-10";

  const TodoElement = useMemo(
    () =>
      filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          changeCompletionStatus={changeCompletionStatus}
          firstUncompletedTodoId={firstUncompletedTodoId}
        />
      )),
    [filteredTodos, updateTodo, deleteTodo, changeCompletionStatus]
  );

  return (
    <main className="flex flex-col items-center min-h-screen bg-cyan-200">
      <Header />
      <section
        className={`-mt-2 relative shadow-lg mb-16 shadow-gray-400 ${
          todos.length > 0 ? staircaseEffectStyles : ""
        }`}
      >
        <Form
          handleFormChange={handleFormChange}
          formValue={formValue}
          changeCompletionStatusForAllTodos={changeCompletionStatusForAllTodos}
          createTodo={createTodo}
          todosLength={todos.length}
          unCompletedTodosCount={unCompletedTodosCount}
          completedTodosCount={completedTodosCount}
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
