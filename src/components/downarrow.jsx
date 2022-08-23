import React from 'react';
import Down from "../images/downarrow1.svg"

export default function DownArrow() {
    return <img className="w-12 h-12 animate-slowbounce absolute left-1/2 -ml-6 bottom-6 dark:invert" src={Down} alt="down arrow"/>
}
