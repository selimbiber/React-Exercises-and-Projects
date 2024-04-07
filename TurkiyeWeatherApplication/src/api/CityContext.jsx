/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CityContext = createContext();

export default function CityProvider({ children }) {
  const [city, setCity] = useState(localStorage.getItem("city") || "Istanbul");

  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);

  const values = useMemo(
    () => ({
      city,
      setCity,
    }),
    [city, setCity]
  );

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
}

export const useCity = () => useContext(CityContext);
