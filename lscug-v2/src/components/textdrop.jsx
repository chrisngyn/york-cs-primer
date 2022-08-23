import React, { useState } from 'react';

export default function TextDrop(props) {
    const [effect, setEffect] = useState(false)

    const handleClick = event => {
        setEffect(current => !current)
    }
    
    return (
            <div className={`${effect ? "min-h-24" : "h-24"} w-70% bg-offwhite relative dark:shadow-botdark select-none hover:cursor-pointer dark:bg-darkbord mt-5 rounded-lg transition-all`} 
            onClick={handleClick}>
                <img className={`${effect && "animate-flip"} h-8 w-8 right-8 -mt-4 top-12 dark:invert absolute`} src="./images/downarrow2.svg" alt="down arrow"/>
                <div className='relative py-8 px-5 dark:text-white text-xl'>{props.name}</div>
                <div className={`${effect ? "visible" : "invisible"} p-3 whitespace-pre-line dark:text-white`}>{props.text}</div>
            </div>
    )
}

