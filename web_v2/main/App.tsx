import { Button, Space, Typography } from 'antd'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.less'
import useStore from './store/useStore'
import MarkdownRenderer from './components/MarkdownRenderer'

const { Title, Paragraph } = Typography

function App() {
  const { count, increment } = useStore()
  const markdown = `# Welcome to TradingAgents-CN\n\nThis is a sample markdown content.\n\n- Feature 1\n- Feature 2\n- Feature 3`

  return (
    <div className="App">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title level={1}>Vite + React + Ant Design</Title>
      <div className="card">
        <Space>
          <Button type="primary" onClick={increment}>
            count is {count}
          </Button>
        </Space>
        <Paragraph>
          Edit <code>main/App.tsx</code> and save to test HMR
        </Paragraph>
      </div>
      <div className="markdown-content">
        <MarkdownRenderer markdown={markdown} />
      </div>
      <Paragraph className="read-the-docs">
        Click on the Vite and React logos to learn more
      </Paragraph>
    </div>
  )
}

export default App
