import { Sidebar } from './Sidebar'
import './App.css'

function App() {
  return (
    <div>
      <header>Title</header>
      <Sidebar width={300} height={'100vh'}>
        <h1>Nav Item</h1>
        <h1>Nav Item</h1>
        <h1>Nav Item</h1>
        <h1>Nav Item</h1>
        <h1>Nav Item</h1>
      </Sidebar>
      <main>Content</main>
    </div>
  )
}

export default App
