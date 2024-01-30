import { useState, useEffect } from "react";

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      full_name: "Selim",
      phone_number: "123-456-7890",
    },
    {
      full_name: "Ahmet",
      phone_number: "555-555-5555",
    },
    {
      full_name: "Mehmet",
      phone_number: "111-222-3333",
    },
  ]);

  useEffect(() => {}, [contacts]);
  return (
    <div className="flex flex-col gap-y-4">
      <Form addContact={setContacts} contacts={contacts} />
      <List contacts={contacts} />
    </div>
  );
}

export default Contacts;
