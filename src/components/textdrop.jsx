import React, { useState, useRef, useEffect} from 'react';
import Down from "../images/downarrow2.svg"

export default function TextDrop(props) {
    const ref = useRef(null)
    const [effect, setEffect] = useState(false)
    const [height, setHeight] = useState(0)
    const [style, setStyle] = useState(null)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        setHeight(ref.current.clientHeight)
        if(props.desc) { setToggle(true) }
    })

    const handleClick = event => {
        if(effect === false) {
            setStyle({height: 96 + height})
            setTimeout(auto, 100)
        } else if (effect === true) {
            setStyle({height: 96 + height})
            setTimeout(close, 1)
        }
        setEffect(current => !current)
    }

    const auto = event => {
        setStyle({height:"auto"})
    }

    const close = event => {
        setStyle({height: 96})
    }

    return (
            <div style={style} className={`h-24 w-90% lg:w-70% bg-owbord relative dark:shadow-botdark select-none overflow-clip dark:bg-darkbord mt-5 ease-in-out rounded-lg transition-all`}>
                <div className="w-full h-24 opacity-0 absolute z-10 hover:cursor-pointer" onClick={handleClick}></div>
                <img className={`${effect && "animate-flip"} h-8 w-8 right-8 -mt-4 top-12 dark:invert absolute`} src={Down} alt="down arrow"/>
                <div className='relative py-8 px-5 dark:text-white text-xl'>{props.name}</div>
                <div ref={ref} className={`${effect ? "visible" : "invisible"} p-3 whitespace-pre-line dark:text-white`}>
                    {toggle && ( <div className={`${effect ? "visible" : "invisible"} $ p-3 whitespace-pre-line dark:text-white`}>{props.desc}</div>)}
                    {props.text}
                </div>
            </div>
    )
}
