import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <article>
      <h1 className="text-center font-bold text-2xl mb-2">
        Total Contacts: ({filtered.length})
      </h1>
      <input
        className="border w-72 p-2 placeholder:font-normal"
        placeholder="Filter Contacts"
        title="Write a name or number to search"
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="border flex flex-col gap-y-2 bg-amber-200">
        {filtered.map((contact, index) => (
          <li
            className="flex justify-between px-2 py-1 bg-amber-300 hover:bg-amber-500 transition-colors duration-150 cursor-pointer"
            key={index}
          >
            <span title="Full Name">{contact.full_name}</span>
            <span title="Phone Number">{contact.phone_number}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default List;
