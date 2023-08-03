import '../components/ButtonCounter.css'
import { useState } from 'react'

function ButtonCounter() {
  const [count, setCount] = useState(0)
  const handleReset = () => {
    setCount(0)
  }

  return (
    <>
    <div className='buttonCounterCard'>
      <h1>useState ButtonCounter</h1>
      <div className="cardButton">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
                <button onClick={handleReset}>
          Restart {}
        </button>
      </div>
    </div>
    </>
  )
}

export default ButtonCounter
