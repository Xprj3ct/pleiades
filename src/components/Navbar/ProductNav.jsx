"use client"

import React, { useState } from 'react';
import Navlist from './NavUtils/Navlist';
import Navlist2 from './NavUtils/Navlist2';

const ProductNav = () => {
    const [show, setShow] = useState(false);

    const handleOnclick = () => {
        if (window.innerWidth < 1024) {
            setShow(!show);
        }
    }

    const handleMouseEnter = () => {
        if (window.innerWidth > 1024) {
            setShow(true);
        }
    }

    const handleMouseLeave = () => {
        if (window.innerWidth > 1024) {
            setShow(false);
        }
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button onClick={() => setShow(!show)} type='button' className={`flex items-center p-1 max-lg:font-semibold transition ease-in uppercase duration-150 max-lg:justify-between max-lg:w-full ${show ? "lg:text-blue-600 ": ""}`}>
                Services
                <svg opacity="0.5" aria-hidden="true" height="16" fill='currentColor' viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={` ml-1 transition-all ease-in duration-200  max-lg:scale-x-125 ${show ? "lg:mt-2 opacity-40 max-lg:0": "mt-0 max-lg:-rotate-90"}`}>
                    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                </svg>
            </button>
            <div className={`relative lg:absolute lg:flex -ml-5 bg-gray-200 rounded-md lg:py-4 py-2 transition ease-in duration-150 ${show ? "opacity-100 " : "opacity-0 invisible max-lg:hidden"}`}>
                <div className='lg:px-4 lg:border-r-[1px] mb-4 lg:mb-0 lg:pr-10 shadow-none rounded-none md:shadow-xl md:rounded-lg'>
                    <ul className='max-lg:pl-6'>
                    <li className=''>
    <Navlist
        main='Digital Nexus'
        submain='Automate any workflow'
        path2=''
        path='M3.5 3.5a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1Zm0-2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3Zm0 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Zm1 1v4h7v-4Zm8 0v1h3v-1Zm0 2v1h3v-1Zm-11-5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5Z'
    />
</li>
<li className=''>
    <Navlist
        main='AI Innovation'
        submain='Unleash the power of artificial intelligence'
        path2=''
        path='M12 0c-6.628 0-12 4.52-12 10 0 4.785 5.156 8.076 8 10v4c0 1.105.895 2 2 2h4c1.105 0 2-.895 2-2v-4c2.844-1.924 8-5.215 8-10 0-5.48-5.372-10-12-10zm-6.655 8.747l-.345-.346c-.585-.585-.585-1.535 0-2.121.585-.585 1.535-.585 2.121 0l.346.345c.585.585.585 1.536 0 2.121-.586.585-1.536.585-2.121 0zm3.655 6.253c-2.295 0-4.577-.901-6.293-2.617-.195-.195-.195-.512 0-.707.195-.195.512-.195.707 0 1.337 1.336 3.512 1.336 4.85 0 .195-.195.512-.195.707 0 .195.195.195.512 0 .707-1.716 1.335-3.998 2.617-6.292 2.617zm6.608-2.617c-.585-.585-.585-1.536 0-2.121.585-.585 1.535-.585 2.121 0l.345.345c.585.586.585 1.536 0 2.121-.585.586-1.536.586-2.121 0l-.345-.345zm-1.354-3.333c-1.195 1.18-3.064 1.845-4.953 1.845s-3.758-.665-4.953-1.845c-.195-.195-.195-.512 0-.707.195-.195.512-.195.707 0 .973.972 2.531 1.518 4.246 1.518 1.715 0 3.273-.546 4.246-1.518.195-.195.512-.195.707 0 .195.195.195.512 0 .707z'
    />
</li>


<li className=''>
    <Navlist
        main='Software Development'
        submain='Build with modern technologies'
        path2='M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v2h10V5zm0 4v2h10V9zm0 4v2h10v-2z'
    />
</li>

                        <li className=''>
                            <Navlist main='Data Science' submain="Maximize your data's power" path2='M10 17.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z' path='M3.5 3.75C3.5 2.784 4.284 2 5.25 2h13.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 18.75 13H5.25a1.75 1.75 0 0 1-1.75-1.75Zm-2 12c0-.966.784-1.75 1.75-1.75h17.5c.966 0 1.75.784 1.75 1.75v4a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75ZM5.25 3.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h13.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Zm-2 12a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h17.5a.25.25 0 0 0 .25-.25v-4a.25.25 0 0 0-.25-.25Z' />
                        </li>
                    </ul>
                </div>
                </div>
                </li>
    )
}

export default ProductNav