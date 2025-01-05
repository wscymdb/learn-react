import Slot from './components/Slot/index.tsx'

function App() {
  return (
    <div className="App">
      <Slot>
        <header style={{ color: 'red' }} slot="header">
          页头
        </header>
        <header style={{ color: 'red' }} slot="header">
          页头2
        </header>
        <header slot="footer">页脚</header>
        <header>默认的</header>
      </Slot>
    </div>
  )
}

export default App
