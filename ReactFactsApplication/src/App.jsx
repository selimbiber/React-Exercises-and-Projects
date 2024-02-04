import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  return (
    <div className="max-h-screen flex flex-col mt-auto font-[inter]">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
