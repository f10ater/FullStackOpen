import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => setGood(good + 1)
  const neutralFeedback = () => setNeutral(neutral + 1)
  const badFeedback = () => setBad(bad + 1)
  
  return (
    <div>
      <Heading text='Give Feedback' />
      <Button text='Good' onClick={goodFeedback}/>
      <Button text='Neutral' onClick={neutralFeedback}/>
      <Button text='Bad' onClick={badFeedback}/>
      <Heading text='Statistics' />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Heading = (props) => <h2>{props.text}</h2>

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Stats = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const avg = (good - bad) / total
  if (total === 0)
    return (<p>No feedback given</p>)
  
  return (
    <table>
      <tbody>
        <StatisticsLine text='Good' value={good} />
        <StatisticsLine text='Neutral' value={neutral} />
        <StatisticsLine text='Bad' value={bad} />
        <StatisticsLine text='All' value={total} />
        <StatisticsLine text='Average' value={avg.toFixed(2)} />
        <StatisticsLine text='Positive' value={`${(good * 100 / total).toFixed(1)}%`} />
      </tbody>
    </ table>
  )
}

const StatisticsLine = ({text, value}) => <tr>
                                          <td>{text}</td> 
                                          <td>{value}</td>
                                          </tr>

export default App