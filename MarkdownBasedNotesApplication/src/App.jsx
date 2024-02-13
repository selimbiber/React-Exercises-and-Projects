import { nanoid } from "nanoid";
import React from "react";
import Split from "react-split";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = React.useState(notes[0]?.id || "");

  const currentNote = notes.find((note) => note.id === currentNoteId) || notes[0];

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((oldNotes) => {
      const newArray = [];
      for (const oldNote of oldNotes) {
        if (oldNote.id === currentNoteId) {
          // Put the most recently-modified note at the top
          newArray.unshift({ ...oldNote, body: text });
        } else {
          newArray.push(oldNote);
        }
      }
      return newArray;
    });
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  }

  return (
    <main className="font-['Karla', sans-serif]">
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="flex">
          <Sidebar
            notes={notes}
            currentNote={currentNote}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={currentNote} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="flex flex-col items-center justify-center gap-y-4 bg-slate-200">
          <h1 className="text-3xl font-bold">You have no notes</h1>
          <button
            className="cursor-pointer font-bold text-xl bg-[#4A4E74] text-white rounded-sm p-4 w-60 border-[#4A4E74] border-4 hover:text-[#4A4E74] hover:bg-transparent hover:scale-110 transition-transform duration-100"
            onClick={createNewNote}
          >
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
