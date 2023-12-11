"use client";
import { useState } from "react";

const MarkdownSplitLayout = () => {
  const [markdown, setMarkdown] = useState("# Write your Markdown here");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 p-4 bg-gray-200">
        <textarea
          value={markdown}
          onChange={handleChange}
          className="w-full h-full text-gray-800 resize-none outline-none"
        />
      </div>

      <div className="flex-1 p-4 bg-gray-100 overflow-auto">
        <div className="markdown-preview">{markdown}</div>
      </div>
    </div>
  );
};

export default MarkdownSplitLayout;
