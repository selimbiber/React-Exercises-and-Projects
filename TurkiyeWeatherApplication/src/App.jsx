import CityProvider from "./api/CityContext";
import LoadingProvider from "./api/LoadingContext";
import WeatherProvider from "./api/WeatherContext";
import DropdownMenu from "./components/DropdownMenu";
import ForecastReportsSection from "./components/ForecastReportsSection";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="grid h-screen p-6 place-items-center gap-y-6 font-orbitron">
      <Header />
      <CityProvider>
        <DropdownMenu />
        <LoadingProvider>
          <WeatherProvider>
            <ForecastReportsSection />
          </WeatherProvider>
        </LoadingProvider>
      </CityProvider>
    </div>
  );
}
