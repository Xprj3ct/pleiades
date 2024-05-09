'use client'
import React, {useState, useContext} from 'react';
import { CursorContext } from '../CursorContext';
import Earth from './Earth1'
import Earth2 from './Earth2'


const Globe = () => {
    const [hovered, setHovered] = useState(false)
    const [hovered1, setHovered1] = useState(false)
    const { mouseEnterHandler, mouseLeaveHandler } = useContext( CursorContext )
  return (
    <div className='overflow-hidden relative font-roboto'>
    <div className='max-w-[1280px] mx-auto relative z-[2] font-roboto'>
      <div className='flex my-8 md:my-16 sm:my-12 relative md:items-center text-center flex-col'>
          <div className='py-3 mb-2 flex flex-col justify-center items-center'  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >
            <h2 className='px-4 mb-4 md:w-9/12 mx-auto lg:text-5xl md:text-4xl text-3xl font-bold text-white'>Accelerate Your Growth</h2>
            <p className="mb-4 md:text-xl text-[16px] text-[#7d8590] px-4 mx-auto md:w-7/12">Discover how our cutting-edge technological solutions can propel your organization forward. Partner with us for tailored strategies and unparalleled support. Together, we will redefine your operational potential and set new benchmarks for success.</p>
            <div className='lg:ml-5 flex items-center justify-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5'>
              <a onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} href="" className='flex items-center bg-white font-bold px-14 py-3 justify-center rounded-md text-[20px]'>
              Get Started With Us
                  <svg xmlns="http://www.w3.org/2000/svg" className={` ml-2 transition ease-in duration-150 ${hovered ? "translate-x-2 ": "-translate-x-0"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={`  transition ease-in duration-150 ${hovered ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
              </a>
            </div>
          </div>
      </div>
    </div>
    <img className="absolute bottom-0 left-0 w-full h-full object-cover d-block pointer-events-none" width="801" height="807" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://github.githubassets.com/images/modules/site/home-campaign/footer-galaxy.jpg"></img>
    <div className='flex items-center justify-center relative z-[2] mt-[200px]'>
    </div>
  </div>
  )
}

export default Globe