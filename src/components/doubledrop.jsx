import React, { useState, useRef, useEffect} from 'react';
import Down from "../images/downarrow2.svg"

export default function DoubleDrop(props) {
    const ref = useRef(null)
    const [effect, setEffect] = useState(false)
    const [height, setHeight] = useState(0)
    const [style, setStyle] = useState(null)

    useEffect(() => {
        setHeight(ref.current.clientHeight)
    })

    const handleClick = event => {
        if(effect === false) setStyle({height:96+height});
        else setStyle(null);
        setEffect(current => !current)
    }

        return (
            <div className='flex flex-col items-center font-poppins'>
                <div style={style} className={`h-24 w-90% bg-offwhite relative select-none overflow-clip hover:cursor-pointer dark:bg-darkbg mt-5 ease-in-out rounded-lg transition-all`} 
                onClick={handleClick}>
                    <div className='flex flex-col col-1 justify-center h-24 w-full'>
                        <img className={`${effect && "animate-flip"} h-6 w-6 lg:h-8 lg:w-8 right-6 lg:right-8 dark:invert absolute`} src={Down} alt="down arrow"/>
                        <div className='w-[95%] lg:w-90% px-5 dark:text-white xl:text-xl break-words'>{props.name}</div>
                    </div>
                    <div ref={ref} className={`${effect ? "visible" : "invisible"} p-3 whitespace-pre-line dark:text-white`}>{props.text}</div>
                </div>
            </div>
        )
}
