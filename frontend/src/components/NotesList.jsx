import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useNote } from "../hooks/useNote";
import { Link } from "react-router-dom";
import { useDeleteNote } from "../hooks/useDeleteNote";

function NotesList({ compact = false }) {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["notes"],
    queryFn: ({ signal }) => useNote({ signal }),
    staleTime: 1000 * 30, // 5 sec
    // gcTime: 1000,
  });

  const {
    mutate: deleteNote,
    isPending: isDeleting,
    variables,
  } = useMutation({
    mutationFn: useDeleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
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
              <Link to={`/view-note/${note.id}`} className="note-link">
                <h3>{note.title}</h3>
                <p>{note.description}</p>
              </Link>
            </div>

            <div className="note-actions" aria-label={`${note.title} actions`}>
              <button type="button" className="edit-button">
                <Link to={`/edit-note/${note.id}`} className="edit-button">
                  Edit
                </Link>
              </button>

              <button
                type="button"
                onClick={() => deleteNote({ id: note.id })}
                className="delete-button"
                aria-label="Delete note"
                disabled={isDeleting && variables?.id === note.id}
              >
                {isDeleting && variables?.id === note.id ? "..." : "X"}
              </button>
            </div>
          </article>
        ))}
    </div>
  );
}

export default NotesList;
