import React from 'react';
import light from '../images/light.svg'

export default function NavBar() {
    const root = window.document.documentElement
    var dark = true;

    const auto = event => {
        if(dark == true) {
            root.classList.remove("dark")
            dark = !dark
        } else if (dark == false) {
            root.classList.add("dark")
            dark = !dark
        }
    }

  return (
    <div className='flex flex-col items-center lg:flex-none'>
        <img className='absolute lg:right-0 mt-4 lg:mt-7 lg:mr-10 w-8 h-8 dark:invert' onClick={auto} src={light}></img>
    </div>
  )
}
