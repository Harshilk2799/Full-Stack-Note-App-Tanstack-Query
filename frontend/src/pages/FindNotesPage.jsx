import NotesList from '../components/NotesList'
import SummaryStats from '../components/SummaryStats'
import Workspace from '../components/Workspace'

function FindNotesPage() {
  return (
    <Workspace
      summary={
        <SummaryStats
          title="Find Notes"
          copy="Search by title or description and narrow the list quickly."
          action={
            <div className="topic-list" aria-label="Search fields">
              <span>Title</span>
              <span>Description</span>
            </div>
          }
        />
      }
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Search</p>
          <h2>Find Notes</h2>
        </div>
      </div>

      <div className="find-panel">
        <label className="search-box large-search">
          <span>Keyword</span>
          <input type="search" placeholder="Search notes..." />
        </label>

        <div className="filter-row">
          <button type="button" className="filter-chip active">
            All
          </button>
          <button type="button" className="filter-chip">
            Title
          </button>
          <button type="button" className="filter-chip">
            Description
          </button>
        </div>
      </div>

      <NotesList compact />
    </Workspace>
  )
}

export default FindNotesPage
