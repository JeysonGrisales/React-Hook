import React, { useState, useEffect } from 'react'
import { Button } from '../../ui/Buttons/Buttons'
// import { Tittle } from '../../ui/Tittle/Tittle'

export const UseState = () => {

  const [counter, setCounter] = useState(0)
  const [style, setStyle] = useState("StartsOne")

  useEffect(()=>{
    if(counter >= 10){
      setStyle("StartsTwo")
    }else if(counter < 0){
      setStyle("StartsRest")
    }else{
      setStyle("StartsOne")
    }
  },[counter])

  return (
    <div className='contentC'>
    
    <h2 className={style} >{counter}</h2>

    <div className='buttons'>
      <button onClick={()=>{setCounter(counter +1 )}}>ADD</button>
      <button onClick={()=>{setCounter(0)}}>RESET</button>
      <button onClick={()=>{setCounter(counter-1)}}>SUBTRACT</button>

    {/* <Button content={"ADD"} identify="btn1" onClick={()=>{setCounter(addCounter)}}></Button>
    <Button content={"RESET"} identify="btn2" onClick={()=>{setCounter(counter)}}></Button>
    <Button content={"SUBTRACT"} identify="btn3" onClick={()=>{setCounter(counter-1)}}></Button> */}

    </div>

    </div>
  )
}
