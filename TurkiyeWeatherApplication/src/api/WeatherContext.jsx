import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useCity } from "./CityContext";
import { useLoading } from "./LoadingContext";

const WeatherContext = createContext();

// eslint-disable-next-line react/prop-types
export default function WeatherProvider({ children }) {
  const { city } = useCity();
  const { setLoadingStatus } = useLoading();
  const [weatherData, setWeatherData] = useState([]);
  const API_KEY = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoadingStatus(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        const filteredForecasts = response.data.list.reduce((acc, item) => {
          const dateTime = new Date(item.dt * 1000);
          const day = dateTime.toISOString().slice(0, 10);

          if (dateTime.getUTCHours() === 15 && !acc[day]) {
            acc[day] = item;
          }
          return acc;
        }, {});

        const filteredData = Object.values(filteredForecasts);
        setWeatherData(filteredData);
      } catch (error) {
        console.error("Hava durumu bilgileri alınamadı: ", error);
      } finally {
        setLoadingStatus(false);
      }
    };

    if (city && API_KEY) {
      fetchWeatherData();
    }
  }, [city, API_KEY, setLoadingStatus]);

  return (
    <WeatherContext.Provider value={weatherData}>{children}</WeatherContext.Provider>
  );
}

export const useWeatherData = () => useContext(WeatherContext);
