import { useState } from "react";

const Button = ({clickHandler, feedback}) => {
  return (
    <button onClick={clickHandler}>{feedback}</button>
  )
}

const Statistics = (statistics) => {
  // console.log(statistics)
  return (
    <p>
      good {statistics.good} <br/>
      neutral {statistics.neutral} <br/>
      bad {statistics.bad} <br/>
      total {statistics.total} <br/>
      average {statistics.average} <br/>
      positive {statistics.percentage}
    </p>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad , setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positivePercentage, setPositivePercentage ] = useState(0)

  const totalSetter = (value) => {
    setTotal(value)
  }

  const AverageSetter = (feedbacks) => {
    const statsTotal = feedbacks.good + feedbacks.neutral + feedbacks.bad;
    const updateAverage = (feedbacks.good * 1 + feedbacks.neutral * 0 + feedbacks.bad * (-1)) / statsTotal;
    setAverage(updateAverage);
  }

  const goodSetter = () => {
    const update = good + 1
    setGood(update)
    totalSetter(update + neutral + bad)
    const stats = {
      good: update,
      neutral: neutral,
      bad: bad,
    }
    AverageSetter(stats);
    positiveSetter(stats)
  }

  const neutralSetter = () => {
    const update = neutral + 1
    setNeutral(update)
    totalSetter(update + good + bad)
    const stats = {
      good: good,
      neutral: update,
      bad: bad,
    }
    AverageSetter(stats);
    positiveSetter(stats)
  }

  const badSetter = () => {
    const update = bad + 1
    setBad(update)
    totalSetter(update + good + neutral)
    const stats = {
      good: good,
      neutral: neutral,
      bad: update,
    }
    AverageSetter(stats);
    positiveSetter(stats)
  }

  const positiveSetter = (feedbacks) => {
    let totalClicks = feedbacks.good + feedbacks.bad + feedbacks.neutral;
    const percentage = feedbacks.good / totalClicks * 100;
    setPositivePercentage(percentage);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button clickHandler={goodSetter} feedback={'good'}/>
      <Button clickHandler={neutralSetter} feedback={'neutral'}/>
      <Button clickHandler={badSetter} feedback={'bad'}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} percentage={positivePercentage}/>
    </div>
  )
}

export default App