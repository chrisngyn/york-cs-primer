import React, { useState, useRef, useEffect } from 'react';
import Down from "../images/downarrow2.svg";

export default function TextDrop(props) {
  const ref = useRef(null)
  const [effect, setEffect] = useState(false)
  const [height, setHeight] = useState(0)
  const [style, setStyle] = useState(null)
  const [style2, setStyle2] = useState(null)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
    if (props.desc) { setToggle(true) }
  })

  const handleClick = () => {
    if (effect === false) {
      setStyle({ height: 96 + height })
      setStyle2({ height: height })
      setTimeout(auto, 100)
    } else if (effect === true) {
      setStyle({ height: 96 + height })
      setStyle2({ height: height })
      setTimeout(close, 1)
    }
    setEffect(current => !current)
  }

  const auto = event => {
    setStyle({ height: "auto" })
    setStyle2({ height: "auto" })
  }

  const close = event => {
    setStyle({ height: 96 })
    setStyle2({ height: 96 })
  }

  return (
    <div style={style} className={`h-24 w-90% lg:w-70% bg-owbord relative dark:shadow-botdark select-none overflow-hidden dark:bg-darkbord font-poppins mt-5 ease-in-out rounded-lg transition-all`}>
      <div className="w-full h-24 opacity-0 absolute z-10 hover:cursor-pointer" onClick={handleClick}></div>
      <div className='flex flex-col col-1 justify-center h-24 w-full'>
        <img className={`${effect && "animate-flip"} h-6 w-6 lg:h-8 lg:w-8 right-6 lg:right-8 dark:invert absolute`} src={Down} alt="down arrow" />
        <div className='w-[95%] lg:w-90% px-5 dark:text-white text-sm xl:text-xl break-words'>{props.name}</div>
      </div>
      <div ref={ref} style={style2} className={`${effect ? "visible" : "invisible"} h-0 pl-5 pr-5 pb-3 overflow-hidden transition-all text-sm xl:text-lg whitespace-pre-line dark:text-white`}>
        {toggle && (<div className={`${effect ? "visible" : "invisible"} $ text-sm lg:text-xl whitespace-pre-line dark:text-white`}>{props.desc}</div>)}
        {props.text}
      </div>
    </div>
  )
}
