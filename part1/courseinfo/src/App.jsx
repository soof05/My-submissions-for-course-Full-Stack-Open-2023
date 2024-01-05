import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const App = () => {

  const [ counter, setCounter ] = useState(0)
  console.log('this will be displayed first')

  const increaseByOne = () => {
    console.log('plus')
    setCounter(counter + 1)
  }

  const resetToZero = () => {
    console.log('zero')
    setCounter(0)
  }

  const decreaseByOne = () => {
    console.log('minus')  
    setCounter(counter - 1)
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text={'plus'}/>
      <Button onClick={resetToZero} text={'reset'}/>
      <Button onClick={decreaseByOne} text={'minus'}/>
    </div>
  )
}

export default App