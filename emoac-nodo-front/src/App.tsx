import './App.css'
import TreeView from './components/nodos/nodos-view'
import Header from './components/header/Header'

function App() {
  return (
    <div className="App">
    <Header title="Lista de nodos React con Vite y TypeScript" />
    <main style={mainStyle}>
      <TreeView />
    </main>
  </div>
  )
}

const mainStyle: React.CSSProperties = {
  padding: '20px',
  textAlign: 'center',
};

export default App
