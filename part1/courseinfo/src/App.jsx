import { useState } from 'react'

const Display = ({counter}) => <>{counter}</>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const History = (props) => {  
  if (props.allClicks.length === 0) {
    return (      
      <div>        
        the app is used by pressing the buttons      
      </div>    
      )  
    }  
    return (
    <div>      
      button press history: {props.allClicks.join(' ')}    
      </div>  
      )
}

const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {    
    setAll(allClicks.concat('L'))
    const update = left + 1;   
    setLeft(update)  
    setTotal(update + right)
  }
  const handleRightClick = () => {    
    setAll(allClicks.concat('R')) 
    const update = right + 1;   
    setRight(update)
    setTotal(update + left)  
  }

  return (
    <div>
      <Display counter={left}/>
      <Button onClick={handleLeftClick} text={'left'}/>
      <Button onClick={handleRightClick} text={'right'}/>
      <Display counter={right}/>
      <History allClicks={allClicks} />
      <p>Total : {total}</p>
    </div>
  )
}

export default App