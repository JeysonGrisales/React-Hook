import React from 'react'
import { Anchor } from '../Anchor/Anchor'

export const NawBar = () => {
  return (
    <nav className='navUl'>
        <Anchor style='anchor1' content="Home" root="/"></Anchor>
        <Anchor style='anchor1' content="UseState" root="/UseState"></Anchor>
        <Anchor style='anchor1' content="UseCustom" root="/UseCustom"></Anchor>
        <Anchor style='anchor1' content="UseEffect" root="/UseEffect"></Anchor>
        <Anchor style='anchor1' content="Rick and Morty" root="/RickAndMorty"></Anchor>
        <Anchor root="*"></Anchor>
    </nav>
  )
}