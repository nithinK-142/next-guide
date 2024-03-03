"use client";

import { useState } from "react";

function MakeARequest() {
  const [message, setMessage] = useState<string>("");

  const eraseMessage = async () => setTimeout(() => setMessage(""), 5000);

  const handleGet = async () => {
    try {
      const response = await fetch("/api/get");
      if (!response.ok) throw new Error();
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage("Error occurred while making the request!");
    } finally {
      eraseMessage();
    }
  };

  const handlePost = async () => {
    const payload = {
      requestType: "Post Request",
      message: "Hello from Post 👋",
    };
    try {
      const response = await fetch("/api/post", {
        method: "POST",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error();
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessage("Error occurred while making the request!");
    } finally {
      eraseMessage();
    }
  };

  return (
    <div className="relative w-full flex justify-center">
      <div className="absolute -top-10">
        <p className="tracking-wider">{message}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleGet}
          className="px-4 py-1 transition-colors duration-500 rounded-lg bg-white/80 text-black active:scale-90"
        >
          GET
        </button>
        <button
          onClick={handlePost}
          className="px-4 py-1 transition-colors duration-500 rounded-lg bg-white/80 text-black active:scale-90"
        >
          POST
        </button>
      </div>
    </div>
  );
}

export default MakeARequest;
