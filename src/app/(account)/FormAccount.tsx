"use client";

import { useState } from "react";

const FormAccount = () => {
  const [input, setInput] = useState("");

  return (
    <label className="dark:text-gray-600 p-2 my-4 w-60 rounded-lg bg-gray-400 mx-auto block">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    </label>
  );
};

export default FormAccount;
