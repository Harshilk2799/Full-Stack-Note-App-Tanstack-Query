export async function useEditNote({ id, payload }) {
  const response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: payload.title,
      description: payload.description,
    }),
  });
  if (!response.ok) throw new Error("Can not update note!");
  const data = await response.json();
  return data;
}
