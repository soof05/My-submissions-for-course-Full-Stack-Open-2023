import { useState } from "react";

const Button = ({clickHandler, feedback}) => {
  return (
    <button onClick={clickHandler}>{feedback}</button>
  )
}

const Statistics = (statistics) => {
  return (
    <p>
      good {statistics.good} <br/>
      neutral {statistics.neutral} <br/>
      bad {statistics.bad} <br/>
      total {statistics.total}
    </p>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad , setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const totalSetter = (value) => {
    setTotal(value)
  }

  const AverageSetter = () => {
    
  }

  const goodSetter = () => {
    const update = good + 1
    setGood(update)
    totalSetter(update + neutral + bad)
  }

  const neutralSetter = () => {
    const update = neutral + 1
    setNeutral(update)
    totalSetter(update + good + bad)
  }

  const badSetter = () => {
    const update = bad + 1
    setBad(update)
    totalSetter(update + good + neutral)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button clickHandler={goodSetter} feedback={'good'}/>
      <Button clickHandler={neutralSetter} feedback={'neutral'}/>
      <Button clickHandler={badSetter} feedback={'bad'}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App