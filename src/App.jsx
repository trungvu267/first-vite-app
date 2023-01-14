import { useState, useMemo, useEffect, useCallback, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Children from './components/Children'

// const arr = ['one', 'two', 'three']
// const fetchData = async () => {
//   await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json))
// }
// const ref = React.createRef()
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
  // const [inputValue, setInputValue] = useState('')
  const countRef = useRef(0)
  const [countV2, setCountV2] = useState(0)
  const input = useRef()
  // useEffect(() => {
  //   // countRef.current = countRef.current + 1
  //   setCountV2((preCount) => preCount + 1)
  // })
  const focusInput = () => {
    input.current.focus()
    console.log(input.current.value)
  }
  return (
    <div className="App">
      <div>
        <input
          type="text"
          ref={input}
          // value={inputValue}
          // onChange={(e) => setInputValue(e.target.value)}
        />
        {/* <h1>Render Count: {countRef.current}</h1> */}
        {/* <h1>Render Count: {countV2}</h1> */}
        <button onClick={focusInput}>Focus Input</button>
      </div>
      {/* <div>
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
      <Children arr={arr} fetchData={fetchData} /> */}
      {/* <FancyButton ref={ref}>Click me!</FancyButton> */}
    </div>
  )
}

export default App
