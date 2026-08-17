export async function useCreateNote(note) {
  const response = await fetch("http://127.0.0.1:8000/api/notes/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: note.title,
      description: note.description,
    }),
  });
  if (!response.ok) throw new Error("Can not add new note!");
  const data = await response.json();
  return data;
}
