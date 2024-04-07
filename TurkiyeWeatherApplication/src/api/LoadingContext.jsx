import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

// eslint-disable-next-line react/prop-types
export default function LoadingProvider({ children }) {
  const [loadingStatus, setLoadingStatus] = useState(true);
  const values = { loadingStatus, setLoadingStatus };

  return <LoadingContext.Provider value={values}>{children}</LoadingContext.Provider>;
}

export const useLoading = () => useContext(LoadingContext);
