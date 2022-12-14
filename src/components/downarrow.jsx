import React from 'react';
import Down from './../images/downarrow1.svg';

export default function DownArrow() {
  return (
    <div className='flex flex-col items-center'>
      <img className='w-8 h-8 md:w-12 md:h-12 animate-slowbounce absolute bottom-[1%] pb-3 dark:invert' src={Down} alt='down arrow'/>
    </div>
  )
}
