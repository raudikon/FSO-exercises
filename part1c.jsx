//From the object that React exports, import the property useState. This is named import syntax as part of the module syste 
import { useState } from 'react'

//Root component with arrow functional declaration; bo
const App = () => {
  console.log("line6")
  //Function call to useState. It adds state to component with initial value 0. 
  //Returns an array with two items, [currentValue, functionToUpdateIt]. Here it is destructured with an array. The function is defined by React, and named setCounter by the user.
  //Destructure an array with array syntax, an object with object syntext.
  const [ counter, setCounter ] = useState(0)
  console.log("weee made a call to usestate")
  //This is a regular built-in browser function, not a React component. It waits 1000 seconds then runs the "callback," which here is setCounter.
  // A callback is a function passed into the setTimeout function and executed later after some operation, here waiting 1 second.
  //The setCounter function (predefined by react) updates the counter value and triggers a re-render of the component to reflect the updated state in the UI.
  //The re-render does not re-run line 10 that stets the state to 0. useState only runs once. On re-renders, React keeps track of the state and preserves the value counter.
  setTimeout(
    () => setCounter(counter + 1),
  1000
)

  return (
    <div>{counter}</div>
  )
}

export default App
