import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data/PersonData";
import "./index.css";

export default function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} {...card} />;
  });
  return (
    <div className="overflow-x-hidden pb-8">
      <Navbar />
      <Hero />
      <section className="">
        <div className="mx-auto flex max-w-[1440px] flex-row overflow-x-auto lg:px-12">
          {cards}
        </div>
      </section>
    </div>
  );
}
