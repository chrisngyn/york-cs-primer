import React, { useState } from 'react';

export default function TextDrop(props) {
    const [effect, setEffect] = useState(false)
    return (
            <div className={`${effect && "h-auto"} w-70% h-24 bg-offwhite relative dark:shadow-botdark select-none dark:bg-darkbord mt-5 rounded-lg transition-height`} 
            onClick={() => {
                if (effect === false) { setEffect(true) }
                else { setEffect(false) }
            }}>
                <img className={`${effect && "animate-flip"} h-8 w-8 right-8 -mt-4 top-12 dark:invert absolute hover:cursor-pointer`} src="./images/downarrow2.svg" alt="down arrow"/>
                <div className='relative py-8 px-5 dark:text-white text-xl'>{props.name}</div>
                <div className={`${effect ? "visible" : "invisible"} p-3 dark:text-white`}>{props.text}</div>
            </div>
    )
}

