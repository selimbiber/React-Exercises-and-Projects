/* eslint-disable react/prop-types */
export default function Sidebar(props) {
  const noteElements = props.notes.map((note) => (
    <div key={note.id}>
      <div
        className={`group min-h-12 py-3 border-b-2 border-[#4A4E74] pl-4 pr-5 cursor-pointer flex justify-between items-start gap-x-2 ${
          note.id === props.currentNote.id ? "bg-[#4A4E74]" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
        role="button"
        aria-label="click for note details"
      >
        <h3 className={`${note.id === props.currentNote.id ? "text-white" : ""}`}>
          {note.body.split("\n")[0]}
        </h3>
        <button
          className="hidden mt-2 transition-transform duration-100 cursor-pointer bg-none group-hover:block hover:scale-110"
          onClick={(event) => props.deleteNote(event, note.id)}
          aria-label="delete note"
        >
          <svg
            className="w-5 h-5 fill-red-500"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 485 485"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <rect x="67.224" width="350.535" height="71.81" />
                <path
                  d="M417.776,92.829H67.237V485h350.537V92.829H417.776z M165.402,431.447h-28.362V146.383h28.362V431.447z M256.689,431.447
			h-28.363V146.383h28.363V431.447z M347.97,431.447h-28.361V146.383h28.361V431.447z"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  ));

  return (
    <section className="w-1/5 h-screen overflow-y-auto">
      <div className="flex items-center justify-between p-4 gap-x-2">
        <h2 className="text-2xl">Notes</h2>
        <button
          className="cursor-pointer bg-[#4A4E74] text-white rounded-md h-8 w-8 hover:scale-110 transition-transform duration-100"
          onClick={props.newNote}
        >
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
