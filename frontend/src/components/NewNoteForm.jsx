import { NavLink } from 'react-router-dom'

function NewNoteForm() {
  return (
    <form className="note-form">
      <label>
        <span>Title</span>
        <input type="text" placeholder="Enter note title" />
      </label>

      <label className="full-field">
        <span>Description</span>
        <textarea rows="8" placeholder="Write the note details..." />
      </label>

      <div className="form-actions">
        <NavLink className="secondary-action" to="/">
          Cancel
        </NavLink>
        <button type="button" className="primary-action">
          Save Note
        </button>
      </div>
    </form>
  )
}

export default NewNoteForm
