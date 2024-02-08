export default function Navbar() {
  return (
    <header className="shadow-[#d3d3d3_0px_5px_5px_0px]">
      <div className="mx-auto max-w-[1440px]">
        <nav className="flex flex-row items-center justify-between p-5 lg:px-12">
          <a
            href="https://www.airbnb.com/"
            title="homepage"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="../public/assets/airbnb-logo.png"
              alt="airbnb logo"
              className="h-12 w-28"
            />
          </a>
          <a
            href="https://scrimba.com/playlist/pqQgrcN"
            title="scrimba react course"
            target="_blank"
            rel="noreferrer"
            className="text-xl font-semibold no-underline hover:underline"
          >
            React Course - Project 2
          </a>
        </nav>
      </div>
    </header>
  );
}
