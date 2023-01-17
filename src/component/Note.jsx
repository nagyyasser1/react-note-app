import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

function Note({ note, deleteNote }) {
  return (
    <div className="note">
      <span>{note.text} </span>
      <div className="note-footer">
        <small>{note.date.toString()}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3rem"
          onClick={() => deleteNote(note.id)}
        />
      </div>
    </div>
  )
}

export default Note
