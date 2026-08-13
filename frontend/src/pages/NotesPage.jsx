import { NavLink } from 'react-router-dom'
import NotesList from '../components/NotesList'
import SummaryStats from '../components/SummaryStats'
import Workspace from '../components/Workspace'

function NotesPage() {
  return (
    <Workspace
      summary={
        <SummaryStats
          title="All Notes"
          copy="A clean place to scan ideas, course notes, and reminders."
          action={
            <label className="search-box">
              <span>Search</span>
              <input type="search" placeholder="Find a note..." />
            </label>
          }
        />
      }
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Latest</p>
          <h2 id="notes-title">All Notes</h2>
        </div>
        <NavLink className="primary-action" to="/new">
          New Note
        </NavLink>
      </div>

      <NotesList />
    </Workspace>
  )
}

export default NotesPage
