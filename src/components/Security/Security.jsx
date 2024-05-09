'use client'
import React, {useState, useContext} from 'react'
import HoverCard from '../Productivity/HoverCard'
import Projects from './Project'
import {motion} from "framer-motion"
import { CursorContext } from '../CursorContext'

const Security = () => {
    const [hovered, setHovered] = useState(false)
    const [hovered1, setHovered1] = useState(false)
    const [hovered2, setHovered2] = useState(false)
    const { mouseEnterHandler, mouseLeaveHandler } = useContext( CursorContext )

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren:0.4,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0, scale:0.8 },
        show: { opacity: 1, scale:1},
    };
  return (
    <div className='max-w-[1280px] mx-auto font-roboto'>
        <motion.div className='flex md:pl-7 space-x-3 md:space-x-10'>
            <div className='flex flex-col items-center'>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5}} className='relative'>
                <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className="octicon octicon-briefcase text-white">
                        <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
                    </svg>
                    <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-3 z-3"></span>
                </motion.div>
                <motion.div initial={{height:0}} whileInView={{height:'100%'}} transition={{delay:0.8}} className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent" ></motion.div>
            </div>
            <motion.div  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{delay:0.6, type:'tween'}} className='md:w-10/12 mb-24'>
                <h2 className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '200ms'}}>Our Expertise</h2>  
                <h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '300ms'}}>
                    <p className="text-[#939aff]">Artificial Intelligence Innovation and Research</p>
                    Advancing the future with AI powered solutions.
                </h3>
            </motion.div>
        </motion.div>
        <HoverCard backgroundColor = '#939aff' direction='' left='0'>

        </HoverCard>
        <Projects/>
        <div className='relative z-[1]'>
            <HoverCard backgroundColor = '#939aff' direction='' left='0'>
            <motion.div initial={{scale:0.9, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{type:'tween'}} className='rounded-r-md overflow-hidden flex items-center'>
                {/* <img className="responsive js-build-in-item build-in-scale-fade build-in-animate origin-bottom-right" width="1288" height="992" loading="lazy" decoding="async" alt="" aria-hidden="true" src="/3.png" /> */}
            </motion.div>
            </HoverCard>
        </div>
        <div className='flex flex-col md:flex-row gap-10 '>
                <HoverCard backgroundColor = '#939aff' direction='flex-row' left='-400px'>
                    <div className='md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 ' onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-black font-semibold'>Training AI systems </span>
to comprehend operations and identify flaws and abnormalities across diverse sectors. </p>
                        <div>
                            <a onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)} href="" className='py-1 inline-block text-xl text-black font-semibold'>
                            Read More
                                <svg xmlns="http://www.w3.org/2000/svg" className={` mb-[2px] text-black transition inline-block ml-3 ease-in duration-300  ${hovered2 ? "translate-x-0 ": "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-black transition ease-in duration-150 ${hovered2 ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                                <div className={` ${hovered2 ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-black rounded-full`}></div>
                            </a>
                        </div>
                    </div>
                    <div className='overflow-hidden rounded-s-lg'>
                    <img className="w-full h-auto " width="1208" height="764" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://miracle.sirv.com/pleiades-assets/programmable%20electronics.png" />
                    </div>
                </HoverCard>
        </div>
    </div>
  )
}

export default Security;