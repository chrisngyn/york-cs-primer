import React from 'react'

import DarkMode from './components/darkmode'
import DoubleDrop from './components/doubledrop'
import DownArrow from './components/downarrow'
import NavBar from './components/navbar'
import TextDrop from './components/textdrop'

import YearOne from './strings/courses/year1.json'
import YearTwo from './strings/courses/year2.json'
import YearThree from './strings/courses/year3.json'
import YearFour from './strings/courses/year4.json'
import Other from './strings/courses/other.json'
import MiscText from './strings/misc.json'
import CoopText from './strings/coop.json'
import FAQText from './strings/faq.json'
import AboutText from './strings/about.json'
import SumIntro from './strings/summary/intro.json'
import Summary from './strings/summary/summary.json'

function App() {
  const root = window.document.documentElement
  root.classList.add('dark')

  return (
    <div className='bg-offwhite dark:bg-darkbg'>
      <div className='h-screen w-screen'>
        <DarkMode/>
        <NavBar/>

        <div className='flex flex-col items-center lg:absolute lg:left-1/2 lg:right-1/2 lg:top-1/3'>
          <div className='select-none text-center lg:text-left font-couture text-black dark:text-white mt-16 lg:mt-0 lg:absolute lg:mr-10 lg:right-0 animate-fadedown'>
            <a className='text-2xl'>Welcome to the</a> <br/><br/>
            <a className='text-7xl md:text-9xl mt-3 hover:animate-pulse'>LCSUG</a>
            <div className='pr-4 pl-4 lg:p-0'>
              <a>Lassonde Computer Science (Unofficial) Guide</a>
            </div>
          </div>
          <div className='font-poppins text-center lg:text-left text-black md:text-xl dark:text-white mt-24 lg:mt-0 lg:absolute lg:ml-10 lg:left-0 w-2/3 lg:w-[450px] animate-fadedown'>
            <a>
              <i>IMPORTANT DISCLAIMER</i> <br/><br/>
              This is not an offical website. All content is opinionated, and based on my experiences. <br/><br/>
              Found this guide useful? Star it on <a style={{color: '#007bff'}} target='_blank' href='https://github.com/chrisngyn/york-cs-primer'>GitHub</a>! Last updated on 12/14/2022.
            </a>
          </div>
        </div>
      </div>

      <DownArrow/>

      <div className={'pb-10 bg-offwhite dark:bg-darkbg'}>
        <div className='flex flex-col h-full items-center'>

          {/* Section 1 -- Courses */}

          <h2 id='curriculum' className='mt-10 mb-6 dark:text-white font-couture text-center pl-4 pr-4 text-2xl lg:text-3xl'>The Computer Science Curriculum</h2>
          <TextDrop name='1st Year Courses' text={
            YearOne.map((YearOne, key) => {
              return <DoubleDrop key={key} name={YearOne.title} text={YearOne.text} />
            })
          } />

          <TextDrop name='2nd Year Courses' text={
            YearTwo.map((YearTwo, key) => {
              return <DoubleDrop key={key} name={YearTwo.title} text={YearTwo.text} />
            })
          } />

          <TextDrop name='3rd Year Courses' text={
            YearThree.map((YearThree, key) => {
              return <DoubleDrop key={key} name={YearThree.title} text={YearThree.text} />
            })
          } />

          <TextDrop name='4th Year Courses' text={
            YearFour.map((YearFour, key) => {
              return <DoubleDrop key={key} name={YearFour.title} text={YearFour.text} />
            })
          } />

          {Other.map((Other, key) => {
            return <TextDrop key={key} name={Other.title} text={Other.text} />
          })}

          {/* Section 2 -- Miscellaneous */}

          <h2 id='misc' className='mt-24 mb-6 dark:text-white font-couture text-center text-2xl pl-4 pr-4 lg:text-3xl'>Miscellaneous and General Tips</h2>
          {MiscText.map((MiscText, key) => {
            return <TextDrop key={key} name={MiscText.title} text={MiscText.text} />
          })}

          {/* Section 3 -- Internships */}

          <h2 id='coop' className='mt-24 mb-6 dark:text-white font-couture text-center text-2xl pl-4 pr-4 lg:text-3xl'>Co-op and Internships</h2>
          {CoopText.map((CoopText, key) => {
            return <TextDrop key={key} name={CoopText.title} text={CoopText.text} />
          })}

          {/* Section 4 -- FAQ */}

          <h2 id='faq' className='mt-24 mb-6 dark:text-white font-couture text-center text-2xl pl-4 pr-4 lg:text-3xl'>Frequently Asked Questions</h2>
          {FAQText.map((FAQText, key) => {
            return <TextDrop key={key} name={FAQText.title} text={FAQText.text} />
          })}

          {/* Section 5 -- Author */}

          <h2 id='about' className='mt-24 mb-6 dark:text-white font-couture text-center text-2xl pl-4 pr-4 lg:text-3xl'>About Author</h2>
          {AboutText.map((AboutText, key) => {
            return <TextDrop key={key} name={AboutText.title} text={AboutText.text} />
          })}

          {SumIntro.map((SumIntro, key) => {
            return <TextDrop key={key} name={SumIntro.title} desc={SumIntro.text}
              text={
                Summary.map((Summary, key) => {
                  return <DoubleDrop key={key} name={Summary.title} text={Summary.text} />
                })
              } />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
