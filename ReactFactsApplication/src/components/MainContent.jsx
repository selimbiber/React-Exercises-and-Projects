export default function MainContent() {
  return (
    <section className="bg-[#282D35] h-screen">
      <div className="max-w-[768px] mx-auto p-5 flex flex-col gap-y-6">
        <h3 className="text-white text-3xl font-bold">Fun facts about React</h3>
        <ul className="text-white text-sm flex flex-col gap-y-4 pl-4">
          <li
            className="no-list flex items-center gap-x-2 leading-tight before:block 
                before:h-2 before:w-2 before:bg-[#61DAFB] before:rounded-full
                "
          >
            Was first released in 2013
          </li>
          <li
            className="no-list flex items-center gap-x-2 leading-tight before:block 
                before:h-2 before:w-2 before:bg-[#61DAFB] before:rounded-full
                "
          >
            Was originally created by Jordan Walker
          </li>
          <li
            className="no-list flex items-center gap-x-2 leading-tight before:block 
                before:h-2 before:w-2 before:bg-[#61DAFB] before:rounded-full
                "
          >
            Has well over 100K stars on GitHub
          </li>
          <li
            className="no-list flex items-center gap-x-2 leading-tight before:block 
                before:h-2 before:w-2 before:bg-[#61DAFB] before:rounded-full
                "
          >
            Is maintained by Facebook
          </li>
          <li
            className="no-list flex items-center gap-x-2 leading-tight before:block 
                before:h-2 before:w-2 before:bg-[#61DAFB] before:rounded-full
                "
          >
            Powers thousands of enterprise apps, including mobile apps
          </li>
        </ul>
      </div>
    </section>
  );
}
