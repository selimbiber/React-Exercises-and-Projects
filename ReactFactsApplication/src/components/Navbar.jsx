export default function Navbar() {
  return (
    <header className="bg-[#21222A]">
      <div className="max-w-[768px] mx-auto p-5 flex justify-between items-center">
        <nav className="flex gap-x-2 items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png"
            alt="react logo"
            className="w-12"
          />
          <h1 className="text-[#61DBFB] text-3xl font-bold">ReactFacts </h1>
        </nav>
        <h2>
          <a href="#" className="no-underline text-white text-lg hover:underline">
            React Course - Project 1
          </a>
        </h2>
      </div>
    </header>
  );
}
