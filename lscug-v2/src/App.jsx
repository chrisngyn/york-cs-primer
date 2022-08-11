import React from 'react';
import NavBar from './components/navbar';
import DownArrow from './components/downarrow'

function App() {
  return (
    <div className="background w-screen h-screen bg-white dark:bg-darkbg">
      <NavBar></NavBar>
      <div className='font-couture text-black dark:text-white absolute top-2/5 left-1/5 animate-fadedown'>
        <a className='text-2xl'>Welcome to the</a>
        <br/>
        <a className='text-9xl '>LSCUG</a>
      </div>

      <div className='font-biko text-black dark:text-white absolute top-45% right-1/10 w-1/3 animate-fadedown'>
        <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac imperdiet ante. Duis a nunc purus. Ut tempor pulvinar sapien, non placerat augue ornare eget. Integer ut metus nec tortor suscipit facilisis. Morbi quis erat ac libero elementum maximus at ullamcorper sapien. Aliquam molestie nunc et faucibus tempor. Nam consequat.</a>
      </div>
      <DownArrow/>
    </div>
  );
}

export default App;
