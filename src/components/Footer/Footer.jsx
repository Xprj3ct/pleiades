"use client"
import React, { useContext } from 'react';
import { CursorContext } from '../CursorContext';

const Footer = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext( CursorContext );
  return (
    <div className='footer relative pt-14 break-words '>
      <div className='max-w-[1280px] mx-auto relative z-[2] overflow-hidden md:items-center md:justify-center items-start  justify-start  flex'>
        <div className='flex flex-col md:items-center md:justify-center items-start justify-start lg:flex-row py-10 mb-8 space-x-6 px-4'>
            <div className='mb-12 px-2'>
              {/* pleiades Logo */}
              <a href="/" data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to home&quot;,&quot;label&quot;:&quot;text:home&quot;}" className="color-fg-default text-black text-4xl d-inline-block" aria-label="Go to GitHub homepage">
              <img src='https://miracle.sirv.com/pleiades-assets/blue-white-pleiades-logo.png' className='w-[50%]' />
              </a>
              <div className='text-white'  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >
                <h2 className='mt-6 font-semibold'>Subscribe to our newsletter</h2>
                <p className="text-[14px] text-[#7d8590] mb-6 ">Get Innovation updates, company news, and more.</p>
                <a href="" className='mb-6 px-6 py-3 text-[17px] font-semibold border-[0.5px] border-gray-400 rounded-lg'>Subscribe</a>
              </div>
            </div>

            <div className='flex flex-col w-full justify-between gap-2'>
            <div className='text-white'  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >
                <h2 className='mt-6 mb-2 font-semibold flex items-center'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
</span> &nbsp;
                    <span>Office Location</span>
                </h2>
                <p className="text-[14px] text-[#7d8590] mb-6 ">B15/6 step one estate, dorkashi crescent, FCT Abuja</p>
              </div>
            <div className='text-[#7d8590]'>
                <ul className='text-[14px] flex flex-row md:gap-6 gap-4 flex-wrap'>
                    <li className='mb-4'><a href=""  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >About</a></li>
                    <li className='mb-4'><a href=""  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >Services</a></li>
                    <li className='mb-4'><a href="">Team</a></li>
                    <li className='mb-4'><a href=""  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >Career</a></li>
                    <li className='mb-4'><a href=""  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >Support</a></li>
                    <li className='mb-4'><a href=""  onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >Blog</a></li>
                </ul>
              </div>
            </div>
            {/* <div className='lg:flex w-full justify-between grid md:grid-cols-4 grid-cols-2 gap-2'>
              <div className='text-[#7d8590]'>
                <h2 className='font-medium mb-4 font-mono'>Services</h2>
                <ul className='text-[14px]'>
                    <li className='mb-4'><a href="">Features</a></li>
                    <li className='mb-4'><a href="">Security</a></li>
                    <li className='mb-4'><a href="">Team</a></li>
                    <li className='mb-4'><a href="">Enterprise</a></li>
                </ul>
              </div>
              <div className='text-[#7d8590]'>
                <h2 className='font-medium mb-4 font-mono'>Company</h2>
                <ul className='text-[14px]'>
                    <li className='mb-4'><a href="">About</a></li>
                    <li className='mb-4'><a href="">Partners</a></li>
                    <li className='mb-4'><a href="">Careers</a></li>
                </ul>
              </div>
              <div className='text-[#7d8590]'>
                <h2 className='font-medium mb-4 font-mono'>Contact</h2>
                <ul className='text-[14px]'>
                    <li className='mb-4'><a href="">Socials</a></li>
                    <li className='mb-4'><a href="">Partners</a></li>
                    <li className='mb-4'><a href="">Careers</a></li>
                </ul>
              </div>
            </div> */}
        </div>
      </div>
      <div className='bg-[#161b22]'>
        <div className='max-w-[1280px] mx-auto text-[12px] md:flex flex-row-reverse py-6 justify-between items-center px-4'>
          <ul className='flex items-center max-md:mb-4  '>
            <li className='mr-4'>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li className='mr-4'>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
            <li>
              <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
            </li>
          </ul>
          <ul className='flex items-center mb-4 sm:mb-0 text-[#7d8590] flex-wrap' >
            <li className="mr-3 ">© 2024 Pleiades, Inc.</li>
            <li className='mr-3 '><a href="">Terms</a></li>
            <li className='mr-3 '><a href="">Privacy</a></li>
            <li className='mr-3 '><a href="">Sitemap</a></li>
          </ul>
        </div>
      </div>
      </div>

  )
}

export default Footer;