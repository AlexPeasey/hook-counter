import { useReducer, useContext } from 'react'
import CounterContext from './CounterContext'

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
        return state + 1
    case "DEC":
        return state - 1
    case "ZERO":
        return 0
    default:
        return state
  }
}

const Counter = () => {
  const [counter, dispatch] = useContext(CounterContext)
  return (
    <div>{counter}</div>
  )
}

const Button = ({ label, type }) => {
  const [counter, dispatch] = useContext(CounterContext)

  return (
    <div>
      <button onClick={() => dispatch({type})}>{label}</button>
    </div>
  )
}

const App = () => {
  const [counter, counterDispatch] = useReducer(counterReducer, 0)

  return (
    <CounterContext.Provider value={[counter, counterDispatch]}>
      <Counter />
      <div>
      <Button type="INC" label="+"></Button>
      <Button type="DEC" label="-"></Button>
      <Button type="ZERO" label="0"></Button>
      </div>
    </CounterContext.Provider>
  )
}

export default App