import React from 'react';
import light from './../images/light.svg'

export default function DarkMode() {
  const root = window.document.documentElement
  var dark = true;

  const auto = event => {
    if (dark) {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }

    dark = !dark
  }

  return (
    <div className='flex flex-col items-center lg:flex-none hover:cursor-pointer'>
      <img className='absolute lg:right-0 mt-4 lg:mt-7 lg:mr-10 w-8 h-8 dark:invert' onClick={auto} src={light}></img>
    </div>
  )
}
