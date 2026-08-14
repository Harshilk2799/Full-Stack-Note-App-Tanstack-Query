export async function useSearchNote(searchTerm) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/notes?search=${searchTerm}`
  );
  if (!response.ok) throw new Error("Unable to fetch Notes!");
  const data = await response.json();
  return data;
}
