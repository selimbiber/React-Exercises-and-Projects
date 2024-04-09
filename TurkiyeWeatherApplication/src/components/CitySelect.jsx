import { useCity } from "../api/CityContext";
import { cities } from "../data/cities";
export default function CitySelect() {
  const { city, setCity } = useCity();

  return (
    <select
      name="cities"
      value={city}
      id="cities"
      className="w-48 pl-1 border border-black focus:border-2"
      onChange={(event) => setCity(event.target.value)}
    >
      {cities.map((value) => {
        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
}
