/* eslint-disable react/prop-types */
import React from "react";
export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false);
  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <li className="flex flex-col pb-2 border-b-2 gap-y-1">
      {props.setup && <h2 className="font-semibold">{props.setup}</h2>}
      {isShown && <p>{props.punchline}</p>}
      <button
        className="h-12 transition-colors duration-150 border-2 border-black hover:bg-black hover:text-white"
        onClick={toggleShown}
      >
        {isShown ? "Hide" : "Show"} Punchline
      </button>
    </li>
  );
}
