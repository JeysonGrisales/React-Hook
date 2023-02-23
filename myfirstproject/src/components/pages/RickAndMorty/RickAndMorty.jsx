import React from 'react'
import { useState, useRef } from 'react'

export const RickAndMorty = () => {

  const [text, newText] = useState()
  const contador = useRef(520)


  return (
    <div className='RickAndMorty'>
      <div className="body">
        <h1 >Generate of tweets</h1>
        <div className="containerInfo">
          <h1 className='titleTwitters'>public of tweet</h1>
          <textarea onKeyUp={Event} name="" id="textEnterUse" cols="30" rows="10" className='TextEnter' placeholder='write a tweet (maximum 255 characters)'></textarea>
          <div className="conterCharatcter">  </div>
          <div className="buttons">
            <button className='btnInteract' onClick={()=>{
            const nameInptu = document.getElementById("textEnterUse").value
            newText(nameInptu)
            if(nameInptu === ""){
              newText("Ingrese un dato valido")
            }
        }}>Publicar</button>
            <button className='btnInteract' onClick={()=>{
              const archivar = []
              // archivar.push(nameInptu)
              console.log(archivar);
            }}
            >Archivar</button>
            <button className='btnInteract'>Mostrar Archivados</button>
          </div>
          <h3 id='resultTweet'>{text}</h3>
        </div>
      </div>
          <h4>here you will see your archived tweets</h4>
          <div className="tweetsArchived">Nan</div>
          <div className="footer"></div>
    </div>
  )
}
