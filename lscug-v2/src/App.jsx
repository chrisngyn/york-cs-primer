import React from 'react';
import NavBar from './components/navbar';
import DownArrow from './components/downarrow'
import TextDrop from './components/textdrop'

function App() {
  return (
    <div className="w-screen h-100vh bg-offwhite dark:bg-darkbg">
      <NavBar/>
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
      <div className='h-screen mt-91vh relative bg-offwhite dark:bg-darkbg'>
        <div className='flex flex-col h-full relative items-center'>
          <TextDrop name="Year 1 Courses" text="A lot of students think that learning is limited to your lectures, and that what you learn in your university curriculum is 
          sufficient to getting a nice job once you graduate. I can't stress this enough - but there is A LOT of learning to be done outside of your lectures. You also need 
          to be practising what you learn as well, usually through making personal projects and putting them on your GitHub. I taught myself a lot of things independently 
          outside of what was in my lectures and I'm all the more better for it. Do you know Git? Do you know fullstack development? Can you make a frontend, can you 
          make a REST API? Do you know how to use a database? If not - don't wait until university teaches you, you can learn all these things in a summer with some 
          Udemy courses."s/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
