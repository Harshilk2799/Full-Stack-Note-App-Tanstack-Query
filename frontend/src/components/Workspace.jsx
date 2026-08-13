function Workspace({ children, summary }) {
  return (
    <section className="workspace">
      <aside className="summary-panel" aria-label="Page summary">
        {summary}
      </aside>
      <section className="content-section">{children}</section>
    </section>
  )
}

export default Workspace
