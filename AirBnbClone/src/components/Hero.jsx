export default function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-[1440px]">
        <img
          src="../assets/photo-grid.png"
          alt=""
          className="mx-auto px-20 py-14 duration-150 hover:scale-105 lg:w-3/4"
        />
        <h1 className="px-5 text-[calc(1.425rem+2.1vw)] font-bold lg:text-center lg:text-[3rem]">
          Online Experiences
        </h1>
        <p className="w-4/6 max-w-[28rem] px-5 lg:mx-auto lg:text-center">
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
