import { notes } from '../data/notes'

function SummaryStats({ title, copy, action }) {
  return (
    <>
      <p className="eyebrow">Workspace</p>
      <h1>{title}</h1>
      <p className="summary-copy">{copy}</p>

      <div className="summary-grid">
        <div>
          <strong>{notes.length}</strong>
          <span>Total notes</span>
        </div>
      </div>

      {action}
    </>
  )
}

export default SummaryStats
