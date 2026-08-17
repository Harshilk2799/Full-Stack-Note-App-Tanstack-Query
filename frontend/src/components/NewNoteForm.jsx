import { NavLink } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useCreateNote } from "../hooks/useCreateNote";
import { useState } from "react";

function NewNoteForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: useCreateNote,
    // onSuccess: () => {
    //   navigate("/");
    // },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notes"],
        // exact: true,
      });
      navigate("/");
    },
  });

  function handleSubmit(e) {
    e.preventDefault();

    const note = { title: title, description: description };
    mutate(note);
  }

  return (
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
  );
}

export default NewNoteForm;
