import ReactMarkdown from 'react-markdown'

interface MarkdownRendererProps {
  markdown: string
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
  return (
    <div className="markdown-body">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer