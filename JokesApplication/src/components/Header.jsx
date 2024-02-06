export default function Header() {
  return (
    <header className="flex flex-col items-center gap-y-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b2/IFunny_Logo.png"
        className="w-32"
        alt="smiling face icon"
      />
      <h1 className="text-3xl font-bold">Jokes List</h1>
    </header>
  );
}
