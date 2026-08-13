import NewNoteForm from '../components/NewNoteForm'
import SummaryStats from '../components/SummaryStats'
import Workspace from '../components/Workspace'

function NewNotePage() {
  return (
    <Workspace
      summary={
        <SummaryStats
          title="New Note"
          copy="Capture a fresh idea with a focused title and clear description."
          action={
            <div className="helper-panel">
              <span>Draft flow</span>
              <p>Write the note, then save it when your backend action is ready.</p>
            </div>
          }
        />
      }
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Create</p>
          <h2>New Note</h2>
        </div>
      </div>

      <NewNoteForm />
    </Workspace>
  )
}

export default NewNotePage
