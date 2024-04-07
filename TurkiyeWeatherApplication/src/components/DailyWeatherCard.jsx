/* eslint-disable react/prop-types */
export default function DailyWeatherCard({ day, icon, description, temp }) {
  const givenDate = new Date(day);
  const today = new Date();

  const isItToday =
    givenDate.getFullYear() === today.getFullYear() &&
    givenDate.getMonth() === today.getMonth() &&
    givenDate.getDate() === today.getDate();

  const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][givenDate.getDay()];

  return (
    <li
      className={`${
        isItToday && "bg-[#7fffd4] scale-105"
      } flex flex-col gap-y-4 border-2 rounded-lg border-black shadow-lg shadow-[#4d917aa2] min-w-52 hover:scale-105 hover:duration-200 transition-transform p-2`}
    >
      <h3 className="text-2xl font-bold text-center">{dayName}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        className="h-32"
        alt={description}
      />
      <p className="flex justify-around text-2xl font-bold">{Math.floor(temp)}°</p>
    </li>
  );
}
