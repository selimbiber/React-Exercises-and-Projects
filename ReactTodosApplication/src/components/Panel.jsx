/* eslint-disable react/prop-types */
export default function Panel(props) {
  const itemOrItems = props.unCompletedTodosCount === 1 ? "item" : "items";
  return (
    <div className="flex justify-between p-5 bg-white border-b">
      <p>
        {props.unCompletedTodosCount} {itemOrItems} left
      </p>
      <div className="flex ml-2 mr-auto gap-x-1">
        <button
          className={`px-2 transition-colors duration-150 border hover:border-gray-300 ${
            props.activeFilterButton === "allTodos"
              ? "border-gray-500"
              : "border-transparent"
          }`}
          onClick={props.showAllTodos}
        >
          All
        </button>
        <button
          className={`px-2 transition-colors duration-150 border hover:border-gray-300 ${
            props.activeFilterButton === "unCompletedTodos"
              ? "border-gray-500"
              : "border-transparent"
          }`}
          onClick={props.filterUncompletedTodos}
          disabled={props.unCompletedTodosCount === 0}
        >
          Active
        </button>
        <button
          className={`px-2 mr-1 transition-colors duration-150 border hover:border-gray-300 ${
            props.activeFilterButton === "completedTodos"
              ? "border-gray-500"
              : "border-transparent"
          }`}
          onClick={props.filterCompletedTodos}
          disabled={props.completedTodosCount === 0}
        >
          Completed
        </button>
      </div>
      {props.completedTodosCount > 0 && (
        <button className="hover:underline" onClick={props.deleteAllCompletedTodos}>
          Clear completed
        </button>
      )}
    </div>
  );
}
