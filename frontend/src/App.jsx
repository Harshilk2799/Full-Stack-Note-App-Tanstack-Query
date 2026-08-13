import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FindNotesPage from './pages/FindNotesPage'
import NewNotePage from './pages/NewNotePage'
import NotesPage from './pages/NotesPage'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/new" element={<NewNotePage />} />
        <Route path="/find" element={<FindNotesPage />} />
      </Routes>
    </main>
  )
}

export default App
