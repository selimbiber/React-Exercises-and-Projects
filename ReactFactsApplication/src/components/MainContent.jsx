/* eslint-disable react/prop-types */
export default function MainContent(props) {
  const colorMode = props.darkMode ? "dark" : "";
  return (
    <section
      className={`${props.darkMode ? "bg-[#282D35]" : "bg-white"} h-screen ${colorMode}`}
    >
      <div className="max-w-[768px] mx-auto p-5 flex flex-col gap-y-6">
        <h3 className="text-3xl font-bold text-[#282D35] dark:text-white">
          Fun facts about React
        </h3>
        <ul className="flex flex-col pl-4 text-sm text-[#282D35] dark:text-white gap-y-4">
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
