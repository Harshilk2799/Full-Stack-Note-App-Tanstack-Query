export async function useViewNote({ signal, id }) {
  const response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
    signal,
  });
  if (!response.ok) throw new Error("Unable to fetch Notes!");
  const data = await response.json();
  return data;
}
