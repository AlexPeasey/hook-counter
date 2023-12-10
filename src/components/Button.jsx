import { useContext } from "react"
import { useCounterDispatch } from "../CounterContext"

const Button = ({ label, type }) => {

  const dispatch = useCounterDispatch()
  
    return (
      <div>
        <button onClick={() => dispatch({type})}>{label}</button>
      </div>
    )
  }

  export default Button