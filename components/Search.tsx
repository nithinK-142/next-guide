"use client";

import { useState } from "react";
import Widget from "./Widget";

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="py-4 relative flex items-center text-gray-600">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-4 rounded-lg text-lg focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Widget inputValue={inputValue} />
    </div>
  );
};

export default Search;
