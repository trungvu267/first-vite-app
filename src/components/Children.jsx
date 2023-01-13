import React from 'react'

const Children = ({ fetchData }) => {
  const [count, setCount] = React.useState(0)

  console.log('children re render')
  return (
    <>
      <div>I'm child</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default React.memo(Children)
