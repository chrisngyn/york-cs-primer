import React, { useState, useRef, useEffect} from 'react';

export default function TextDrop(props) {
    console.log('fdsf')
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
        console.log("2")
        if(effect === false) {
            setStyle({height: 96 + height})
            setTimeout(test, 100)
        } else {
            setStyle(null)

        }
        setEffect(current => !current)
    }

    const test = event => {
        setStyle({height:"auto"})
    }

    return (
            <div style={style} className={`h-24 w-90% lg:w-70% bg-offwhite relative dark:shadow-botdark select-none overflow-clip hover:cursor-pointer dark:bg-darkbord mt-5 ease-in-out rounded-lg transition-all`}>
                <div className="w-full h-24 opacity-0 absolute z-10" onClick={handleClick}></div>
                <img className={`${effect && "animate-flip"} h-8 w-8 right-8 -mt-4 top-12 dark:invert absolute`} src="./images/downarrow2.svg" alt="down arrow"/>
                <div className='relative py-8 px-5 dark:text-white text-xl'>{props.name}</div>
                <div ref={ref} className={`${effect ? "visible" : "invisible"} p-3 whitespace-pre-line dark:text-white`}>
                    {toggle && ( <div className={`${effect ? "visible" : "invisible"} $ p-3 whitespace-pre-line dark:text-white`}>{props.desc}</div>)}
                    {props.text}
                </div>
            </div>
    )
}
