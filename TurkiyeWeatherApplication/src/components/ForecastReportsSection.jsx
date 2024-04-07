import { useCity } from "../api/CityContext";
import { useLoading } from "../api/LoadingContext";
import { useWeatherData } from "../api/WeatherContext";
import DailyWeatherCard from "./DailyWeatherCard";
import LoadingAnimation from "./LoadingAnimation";

export default function ForecastReports() {
  const { city } = useCity();
  const { loadingStatus } = useLoading();
  const weatherData = useWeatherData();

  const DailyWeatherCards = weatherData.map((dailyData, index) => {
    const { dt_txt, weather, main } = dailyData;
    const { icon, description } = weather[0];
    const { temp_max } = main;

    return (
      <DailyWeatherCard
        key={index}
        day={dt_txt}
        icon={icon}
        description={description}
        temp={temp_max}
      />
    );
  });

  return (
    <section>
      {loadingStatus && <LoadingAnimation />}
      {!loadingStatus && (
        <>
          <h2 className="text-2xl font-bold text-center">
            <span className="underline">{city}</span> Forecast Details
          </h2>
          <ul className="flex flex-wrap justify-center gap-8 my-8">
            {DailyWeatherCards}
          </ul>
        </>
      )}
    </section>
  );
}
