import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useViewNote } from "../hooks/useViewNote";
import { useEditNote } from "../hooks/useEditNote";
import { useState, useEffect } from "react";

function EditNotePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["notes", { id: params.id }],
    queryFn: ({ signal }) => useViewNote({ signal, id: params.id }),
  });

  const { mutate } = useMutation({
    mutationFn: useEditNote,
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ["notes", { id: params.id }] });
    //   navigate(`/view-note/${params.id}`);
    // },
    onSuccess: () => {
      console.log("Note has been updated!");
    },
    onMutate: async (data) => {
      const note = data.payload;

      // cancelling query to avoid old server data
      await queryClient.cancelQueries({
        queryKey: ["notes", { id: params.id }],
      });
      // Getting previous data (note)
      const previousNote = queryClient.getQueryData([
        "notes",
        { id: params.id },
      ]);
      queryClient.setQueryData(["notes", { id: params.id }], note);

      return { previousNote };
    },
    onError: (error, data, context) => {
      // console.log(error);
      queryClient.setQueryData(
        ["notes", { id: params.id }],
        context.previousNote
      );
      console.log("Note failed to update!");
    },
    onSettled: () => {
      // query invalidate = UI + backend => sync
      queryClient.invalidateQueries({
        queryKey: ["notes", { id: params.id }],
      });
    },
  });

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
    }
  }, [data]);

  if (isLoading) return <p>Loading note...</p>;
  if (isError) return <p>Error loading note: {error.message}</p>;

  function handleSubmit(e) {
    e.preventDefault();

    mutate({
      id: params.id,
      payload: { title: title, description: description },
    });
    navigate(`/view-note/${params.id}`);
  }

  return (
    <>
      {data && (
        <form className="note-form" onSubmit={handleSubmit}>
          <label>
            <span>Title</span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note title"
            />
          </label>

          <label className="full-field">
            <span>Description</span>
            <textarea
              rows="8"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write the note details..."
            />
          </label>

          <div className="form-actions">
            <NavLink className="secondary-action" to="/">
              Cancel
            </NavLink>
            <button type="submit" className="primary-action">
              Save Note
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default EditNotePage;
