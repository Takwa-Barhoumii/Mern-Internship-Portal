import React, { useState, useEffect } from "react";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);

  

  // Fetch notes from the backend on component mount
  useEffect(() => {
    fetch('http://localhost:5000/notes')
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(error => console.error('Error fetching notes:', error));
  }, []);

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleAddNote = (event) => {
    event.preventDefault();
    const newNote = {
      title: title,
      content: content,
    };

    fetch('http://localhost:5000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
    .then(response => response.json())
    .then(data => {
      setNotes([data, ...notes]);
      setTitle("");
      setContent("");
    })
    .catch(error => console.error('Error adding note:', error));
  };


  
  const handleUpdateNote = (event) => {
    event.preventDefault();
    if (!selectedNote) return;

    const updatedNote = {
      id: selectedNote.id,
      title: title,
      content: content,
    };

    fetch(`http://localhost:5000/notes/${selectedNote.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedNote),
    })
    .then(response => response.json())
    .then(data => {
      const updatedNotesList = notes.map((note) =>
        note.id === selectedNote.id ? data : note
      );
      setNotes(updatedNotesList);
      setTitle("");
      setContent("");
      setSelectedNote(null);
    })
    .catch(error => console.error('Error updating note:', error));
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  const deleteNote = (event, noteId) => {
    event.stopPropagation();

    fetch(`http://localhost:5000/notes/${noteId}`, {
      method: 'DELETE',
    })
    .then(() => {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    })
    .catch(error => console.error('Error deleting note:', error));
  };

  return (
    <div>
      <div className="overflow-hidden max-w-[1600px] h-[300px] mx-auto  center bg-[url(https://i.imgur.com/uGsAzbW.jpeg)] bg-cover bg-center bg-no-repeat">
        
          
      
      </div>
    <div className="py-12 px-2 app-container">
      <form onSubmit={selectedNote ? handleUpdateNote : handleAddNote} className="note-form">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          required
        ></input>

        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Content"
          rows={10}
          required
        ></textarea>

        {selectedNote ? (
          <div className="edit-buttons">
            <button type="submit">Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <button type="submit">Add Note</button>
        )}
      </form>

      <div className=" notes-grid">
        {notes.map((note) => (
          <div
            key={note.id}
            className="note-item"
            onClick={() => handleNoteClick(note)}
          >
            <div className="notes-header">
              <button onClick={(event) => deleteNote(event, note.id)}>x</button>
            </div>
            <h2 className>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MyNotes;
