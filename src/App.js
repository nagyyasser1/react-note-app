import NotesList from './component/NotesList'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Search from './component/Search'
import Header from './component/Header'

function App() {
  const [notes, setNotes] = useState([])
  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    const dark = JSON.parse(localStorage.getItem('dark'))
    if (savedNotes.length > 0) {
      setNotes(savedNotes)
    }
    if (dark === true) {
      setDarkMode(true)
    } else if (dark === false) {
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText),
          )}
          handleAddNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  )
}

export default App
