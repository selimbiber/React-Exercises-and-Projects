/* eslint-disable react/prop-types */
export default function Todo(props) {
  const customCheckboxStyles =
    "before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:scale-105 hover:before:opacity-0";

  return (
    <li className="flex justify-between py-1 pl-2 pr-5 bg-white border-b">
      <label className="relative flex items-center p-3 rounded-full cursor-pointer">
        <input
          type="checkbox"
          title={`Click the box to mark as ${
            props.completed ? "uncompleted" : "complete"
          } this todo`}
          onChange={() => props.changeCompletionStatus(props.id)}
          checked={props.completed}
          className={customCheckboxStyles}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <input
        type="text"
        value={props.title}
        onChange={(event) => props.updateTodo(event, props.id)}
        className={`w-full p-2 mr-3 ${
          props.completed && "line-through decoration-red-300 decoration-2 text-gray-400"
        }`}
      />
      <button title="Delete" onClick={() => props.deleteTodo(props.id)}>
        <svg
          className="w-4 h-4 transition-colors duration-150 fill-red-300 hover:fill-red-700"
          aria-hidden="true"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 460.775 460.775"
          xmlSpace="preserve"
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>
          </g>
        </svg>
      </button>
    </li>
  );
}
