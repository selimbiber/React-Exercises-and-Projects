/* eslint-disable react/prop-types */
import React from "react";

export default function Form(props) {
  const [tasksCompleted, setTasksCompleted] = React.useState(false);
  function toggleTasksState() {
    setTasksCompleted((prevTasksState) => !prevTasksState);
  }
  return (
    <form className="relative border-b" onSubmit={props.handleFormSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        className="py-4 pr-4 pl-14 w-96"
        onChange={props.handleFormChange}
        value={props.formValue}
      />
      <button
        title={`Mark tasks as ${tasksCompleted ? "completed" : "uncompleted"}`}
        onClick={toggleTasksState}
      >
        <svg
          className="absolute w-5 h-5 left-5 top-5"
          aria-hidden="true"
          fill="#000000"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330 330"
          xmlSpace="preserve"
        >
          <path
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>
      </button>
    </form>
  );
}
