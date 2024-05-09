"use client"
import Navbar from '@/components/Navbar/Navbar'
import HoverCard from '@/components/Productivity/HoverCard'
import React from 'react'

const Team = () => {
  return (
    <>
        <Navbar/>
        <div className='max-w-[1280px] mx-auto font-roboto md:mt-20 mt-5 px-8'>
    <div className='flex md:pl-7 space-x-3 md:space-x-10'>
        <div className='flex flex-col items-center'>
            <div className='relative'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
</svg>

                <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-3 z-3"></span>
            </div>
            <div className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent" ></div>
        </div>
        <div  initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{delay:0.6, type:'tween'}} className='md:w-10/12 mb-24'>
            <h2 className="text-[20px] md:text-2xl uppercase mb-7  text-black js-build-in-item build-in-slideX-left build-in-animate font-bold" style={{transitionDelay: '200ms'}}>Meet our founder</h2>  
            <h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-black js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '300ms'}}>
                {/* <p className="text-[#939aff]">Introducing Pleiades Technologies, </p> */}
            </h3>
        </div>
    </div>
    <div>
    <HoverCard className=" " direction='flex-row' left='-400px'>
                    <div className='md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 founder-bg-image'>
                        <p className=" text-sm md:text-2xl mb-6 font-medium text-[white]"><span className='text-white font-semibold'>Established on October 29, 2021, our mantra—Innovate, Collaborate, Excel—is not just a slogan; it is our guiding principle.   </span>

At Pleiades, we transcend the traditional boundaries of technology, setting new standards that are not just cutting-edge but transformative. We don&apos;t just offer services; we craft tailored solutions that stand as the epitome of technological artistry. Every algorithm, every line of code, and every system developed is meticulously curated to reflect our commitment to exceptional quality.
<br/>
<br/>

Our commitment remains steadfast: Pleiades embodies only what is advanced, exceptional, and groundbreaking. We don&apos;t follow trends; we establish them. Our projects go beyond mere technology; they represent pioneering statements of unmatched craftsmanship and technological brilliance.
<br/><br/>

With a focus on sustainability and innovation, we integrate the latest advancements in artificial intelligence and data science, ensuring that our clients experience the pinnacle of efficiency and precision. From advanced analytics that empower decision-making to security forensics that safeguard information, Pleiades Technologies is at the forefront of reshaping the future.
<br/><br/>

Our mission is to provide exceptional technological tools for industries, sectors, and governments, helping them achieve greater efficiency, productivity, and economic growth. We carefully analyze each client&apos;s needs through system studies, feasibility assessments, and business evaluations. This customized approach ensures that our solutions meet their specific requirements. We then define the project, create a conceptual design, and develop prototypes to prepare for developing and implementing tailored software solutions that go beyond expectations.
<br/><br/>


 </p>
 <span className='font-bold text-2xl italic text-white'>Mr Ramsey Matthew</span>
                    </div>
                </HoverCard>
    </div>
    </div>
    </>
  )
}

export default Team