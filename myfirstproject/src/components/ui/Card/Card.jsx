import React from 'react'

export const Card = ({card}) => {
  return (
    <img className='workImg' src={card.img}></img>
  )
}