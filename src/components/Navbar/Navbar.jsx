"use client"
import Container from '@/app/Container'
import React, { useState, useContext } from 'react'
import ProductNav from "../Navbar/ProductNav"
import SolutionNav from './SolutionNav'

import { CursorContext } from '../CursorContext'
import Link from 'next/link'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const [hovered1, setHovered1] = useState(false)
    const {mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  return (
    <Container>
      {/* work on the text color  */}
      <div className="text-white py-5 relative flex w-full container-items">
        <div
          className="flex items-center 
            justify-between
            max-lg:justify-between max-lg:flex-row-reverse mx-auto w-full"
        >
          <div className="flex justify-between items-center max-lg:w-full">
            <a
              href="./"
              className="cursor-pointer text-[1.5rem] font-semibold uppercase flex flex-col"
            >
              <img
                src="https://yorxsm.sirv.com/Images/Blue%20and%20White%20Modern%20Technology%20Company%20Logo.png"
                className="w-[35%]"
              />
            </a>
            <button
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              type="button"
              className="lg:hidden block"
              onClick={() => setShowNav(!showNav)}
            >
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white mb-1 ${
                  showNav ? "rotate-45 mb-0 translate-y-[5px]" : "rotate-0 mb-1"
                }`}
              ></div>
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white mb-1 
                        ${showNav ? "hidden mb-0" : "mb-1"}`}
              ></div>
              <div
                className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${
                  showNav ? "-rotate-45 mb-0" : "rotate-0"
                }`}
              ></div>
            </button>
          </div>

          <div
            className={`flex max-lg:absolute transition ease-in md:w-[820px] w-full duration-200 top-20 z-40 ${
              showNav
                ? "max-lg:translate-x-0 max-lg:scale-100"
                : "max-lg:max-h-0 max-lg:scale-y-50 max-lg:translate-y-1/4"
            }`}
          >
            <div className="flex max-lg:flex-col lg:items-center max-sm:w-10/12 max-sm:mx-auto sm:ml-auto max-lg:w-[320px] lg:w-full max-lg:max-h-[500px] overflow-y-auto lg:mb-0 max-lg:bg-white max-lg:rounded-lg lg:justify-between md:shadow-none shadow-xl">
              <nav className="mt-0 px-3 lg:px-6 text-[15.5px] mb-0 max-lg:py-10 max-lg:px-5">
                <ul
                  className="flex lg:items-center lg:space-x-5 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl 
                            max-lg:font-medium  font-semibold tracking-wide max-lg:space-y-6 max-lg:h-auto overflow-y-auto"
                >
                  <li className="uppercase">
                    <Link href="./">
                      <span>
                        <a>Home</a>
                      </span>
                    </Link>
                  </li>
                  <li className="uppercase">
                    <Link href="./about">
                      <span>
                        <a>About Us</a>
                      </span>
                    </Link>
                  </li>
                  <li className="uppercase">
                    <Link href="./founder">
                      <span>
                        <a>Founder</a>
                      </span>
                    </Link>
                  </li>
                  <ProductNav />
                  {/* <SolutionNav/> */}
                  <li className="uppercase">
                    <Link href="./contact">
                      <span>
                        <a>Contact Us</a>
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="lg:flex items-center max-lg:flex-col lg:px-0 px-3 mb-3 lg:mb-0 text-left lg:space-x-4 uppercase">
                <a
                  onMouseEnter={() => setHovered1(true)}
                  onMouseLeave={() => setHovered1(false)}
                  href=""
                  className="flex items-center w-full md:w-auto justify-center text-[16px] py-3 px-5 max-md:mt-4 rounded-md border-[#ae88f9] border-[1.5px] text-white"
                >
                  Get in Touch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={` arrow-symbol-mktg text-white ml-3 transition ease-in duration-150 ${
                      hovered1 ? "translate-x-0 " : "-translate-x-1"
                    }`}
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                    ></path>
                    <path
                      className={` text-white transition ease-in duration-150 ${
                        hovered1 ? " opacity-100" : "opacity-0 "
                      }`}
                      stroke="currentColor"
                      d="M1.75 8H11"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Navbar