import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getNote();
  }, [id]);

  const getNote = async () => {
    if (id === "new") return;
    const response = await fetch(`http://localhost:8000/api/notes/${id}`);
    const data = await response.json();
    setNote(data);
  };

  const updateNote = async () => {
    await fetch(`http://localhost:8000/api/notes/${id}/update/`, {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(note),
    });
  };

  const createNote = async () => {
    await fetch(`http://localhost:8000/api/notes/create/`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(note),
    });
  };

  const deleteNote = async () => {
    await fetch(`http://localhost:8000/api/notes/${id}/delete/`, {
      method: "DELETE",
      headers: { "Content-Type": "Application/json" },
    });
    navigate("/");
  };

  const handleSubmit = async () => {
    if (id !== "new" && !note.body) {
      deleteNote();
    } else if (id !== "new") {
      await updateNote();
    } else if (id === "new" && note?.body !== null) {
      createNote();
    }
    navigate("/");
  };

  const handleChange = (value) => {
    setNote((note) => ({ ...note, body: value }));
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <FaArrowLeft onClick={handleSubmit} />
        </h3>
        {id !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>

      <textarea
        value={note?.body}
        onChange={(e) => handleChange(e.target.value)}
      ></textarea>
    </div>
  );
};

export default NotePage;
