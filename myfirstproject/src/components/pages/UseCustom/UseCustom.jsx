import React, { useState } from 'react'

export const UseCustom = () => {

  const [name, newName] = useState()

  // const delete = ()=>{
  //   newName = ""
  // }


  return (
    <div className='UseCustom'>
      <div className="Info">
        <h2 id='Text' className='nameResponse'>{name}</h2>
        <input onKeyUp={Event} type="text" id='nameId' placeholder='Name' className='Name'/>
        <button  className='sendName' onClick={()=>{
            const nameInptu = document.getElementById("nameId").value
            newName(nameInptu)
            if(nameInptu === ""){
              newName("Ingrese un dato valido")
            }
        }}>Send</button>
      </div>
    </div>
  )
}
