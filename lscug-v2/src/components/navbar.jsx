import React, {useRef} from 'react';
import { Link } from 'react-scroll';

export default function NavBar(){
    return  <div id='topNav' className='w-full h-1/12 relative'>
                <div className='flex justify-center select-none text-xl font-biko text-black dark:text-white'>
                    <a className="transition ease-in-out duration-300 hover:cursor-pointer p-3 m-10 shadow-prelight dark:shadow-pre hover:shadow-boxlight dark:hover:shadow-box hover:text-white dark:hover:text-black"><Link to="curriculum" smooth={true} duration={300} offset={-20}>Curriculum</Link></a>
                    <a className="transition ease-in-out duration-300 hover:cursor-pointer p-3 m-10 shadow-prelight dark:shadow-pre hover:shadow-boxlight dark:hover:shadow-box hover:text-white dark:hover:text-black"><Link to="misc" smooth={true} duration={300} offset={-20}>Miscellaneous</Link></a>
                    <a className="transition ease-in-out duration-300 hover:cursor-pointer p-3 m-10 shadow-prelight dark:shadow-pre hover:shadow-boxlight dark:hover:shadow-box hover:text-white dark:hover:text-black"><Link to="coop" smooth={true} duration={300} offset={-20}>Co-op & Internships</Link></a>
                    <a className="transition ease-in-out duration-300 hover:cursor-pointer p-3 m-10 shadow-prelight dark:shadow-pre hover:shadow-boxlight dark:hover:shadow-box hover:text-white dark:hover:text-black"><Link to="faq" smooth={true} duration={300} offset={-20}>FAQ</Link></a>
                    <a className="transition ease-in-out duration-300 hover:cursor-pointer p-3 m-10 shadow-prelight dark:shadow-pre hover:shadow-boxlight dark:hover:shadow-box hover:text-white dark:hover:text-black"><Link to="about" smooth={true} duration={300} offset={-20}>About Author</Link></a>     
              </div>
              <div id="horizontalLine" className='relative flex justify-center'>
                <div className='w-1/3 border-t border-black dark:border-white'></div>
              </div>
            </div>
}