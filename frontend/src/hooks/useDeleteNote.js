export async function useDeleteNote({ id, signal }) {
  const response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
    signal,
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("Unable to delete Note!");

  // DELETE often returns 204 No Content — guard against empty body
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}
