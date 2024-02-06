import Header from "./components/Header";
import Joke from "./components/Joke";
import JokeData from "./data/JokesData";

import "./index.css";

export default function App() {
  const jokes = JokeData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });
  return (
    <section
      aria-label="jokes list"
      className="flex flex-col items-center max-h-screen p-10 bg-yellow-200 gap-y-5"
    >
      <Header />
      <ul className="flex flex-col h-screen gap-y-5">{jokes}</ul>
    </section>
  );
}
