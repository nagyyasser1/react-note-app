import React from 'react'
import Note from '../component/Note'
import AddNote from './AddNote'

function NotesList({ notes, handleAddNote, deleteNote }) {
  return (
    <div className="notes-list">
      {notes.map((e, idx) => {
        return (
          <div key={idx}>
            <Note note={e} deleteNote={deleteNote} />
          </div>
        )
      })}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NotesList
