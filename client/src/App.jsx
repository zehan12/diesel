import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <h1 className="text-3xl font-bold underline bg-red-300" >
        Hello world!
      </h1>
    </div>
  )
}

export default App
