import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useViewNote } from "../hooks/useViewNote";

function ViewNotePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["notes", id],
    queryFn: () => useViewNote(id),
  });

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto mt-10 px-4">
        <button className="btn btn-primary" onClick={navigate(-1)}>
          Back
        </button>
        <div className="animate-pulse">
          <div className="h-8 w-2/3 bg-gray-200 rounded mb-4" />
          <div className="h-4 w-full bg-gray-200 rounded mb-2" />
          <div className="h-4 w-5/6 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-3/4 bg-gray-200 rounded" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-2xl mx-auto mt-10 px-4">
        <button className="btn btn-primary" onClick={navigate(-1)}>
          Back
        </button>
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4">
          <p className="font-medium">Something went wrong</p>
          <p className="text-sm mt-1">
            {error?.message ?? "Unable to load this note."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4 mt-5">
      <div className="p-2 bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
          {data?.title}
        </h1>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {data?.description}
        </p>
      </div>
      <button className="btn btn-primary mt-3" onClick={navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default ViewNotePage;
