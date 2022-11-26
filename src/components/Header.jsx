import React from 'react'
import MoonIcon from './icons/MoonIcon'

const Header = () => {
  return (
    <header className="container mx-auto pt-8 px-4 ">

        <div className="flex justify-between">
        <h1 className="text-3xl font-bold tracking-[0.4em] uppercase text-white">Todo</h1>
        <button> <MoonIcon className="fill-red-400" />  </button>
        </div>
     
  </header>
  )
}

export default Header