import { useQuery } from "@tanstack/react-query";
import { useNote } from "../hooks/useNote";

function NotesList({ compact = false }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["notes"],
    queryFn: ({ signal }) => useNote({ signal }),
    staleTime: 1000 * 30, // 5 sec
    // gcTime: 1000,
  });

  if (isLoading) {
    return <p className="notes-status">Loading notes...</p>;
  }

  if (isError) {
    return <p className="notes-status notes-error">Error: {error.message}</p>;
  }

  return (
    <div className={compact ? "notes-list compact-list" : "notes-list"}>
      {data &&
        data.map((note) => (
          <article className="note-card" key={note.id}>
            <div className="note-content">
              <div className="note-meta">
                <span>{note.tag}</span>
                <time dateTime={note.date}>{note.date}</time>
              </div>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
            </div>

            <div className="note-actions" aria-label={`${note.title} actions`}>
              <button type="button" className="edit-button">
                Edit
              </button>
              <button
                type="button"
                className="delete-button"
                aria-label="Delete note"
              >
                X
              </button>
            </div>
          </article>
        ))}
    </div>
  );
}

export default NotesList;
