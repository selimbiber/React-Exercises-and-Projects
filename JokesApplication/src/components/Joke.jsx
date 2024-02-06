/* eslint-disable react/prop-types */
export default function Joke(props) {
  return (
    <li className="flex flex-col pb-2 border-b-2 gap-y-1">
      {props.setup && <h2 className="font-semibold">{props.setup}</h2>}
      {props.punchline && <p>{props.punchline}</p>}
    </li>
  );
}
