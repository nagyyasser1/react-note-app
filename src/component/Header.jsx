import React from 'react'

function Header({ setDarkMode, darkMode }) {
  const handledarkMode = () => {
    setDarkMode((pre) => !pre)
    if (darkMode === true) {
      localStorage.setItem('dark', false)
    } else if (darkMode === false) {
      localStorage.setItem('dark', true)
    }
  }
  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="save" onClick={handledarkMode}>
        Toggle Mode
      </button>
    </div>
  )
}

export default Header
