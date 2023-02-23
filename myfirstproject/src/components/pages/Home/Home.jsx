import React from 'react'
import { Card } from '../../ui/Card/Card'
import lavarLosa from "../../../images/Atardecer.jpg"

export const Home = () => {
  const works = [
    {img:lavarLosa}
  ]
  return (
    <div className='home'>
      {
        works.map( work => <Card card={work}></Card>)
      }
    </div>
  )
}
//Route-react