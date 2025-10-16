import React, { useState } from "react";

function Form({ setData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold mb-4">React Form</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full mb-4"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded w-full mb-4"
        required
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
        Submit
      </button>
    </form>
  );
}

export default Form;
