import React from 'react';
import { Link } from 'react-scroll';

export default function NavBar(){
    return  <div id='topNav' className='invisible lg:visible w-full h-1/12'>
              <div className='flex justify-center select-none text-xl font-biko text-black overflow-clip dark:text-white'>
                  <Link className="transition ease-in-out duration-300 hover:cursor-pointer p-3 m-10 shadow-prelight dark:shadow-pre hover:text-blue-500 dark:hover:text-black" to="curriculum" smooth={true} duration={300} offset={-20}>Curriculum</Link>
                  <Link className="transition ease-in-out duration-300 hover:cursor-pointer p-3 m-10 shadow-prelight dark:shadow-pre hover:text-blue-500 dark:hover:text-black" to="misc" smooth={true} duration={300} offset={-20}>Miscellaneous</Link>
                  <Link className="transition ease-in-out duration-300 hover:cursor-pointer p-3 m-10 shadow-prelight dark:shadow-pre hover:text-blue-500 dark:hover:text-black" to="coop" smooth={true} duration={300} offset={-20}>Co-op & Internships</Link>
                  <Link className="transition ease-in-out duration-300 hover:cursor-pointer p-3 m-10 shadow-prelight dark:shadow-pre hover:text-blue-500 dark:hover:text-black" to="faq" smooth={true} duration={300} offset={-20}>FAQ</Link>
                  <Link className="transition ease-in-out duration-300 hover:cursor-pointer p-3 m-10 shadow-prelight dark:shadow-pre hover:text-blue-500 dark:hover:text-black" to="about" smooth={true} duration={300} offset={-20}>About Author</Link>  
              </div>
            </div>
}
