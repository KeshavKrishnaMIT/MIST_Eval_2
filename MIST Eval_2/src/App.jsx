import React, { useState } from "react";
import Form from "./components/Form.jsx";
import Display from "./components/Display.jsx";

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Form setData={setData} />
      <Display data={data} />
    </div>
  );
}

export default App;
