export default function Header() {
  return (
    <header>
      <h1 className="text-3xl lg:text-[3rem] font-semibold text-center">
        Türkiye
        <img
          src="https://cdn-icons-png.flaticon.com/512/10029/10029532.png"
          alt=""
          className="inline-block w-12 h-12 mb-2 ml-6 lg:w-16 lg:h-16"
        />
        <br /> Weather Application
      </h1>
    </header>
  );
}
