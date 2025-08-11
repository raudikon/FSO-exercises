import { useState } from 'react'

const App = () => {
  //Save clicks of the button to their own state 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return(
    <div>
      <h1>Provide feedback! :3</h1>
      <Button text="Good" onClick={() => setGood(good+1)}/>
      <Button text="Neutral" onClick={() => setNeutral(neutral+1)}/>
      <Button text="Bad" onClick={() => setBad(bad+1)}/>
      {console.log("stats", good, neutral, bad)}
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatsLine text="Good" value={good}/>
          <StatsLine text="Neutral" value={neutral}/>
          <StatsLine text="Bad" value={bad}/>
          <StatsLine text="Total" value={good+bad+neutral}/>
          <StatsLine 
            text="Average" 
            value={
                (good + bad + neutral) > 0 ? 
                (good-bad)/(good + bad + neutral) 
                : "No feedback yet" }
          />
          <StatsLine 
            text="Positive %" 
            value={
                (good + bad + neutral) > 0 ? 
                (good)/(good + bad + neutral)*100 + "%" 
                : "No feedback yet" }
          />
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => {

  return(
    <button onClick={props.onClick}>{props.text}</button>
  )

}

const StatsLine = (props) => {

  return(
    <>
      <tr>
        <td>{props.text} </td>
        <td>{props.value} </td>
      </tr>
    </>
  )
}

export default App
