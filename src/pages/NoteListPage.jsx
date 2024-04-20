import { useState } from "react";
import { useEffect } from "react";
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";

const NoteListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/notes/");
    const data = await response.json();
    setNotes(data);
  };

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note, i) => (
          <ListItem key={note.body + i} note={note} />
        ))}
      </div>
      <AddButton />
    </div>
  );
};

export default NoteListPage;
