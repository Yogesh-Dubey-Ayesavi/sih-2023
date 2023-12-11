'use client';
import { useState } from 'react';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('# Write your Markdown here');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <textarea
      value={markdown}
      onChange={handleChange}
      className="w-full h-full p-4 text-gray-800"
    />
  );
};

export default MarkdownEditor;
