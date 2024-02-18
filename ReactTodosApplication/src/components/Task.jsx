import React from "react";
import Checkbox from "./Checkbox";
export default function Task() {
  //   const [isClicked, setIsClicked] = React.useState(false);
  //   function handleOnChange() {}
  return (
    <li className="flex justify-between py-1 pl-2 pr-5 bg-white border-b">
      <Checkbox />
      <input
        type="text"
        // {...(isClicked ? { readOnly: true } : {})}
        value="Hello React!"
        className="w-full p-2 mr-3"
        // onClick={() => {}}
      />
      <button title="Delete">
        <svg
          className="w-4 h-4 transition-colors duration-150 fill-red-300 hover:fill-red-700"
          aria-hidden="true"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
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
