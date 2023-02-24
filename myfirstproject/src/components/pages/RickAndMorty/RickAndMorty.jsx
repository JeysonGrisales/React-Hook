import React from 'react'
import { useState } from 'react'
const archivar = []

export const RickAndMorty = () => {

  const [text, newText] = useState()
  const [inicio, fin] = useState("255")
  const [oneTwett , newTwett] = useState("")

  // publicar
  const obtener = () =>{
    const nameInptu = document.getElementById("textEnterUse").value
    newText(nameInptu)
  }

  //Archivar
  const archivarTwits= () =>{
    archivar.push(text)
    localStorage.setItem("twitter", JSON.stringify(archivar))
    console.log(archivar);
  }

  //contador
  const counter = ()=>{
    let x = document.getElementById("textEnterUse").value
    fin(255-x.length)
  }

  // Mostrar Archivados

  const mostrar = ()=>{

    let mostrartwetts = ""

    archivar.map((i) =>{
      mostrartwetts += "Tweet: " +i 
      newTwett(mostrartwetts)
    })
    
  }

  return (
    <div className='RickAndMorty'>
        <div className="body">
          <h1 >Generate of tweets</h1>
          <div className="containerInfo">
            <h1 className='titleTwitters'>public of tweet</h1>
            <textarea name="" id="textEnterUse" cols="30" rows="10" className='TextEnter' placeholder='write a tweet (maximum 255 characters)' onKeyUp={counter}></textarea>
            <div className="conterCharatcter">{inicio}</div>
            <div className="buttons">
              <button className='btnInteract' onClick={obtener}>Publicar</button>
              <button className='btnInteract' onClick={archivarTwits}>Archivar</button>
            <button className='btnInteract' onClick={mostrar}>Mostrar Archivados</button>
          </div>
          <h3 id='resultTweet'>{text}</h3>
        </div>
      </div>
          <h4>here you will see your archived tweets</h4>
          <div className="tweetsArchived" >{oneTwett}</div>
    </div>
  )
}
