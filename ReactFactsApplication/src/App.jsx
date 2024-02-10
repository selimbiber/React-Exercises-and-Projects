import React from "react";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className="max-h-screen flex flex-col mt-auto font-[inter]">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainContent darkMode={darkMode} />
    </div>
  );
}

export default App;
