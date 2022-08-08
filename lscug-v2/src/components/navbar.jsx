import React from 'react';

export default function NavBar(){
    return  <div id='topNav' className='w-full h-1/12 relative'>
                <div className='flex justify-center select-none text-xl font-caviar text-black dark:text-white'>
                    <p id="cirriculum" className="hover:cursor-pointer p-10  hover:underline underline-offset-4">Curriculum</p>
                    <a id="miscellaneous" className="hover:cursor-pointer p-10 hover:underline underline-offset-4">Miscellaneous</a>
                    <a id="coop" className="hover:cursor-pointer p-10 hover:underline underline-offset-4">Co-op & Internships</a>
                    <a id="faq" className="hover:cursor-pointer p-10 hover:underline underline-offset-4">FAQ</a>
                    <a id="author" className="hover:cursor-pointer p-10 hover:underline underline-offset-4">About Author</a>     
              </div>
              <div id="horizontalLine" className='relative flex justify-center'>
                <div className='w-1/2 border-t border-black dark:border-white'></div>
              </div>
            </div>
}