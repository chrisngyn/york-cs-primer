import React, { useState, useRef, useEffect } from 'react';
import Down from './../images/downarrow2.svg';

export default function DoubleDrop(props) {
  const ref = useRef(null)
  const [effect, setEffect] = useState(false)
  const [height, setHeight] = useState(0)
  const [style, setStyle] = useState(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
  })

  const handleClick = () => {
    if (effect) {
      setStyle({ height: 96 + height })
      setTimeout(close, 1)
    } else {
      setStyle({ height: 96 + height })
      setTimeout(auto, 100)
    }

    setEffect(current => !current)
  }

  const auto = event => {
    setStyle({ height: 'auto' })
  }

  const close = event => {
    setStyle({ height: 96 })
  }

  return (
    <div className='flex flex-col items-center font-poppins'>
      {/* Inner text box */}
      <div style={style} className={`h-24 w-full bg-exgrey relative select-none overflow-clip hover:cursor-pointer dark:bg-dark2 mt-5 ease-in-out rounded-lg transition-all`} onClick={handleClick}>
        <div className='flex flex-col col-1 justify-center h-24 w-full'>
          {/* Inner text box down arrow */}
          <img className={`${effect && 'animate-flip'} h-6 w-6 lg:h-8 lg:w-8 right-6 lg:right-8 dark:invert absolute`} src={Down} alt='down arrow' />
          {/* Inner text box title element */}
          <div className='w-[90%] lg:w-90% px-5 dark:text-white text-sm xl:text-xl break-words'>{props.name}</div>
        </div>
        {/* Inner text box text element */}
        <div ref={ref} className={`${effect ? 'visible' : 'invisible'} pl-5 pr-5 pb-3 text-sm xl:text-lg whitespace-pre-line dark:text-white`}>{props.text}</div>
      </div>
    </div>
  )
}
