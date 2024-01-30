import { useState, useEffect } from "react";

const initialFormValues = { full_name: "", phone_number: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.full_name === "" || form.phone_number === "") return;
    addContact([...contacts, form]);
  };
  return (
    <div>
      <svg
        className="h-20 mx-auto mb-4"
        version="1.1"
        viewBox="0 0 337.56 337.56"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m201.06 67.703c0 13.337 10.912 24.248 24.248 24.248h80.504c13.336 0 24.248-10.911 24.248-24.248v-28.33c0-13.337-10.912-24.248-24.248-24.248h-80.504c-13.336 0-24.248 10.911-24.248 24.248v28.33z"
          fill="#61B4E4"
        />
        <path
          d="m201.06 144.53c0 13.337 10.912 24.248 24.248 24.248h80.504c13.336 0 24.248-10.911 24.248-24.248v-28.331c0-13.336-10.912-24.248-24.248-24.248h-80.504c-13.336 0-24.248 10.912-24.248 24.248v28.331z"
          fill="#005CB9"
        />
        <path
          d="m201.06 221.36c0 13.336 10.912 24.248 24.248 24.248h80.504c13.336 0 24.248-10.912 24.248-24.248v-28.331c0-13.336-10.912-24.248-24.248-24.248h-80.504c-13.336 0-24.248 10.912-24.248 24.248v28.331z"
          fill="#FEE050"
        />
        <path
          d="m201.06 298.18c0 13.337 10.912 24.248 24.248 24.248h80.504c13.336 0 24.248-10.911 24.248-24.248v-28.33c0-13.337-10.912-24.248-24.248-24.248h-80.504c-13.336 0-24.248 10.911-24.248 24.248v28.33z"
          fill="#AF8400"
        />
        <path
          d="m259.32 35.36c0-13.75-11.25-25-25-25h-201.82c-13.75 0-25 11.25-25 25v266.84c0 13.75 11.25 25 25 25h201.82c13.75 0 25-11.25 25-25v-266.84z"
          fill="#E8E8E8"
        />

        <path
          d="m66.891 198.7h133.04c-3.889-18.288-15.125-33.858-30.472-43.474 10.765-9.798 17.523-23.924 17.523-39.628 0-29.586-23.984-53.57-53.57-53.57-29.584 0-53.57 23.984-53.57 53.57 0 15.704 6.758 29.83 17.524 39.628-15.346 9.616-26.582 25.186-30.47 43.474z"
          fill="#C3C6C8"
        />

        <path
          d="m66.891 206.2h133.04c2.263 0 4.405-1.021 5.829-2.78s1.978-4.066 1.507-6.279c-3.595-16.907-13.071-32.176-26.474-43.02 8.782-10.818 13.689-24.438 13.689-38.522 0-33.674-27.396-61.07-61.07-61.07s-61.07 27.396-61.07 61.07c0 14.084 4.908 27.704 13.689 38.522-13.402 10.844-22.878 26.112-26.472 43.02-0.471 2.213 0.083 4.521 1.507 6.279 1.425 1.759 3.567 2.78 5.83 2.78zm34.452-44.618c1.988-1.245 3.279-3.35 3.488-5.687s-0.687-4.637-2.422-6.216c-9.579-8.718-15.072-21.14-15.072-34.081 0-25.403 20.667-46.07 46.07-46.07s46.07 20.667 46.07 46.07c0 12.941-5.494 25.363-15.072 34.081-1.735 1.579-2.631 3.879-2.422 6.216s1.5 4.441 3.488 5.687c11.154 6.989 19.735 17.49 24.42 29.618h-112.97c4.685-12.128 13.266-22.63 24.42-29.618zm236.22-93.88v-28.33c0-17.506-14.242-31.748-31.748-31.748h-54.572c-4.932-3.021-10.727-4.765-16.922-4.765h-201.82c-17.92 0-32.5 14.579-32.5 32.5v266.84c0 17.921 14.58 32.5 32.5 32.5h201.82c6.196 0 11.992-1.745 16.925-4.767h54.569c17.506 0 31.748-14.242 31.748-31.748v-28.33c0-9.715-4.391-18.42-11.287-24.248 6.896-5.828 11.287-14.533 11.287-24.248v-28.331c0-9.715-4.391-18.42-11.287-24.248 6.896-5.828 11.287-14.533 11.287-24.248v-28.33c0-9.715-4.391-18.42-11.287-24.248 6.897-5.829 11.288-14.534 11.288-24.249zm-85.743 234.5c0 9.649-7.851 17.5-17.5 17.5h-201.82c-9.649 0-17.5-7.851-17.5-17.5v-266.84c0-9.649 7.851-17.5 17.5-17.5h201.82c9.649 0 17.5 7.851 17.5 17.5v266.84zm70.743-4.014c0 9.235-7.513 16.748-16.748 16.748h-41.595c1.673-3.912 2.601-8.216 2.601-12.733v-49.093h38.994c9.235 0 16.748 7.513 16.748 16.748v28.33zm0-76.827c0 9.235-7.513 16.748-16.748 16.748h-38.994v-61.827h38.994c9.235 0 16.748 7.513 16.748 16.748v28.331zm0-76.827c0 9.235-7.513 16.748-16.748 16.748h-38.994v-61.827h38.994c9.235 0 16.748 7.513 16.748 16.748v28.331zm0-76.827c0 9.235-7.513 16.748-16.748 16.748h-38.994v-49.091c0-4.518-0.929-8.822-2.602-12.735h41.596c9.235 0 16.748 7.513 16.748 16.748v28.33zm-282.15 177.32h185.99v-15h-185.99v15zm23.417 29.664h139.16v-15h-139.16v15z"
          fill="#071C2C"
        />
      </svg>
      <form className="flex flex-col gap-y-2" onSubmit={onSubmit}>
        <label>
          <input
            className="border w-72 p-2"
            name="full_name"
            value={form.full_name}
            placeholder="Full Name"
            onChange={onChangeInput}
          />
        </label>
        <label>
          <input
            className="border w-72 p-2"
            name="phone_number"
            value={form.phone_number}
            placeholder="Phone Number"
            onChange={onChangeInput}
          />
        </label>
        <div>
          <button className="bg-white border w-72 p-2 font-bold hover:bg-black hover:text-white hover:scale-105 transition-all duration-150 ">
            Add New Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
