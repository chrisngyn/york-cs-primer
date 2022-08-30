import React from 'react';
import NavBar from './components/navbar';
import DownArrow from './components/downarrow'
import TextDrop from './components/textdrop'
import DoubleDrop  from './components/doubledrop';
import MiscText from "./strings/misc.json"
import CoopText from "./strings/coop.json"
import FAQText from "./strings/faq.json"
import AboutText from "./strings/about.json"
import YearOne from "./strings/courses/year1.json"
import YearTwo from "./strings/courses/year2.json"
import YearThree from "./strings/courses/year3.json"
import YearFour from "./strings/courses/year4.json"
import Other from "./strings/courses/other.json"
import Summary from "./strings/summary/summary.json"
import SumIntro from "./strings/summary/intro.json"

function App() {
  return (
    <div className="bg-offwhite dark:bg-darkbg">
      <div className='h-screen w-screen'>
        <NavBar/>
        <div className='flex flex-col items-center lg:flex-none'>
          <div className='select-none text-center lg:text-left font-couture text-black dark:text-white lg:absolute mt-16 lg:mt-64 lg:right-[50%] right-[55%] animate-fadedown'>
            <a className='text-2xl'>Welcome to the</a>
            <br/>
            <a className='text-7xl md:text-9xl hover:animate-pulse'>LSCUG</a>
            <br/>
            <a className=''>A Guide to Surviving Lassonde's Computer Science</a>
          </div>
          <div className='font-poppins text-center lg:text-left text-black md:text-xl dark:text-white lg:absolute mt-24 lg:mt-64 2xl:mt-72 left-[55%] w-2/3 lg:w-1/3 animate-fadedown'>
            <a><strong>IMPORTANT DISCLAIMER</strong><br/>This is <strong>not</strong> an offical website. This is a collection of things I wish I knew going into university.
            All content is opinionated and based on <strong>my experiences</strong>, so read with a grain of salt as needed.</a>
          </div>
        </div>
      </div>
      <DownArrow/>
      
      <div className={`h-auto pb-10 bg-offwhite dark:bg-darkbg`}>
        <div className='flex flex-col h-full items-center'>
          <h2 id="curriculum" className='mt-10 mb-6 dark:text-white font-couture text-center text-2xl lg:text-3xl'>Computer Science Curriculum</h2>
          <TextDrop name="Year One Courses" text={
            YearOne.map((YearOne, key) => {
              return <DoubleDrop key={key} name={YearOne.title} text={YearOne.text}/>
            })
          }/>

          <TextDrop name="Year Two Courses" text={
            YearTwo.map((YearTwo, key) => {
              return <DoubleDrop key={key} name={YearTwo.title} text={YearTwo.text}/>
            })
          }/>

          <TextDrop name="Year Three Courses" text={
            YearThree.map((YearThree, key) => {
              return <DoubleDrop key={key} name={YearThree.title} text={YearThree.text}/>
            })
          }/>

          <TextDrop name="Year Four Courses" text={
            YearFour.map((YearFour, key) => {
              return <DoubleDrop key={key} name={YearFour.title} text={YearFour.text}/>
            })
          }/>

          {Other.map((Other, key) => {
            return <TextDrop key={key} name={Other.title} text={Other.text}/>
          })}
          
          <h2 id="misc" className='mt-10 mb-6 dark:text-white font-couture text-center text-2xl lg:text-3xl'>Miscellaneous and General Tips</h2>
          {MiscText.map((MiscText, key) => {
            return <TextDrop key={key} name={MiscText.title} text={MiscText.text}/>
          })}

          <h2 id="coop" className='mt-10 mb-6 dark:text-white font-couture text-center text-2xl lg:text-3xl'>Co-op and Internships</h2>
          {CoopText.map((CoopText, key) => {
            return <TextDrop key={key} name={CoopText.title} text={CoopText.text}/>
          })}

          <h2 id="faq" className='mt-10 mb-6 dark:text-white font-couture text-center text-2xl lg:text-3xl'>Frequently Asked Questions</h2>
          {FAQText.map((FAQText, key) => {
            return <TextDrop key={key} name={FAQText.title} text={FAQText.text}/>
          })}

          <h2 id="about" className='mt-10 mb-6 dark:text-white font-couture text-center text-2xl lg:text-3xl'>About Author</h2>
          {AboutText.map((AboutText, key) => {
            return <TextDrop key={key} name={AboutText.title} text={AboutText.text}/>
          })}

          {SumIntro.map((SumIntro, key) => {
            return <TextDrop key={key} name={SumIntro.title} desc={SumIntro.text}
              text={
              Summary.map((Summary, key) => {
                return <DoubleDrop key={key} name={Summary.title} text={Summary.text}/>
              })
            }/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
