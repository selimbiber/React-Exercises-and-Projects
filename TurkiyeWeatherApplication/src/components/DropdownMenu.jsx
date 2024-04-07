import CitySelect from "./CitySelect";

export default function DropdownMenu() {
  return (
    <form className="flex gap-x-4">
      <label htmlFor="cities" className="text-lg font-semibold">
        Select a city:
      </label>
      <CitySelect />
    </form>
  );
}
