import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkDown] = useState('# Markdown Preview')
  return (
    <div className='App'>
      <textarea
        className='input'
        value={markdown}
        onChange={(e) => setMarkDown(e.target.value)}
      />

      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

export default App
