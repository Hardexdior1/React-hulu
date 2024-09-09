import React, { useState } from "react";

const SlugGenerator = () => {
  const [title, setTitle] = useState(""); // Title input state
  const [slug, setSlug] = useState(""); // Slug output state

  // Function to generate slug
  const generateSlug = (input) => {
    if (!input.trim()) {
      return "untitled"; // Default slug if no input is provided
    }

    return input
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-zA-Z0-9 ]+/g, "-") // Replace special characters with hyphens
      .replace(/\s+/g, "-"); // Replace spaces with hyphens
  };

  // Handle generate button click
  const handleGenerate = () => {
    const generatedSlug = generateSlug(title);
    setSlug(generatedSlug);
  };

  return (
    <div className="grid gap-5 p-5 mx-md">
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          className="w-full p-5 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a title"
        />
      </div>

      <button className="w-full p-4 font-bold text-white bg-black rounded-md" onClick={handleGenerate}>
        Generate Slug
      </button>

      <div>
        <label htmlFor="slug">Generated Slug:</label>
        <input
          type="text"
          className="w-full p-5 rounded-md"
          id="slug"
          value={slug}
          readOnly
          placeholder="Generated slug will appear here"
        />
      </div>
    </div>
  );
};

export default SlugGenerator;
