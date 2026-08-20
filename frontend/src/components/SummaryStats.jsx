import { useNote } from "../hooks/useNote";
import { useQuery } from "@tanstack/react-query";

function SummaryStats({ title, copy, action }) {
  const {
    data: notes = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: useNote,
  });
  return (
    <>
      <p className="eyebrow">Workspace</p>
      <h1>{title}</h1>
      <p className="summary-copy">{copy}</p>

      <div className="summary-grid">
        <div>
          <strong>{isLoading ? "…" : isError ? "—" : notes.length}</strong>
          <span>Total notes</span>
        </div>
      </div>
      {action}
    </>
  );
}

export default SummaryStats;
