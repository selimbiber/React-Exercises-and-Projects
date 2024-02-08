/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
    <article className="flex min-w-60 flex-col gap-y-2 p-6">
      <div className="relative mb-1">
        <img
          src={`../assets/${props.coverImg}`}
          alt={props.title}
          className="h-80 w-full rounded-xl shadow-lg shadow-gray-500 duration-150 hover:scale-105"
        />
        <p className="absolute left-2 top-2 rounded bg-white px-2 text-sm">
          {props.openSpots === 0
            ? "SOLD OUT"
            : props.location === "Online"
              ? "ONLINE"
              : null}
        </p>
      </div>
      <p className="flex items-center gap-x-2">
        <img src="../assets/star.png" className="h-4 w-4" alt="star" />
        <strong>{props.stats.rating}</strong>
        <span className="text-gray-300">
          ({props.stats.reviewCount})・{props.location}
        </span>
      </p>
      <p className="mt-auto">
        <strong>From ${props.price}</strong> / person
      </p>
    </article>
  );
}
