import {useRef } from 'react'

export const UseEffect = () => {

  const color = useRef();

  const ChangeColor = (event) =>{
    color.current.style.backgroundColor = event.target.value
  }

  
  return (
    <div className='UseEffect'>
      <div ref={color} className="chart"></div>
      <input type="color" className='inputColor' onChange={ChangeColor}/>
    </div>
  )
}
