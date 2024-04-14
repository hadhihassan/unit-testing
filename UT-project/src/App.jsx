import './App.css'
import { add } from './util/helper'
function App() {
  return (
    <>
      <div className="card">
        <button >
          count is {add(1, 3)}
        </button>
      </div>
    </>
  )
}
export default App
