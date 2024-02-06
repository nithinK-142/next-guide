"use client";

import { useState } from "react";

function SayHello() {
  const [message, setMessage] = useState<string>("");

  const eraseMessage = async () => {
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  const fetchMessage = async (url: string) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else console.error("Failed to fetch data from the API");
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      eraseMessage();
    }
  };

  const handleHello = () => {
    if (message === "") fetchMessage("/api/hello");
    else fetchMessage("/api/hello-again");
  };

  const handleGoodbye = () => {
    fetchMessage("/api/goodbye");
  };

  return (
    <div className="relative">
      <div className="absolute left-1/3 -top-10">
        <p className="tracking-wider">{message}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleHello}
          className="px-4 py-1 transition-colors duration-500 rounded-lg bg-white/80 text-black active:scale-90"
        >
          Say Hello
        </button>
        <button
          onClick={handleGoodbye}
          className="px-4 py-1 transition-colors duration-500 rounded-lg bg-white/80 text-black active:scale-90"
        >
          Say Goodbye
        </button>
      </div>
    </div>
  );
}

export default SayHello;
