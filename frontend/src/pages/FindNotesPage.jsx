import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SummaryStats from "../components/SummaryStats";
import Workspace from "../components/Workspace";
import { useSearchNote } from "../hooks/useSearchNote";

function FindNotesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedTerm(searchTerm), 500);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["notes", debouncedTerm],
    queryFn: () => useSearchNote(debouncedTerm),
    enabled: !!debouncedTerm,
  });

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  const notes = data ?? [];

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
          <input
            type="search"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </label>
        {isError && (
          <p role="alert" className="search-error">
            {error?.message ?? "Something went wrong while searching."}
          </p>
        )}
      </div>

      {isLoading && <p className="notes-status">Loading notes...</p>}

      {!isLoading && !isError && debouncedTerm && notes.length === 0 && (
        <p className="notes-status">No notes found.</p>
      )}

      <div className="notes-list compact-list">
        {notes.map((note) => (
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
                aria-label={`Delete ${note.title}`}
              >
                X
              </button>
            </div>
          </article>
        ))}
      </div>
    </Workspace>
  );
}

export default FindNotesPage;
