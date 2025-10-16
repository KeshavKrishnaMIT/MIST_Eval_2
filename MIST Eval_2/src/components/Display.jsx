import React from "react";

function Display({ data }) {
  if (!data) return null;

  return (
    <div className="mt-4 p-4 bg-white rounded shadow-md w-full max-w-md">
      <h3 className="text-lg font-semibold mb-2">Submitted Data</h3>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
    </div>
  );
}

export default Display;
