import React from 'react';

export default function NavBar(){
    return  <div id='topNav' className='w-full h-1/12 relative'>
                <div className='flex justify-center select-none text-xl font-biko text-black dark:text-white'>
                    <a id="cirriculum" className="transition ease-in-out duration-300 hover:cursor-pointer p-1 m-10 shadow-pre hover:shadow-box hover:text-white dark:hover:text-black">Curriculum</a>
                    <a id="miscellaneous" className="transition ease-in-out duration-300 hover:cursor-pointer p-1 m-10 shadow-pre hover:shadow-box hover:text-white dark:hover:text-black">Miscellaneous</a>
                    <a id="coop" className="transition ease-in-out duration-300 hover:cursor-pointer p-1 m-10 shadow-pre hover:shadow-box hover:text-white dark:hover:text-black">Co-op & Internships</a>
                    <a id="faq" className="transition ease-in-out duration-300 hover:cursor-pointer p-1 m-10 shadow-pre hover:shadow-box hover:text-white dark:hover:text-black">FAQ</a>
                    <a id="author" className="transition ease-in-out duration-300 hover:cursor-pointer p-1 m-10 shadow-pre hover:shadow-box hover:text-white dark:hover:text-black">About Author</a>     
              </div>
              <div id="horizontalLine" className='relative flex justify-center'>
                <div className='w-1/3 border-t border-black dark:border-white'></div>
              </div>
            </div>
}