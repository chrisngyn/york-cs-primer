import React from 'react';
import NavBar from './components/navbar';
import DownArrow from './components/downarrow'
import TextDrop from './components/textdrop'
import MiscText from "./strings/misc.json"
import CoopText from "./strings/coop.json"
import FAQText from "./strings/faq.json"
import AboutText from "./strings/about.json"

function App() {
  
  return (
    <div className="max-w-screen h-100vh bg-offwhite dark:bg-darkbg">
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
      <div className='h-auto pb-10 mt-91vh relative bg-offwhite dark:bg-darkbg'>
        <div className='flex flex-col h-full items-center'>
          <h2 id="curriculum" className='mt-10 mb-6 dark:text-white font-couture text-3xl'>Computer Science Curriculum</h2>
          <TextDrop name="Year 1 Courses"/>
          <TextDrop name="Year 2 Courses"/>
          <TextDrop name="Year 3 Courses"/>
          <TextDrop name="Year 4 Courses"/>
          <TextDrop name="Other Requirements"/>
          <h2 id="misc" className='mt-10 mb-6 dark:text-white font-couture text-3xl'>Miscellaneous and General Tips</h2>
          {MiscText.map((MiscText, key) => {
              return <TextDrop key={key} name={MiscText.title} text={MiscText.text}/>
          })}
          <h2 id="coop" className='mt-10 mb-6 dark:text-white font-couture text-3xl'>Co-op and Internships</h2>
          {CoopText.map((CoopText, key) => {
              return <TextDrop key={key} name={CoopText.title} text={CoopText.text}/>
          })}
          <h2 id="faq" className='mt-10 mb-6 dark:text-white font-couture text-3xl'>Frequently Asked Questions</h2>
          {FAQText.map((FAQText, key) => {
              return <TextDrop key={key} name={FAQText.title} text={FAQText.text}/>
          })}
          <h2 id="about" className='mt-10 mb-6 dark:text-white font-couture text-3xl'>About Author</h2>
          {AboutText.map((AboutText, key) => {
              return <TextDrop key={key} name={AboutText.title} text={AboutText.text}/>
          })}
        </div>
      </div>
    </div>
    
  );
}

export default App;
export const curriculum = document.getElementById("curriculum")
export const misc = document.getElementById("misc")
export const coop = document.getElementById("coop")
export const faq = document.getElementById("faq")
export const about = document.getElementById("about")
