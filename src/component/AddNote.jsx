import React, { useState } from 'react'

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState('')
  const charLimit = 200
  const handleChange = (e) => {
    if (charLimit - e.target.value.length >= 0) setNoteText(e.target.value)
  }
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText)
      setNoteText('')
    }
  }
  return (
    <div className="note new">
      <textarea
        rows="4 "
        cols="10"
        placeholder="Type to add a note..."
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  )
}

export default AddNote
