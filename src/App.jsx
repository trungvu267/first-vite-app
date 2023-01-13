import { useState, useMemo, useEffect, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Children from './components/Children'

// const arr = ['one', 'two', 'three']
// const fetchData = async () => {
//   await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json))
// }
function App() {
  const [count, setCount] = useState(0)
  const arr = useMemo(() => {
    return ['one', 'two', 'three']
  }, [])
  const fetchData = useCallback(async () => {
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json))
  }, [])
  useEffect(() => {
    fetchData()
  }, [])
  console.log('run app')
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Children arr={arr} fetchData={fetchData} />
    </div>
  )
}

export default App
