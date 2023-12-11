import ReactMarkdown from 'react-markdown';

const MarkdownPreview = ({ markdown }) => {
  return (
    <div className="w-full h-full p-4 overflow-auto markdown-preview">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownPreview;
