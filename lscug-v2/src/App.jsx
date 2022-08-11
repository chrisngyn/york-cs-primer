import React from 'react';
import NavBar from './components/navbar';
import DownArrow from './components/downarrow'

function App() {
  return (
    <div className="background w-screen h-screen bg-white dark:bg-darkbg">
      <NavBar></NavBar>
      <div className='select-none font-couture text-black dark:text-white absolute top-2/5 left-1/5 animate-fadedown'>
        <a className='text-2xl'>Welcome to the</a>
        <br/>
        <a className='text-9xl hover:animate-pulse'>LSCUG</a>
        <br/>
        <a className='text-l'>A Guide to Surviving Lassonde's Computer Science</a>
      </div>

      <div className='font-biko text-black text-xl dark:text-white absolute top-45% right-1/10 w-1/3 animate-fadedown'>
        <a><strong>IMPORTANT DISCLAIMER</strong><br></br>This is <strong>not</strong> an offical website. This is a collection of things I wish I knew going into university.
        All content is opinionated and based on <strong>my experiences</strong>, so read with a grain of salt as needed.</a>
      </div>
      <DownArrow/>
    </div>
  );
}

export default App;
