"use client"
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { CursorContext } from '../CursorContext'

const Discount = () => {
  const [hovered, setHovered] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const { mouseEnterHandler, mouseLeaveHandler } = useContext( CursorContext );
  return (
    <div className="flex relative md:pl-10">
      <img
        alt=""
        aria-hidden="true"
        width="2712"
        height="2712"
        className="absolute top-0 right-0 h-auto pointer-events-none"
        loading="lazy"
        decoding="async"
        src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp"
      />
      <div className="flex items-center flex-row relative">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          className="w-[3px] h-full increase1"
        ></motion.div>
        <img
          alt=""
          aria-hidden="true"
          width="81"
          height="485"
          style={{
            left: "calc(50% - 2px)",
            height: "auto",
            maxWidth: "9vw",
            transitionDelay: "100ms",
          }}
          className="hidden md:block absolute bottom-4 left-0"
          loading="lazy"
          decoding="async"
          src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-collaboration.svg"
        />
      </div>
      <div className="lg:pl-24 md:pl-16 pl-6">
        <div className="flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row">
          <div className="py-4 mb-2 w-full">
            <div className="flex flex-col my-10">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <svg
                  aria-hidden="true"
                  height="24"
                  viewBox="0 0 24 24"
                  version="1.1"
                  width="24"
                  fill="currentColor"
                  data-view-component="true"
                  className="text-white"
                >
                  <path d="M2.828 4.328C5.26 1.896 9.5 1.881 11.935 4.317c.024.024.046.05.067.076 1.391-1.078 2.993-1.886 4.777-1.89a6.22 6.22 0 0 1 4.424 1.825c.559.56 1.023 1.165 1.34 1.922.318.756.47 1.617.468 2.663 0 2.972-2.047 5.808-4.269 8.074-2.098 2.14-4.507 3.924-5.974 5.009l-.311.23a.752.752 0 0 1-.897 0l-.312-.23c-1.466-1.085-3.875-2.869-5.973-5.009-2.22-2.263-4.264-5.095-4.27-8.063a6.216 6.216 0 0 1 1.823-4.596Zm8.033 1.042c-1.846-1.834-5.124-1.823-6.969.022a4.712 4.712 0 0 0-1.382 3.52c0 2.332 1.65 4.79 3.839 7.022 1.947 1.986 4.184 3.66 5.66 4.752a78.214 78.214 0 0 0 2.159-1.645l-2.14-1.974a.752.752 0 0 1 1.02-1.106l2.295 2.118c.616-.52 1.242-1.08 1.85-1.672l-2.16-1.992a.753.753 0 0 1 1.021-1.106l2.188 2.02a18.963 18.963 0 0 0 1.528-1.877l-.585-.586-1.651-1.652c-1.078-1.074-2.837-1.055-3.935.043-.379.38-.76.758-1.132 1.126-1.14 1.124-2.96 1.077-4.07-.043-.489-.495-.98-1.475-1.482a.752.752 0 0 1-.04-1.019c.234-.276.483-.576.745-.893.928-1.12 2.023-2.442 3.234-3.576Zm9.725 6.77c.579-1.08.92-2.167.92-3.228.002-.899-.128-1.552-.35-2.08-.22-.526-.551-.918-1.021-1.365-.469-.447-1.083-.912-1.94-1.376-2.154-1.219-4.726-1.307-6.75-.188a11.615 11.615 0 0 0-.785.448c-1.812-1.347-4.467-1.28-6.21.465-2.121 1.956-2.17 5.364-.148 7.686 1.038 1.057 2.263 1.883 3.625 2.546l-.366.27a.752.752 0 0 1-.897 0l-.368-.272c-1.36-.996-2.583-2.22-3.62-3.275-1.743-1.783-1.69-4.355.166-6.478 1.721-1.585 4.56-1.686 6.475-.196a.752.752 0 0 1 0 1.084l-1.055 1.076c-.29.291-.566.576-.829.853.342.284.725.583 1.14.9.598.47 1.19.935 1.773 1.415.571.481 1.08.956 1.551 1.446.471.49.814.996 1.02 1.515.206.52.29 1.174.29 2.08 0 1.062-.342 2.148-.924 3.23-.498.94-1.128 1.903-1.818 2.89l.615.615c.78.78 1.924.838 2.607.155.484-.484.92-1.076 1.298-1.76.386-.687.705-1.507.93-2.394Zm-3.145-1.1c.543-.667.785-1.367.73-2.094-.055-.728-.368-1.352-1.03-1.9-.568-.537-1.292-.825-2.13-.822-.87 0-1.585.312-2.12.88-.543.667-.785 1.367-.73 2.095.055.727.368 1.352 1.03 1.899.568.537 1.292.825 2.13.822.87 0 1.586-.312 2.12-.88Z"></path>
                </svg>
                <motion.p
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className=" text-4xl text-white font-bold"
                >
                  <motion.span variants={item}>A</motion.span>
                  <motion.span variants={item}>E</motion.span>
                  <motion.span variants={item}>R</motion.span>
                  <motion.span variants={item}>O</motion.span>
                  <motion.span variants={item}>S</motion.span>
                  <motion.span variants={item}>P</motion.span>
                  <motion.span variants={item}>A</motion.span>
                  <motion.span variants={item}>C</motion.span>
                  <motion.span variants={item}>E</motion.span>
                  <motion.span variants={item}> </motion.span>
              <motion.span variants={item}>D</motion.span>
              <motion.span variants={item}>I</motion.span>
              <motion.span variants={item}>V</motion.span>
              <motion.span variants={item}>I</motion.span>
              <motion.span variants={item}>S</motion.span>
              <motion.span variants={item}>I</motion.span>
              <motion.span variants={item}>O</motion.span>
              <motion.span variants={item}>N</motion.span>
              {/* <motion.span variants={item}>o</motion.span>
              <motion.span variants={item}>w</motion.span>
              <motion.span variants={item}>e</motion.span>
              <motion.span variants={item}>r</motion.span>
              <motion.span variants={item}>s</motion.span> */}
                </motion.p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className="md:pr-6"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <h2 className="mb-4 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full text-[#7d8590]">
                <span className="font-semibold text-white">
                  Soar above the ordinary.
                </span>{" "}
                Our aerospace division is dedicated to advancing space
                exploration and aviation technology, propelling humanity to new
                heights.
              </h2>
              <a
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                href=""
                className="py-1 inline-block text-xl text-white font-semibold"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={` mb-[2px] text-white transition inline-block ml-3 ease-in duration-300  ${
                    hovered ? "translate-x-0 " : "-translate-x-1"
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
                    className={` text-black transition ease-in duration-150 ${
                      hovered ? " opacity-100" : "opacity-0 "
                    }`}
                    stroke="currentColor"
                    d="M1.75 8H11"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <div
                  className={` ${
                    hovered ? "w-11/12 scale-100" : "w-0 scale-0"
                  } origin-left  transition ease-in duration-300 h-[2.5px] bg-black rounded-full`}
                ></div>
              </a>
            </motion.div>
          </div>
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className='py-4 px-6 w-full'
          >
            <div className='relative'>
              <div className='relative'>
                <div className='md:absolute z-[1] top-[-200px] lg:top-[-300px] right-0 shadow-2xl'>
                  <img
                    src='https://github.githubassets.com/images/modules/site/home-campaign/illu-projects.png'
                    alt=''
                    loading='lazy'
                    decoding='async'
                    width='1190'
                    height='1004'
                    className='w-full h-auto d-block rounded-lg'
                  />
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "tween", duration: 0.3 }}
          className="mb-10 md:mb-32 pb-4 "
        >
          <div className="py-4 text-left">
            <div
              className="z-[1] inline-block rounded-full px-2 border-2 border-[#ffc2b2] relative font-medium bg-gradient-to-r from-[#ffa28b] to-[#ffc2b2] bg-clip-text text-transparent"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <span className="font-semibold text-[12px]">
                Insightful analysis
              </span>
            </div>
            <h3 className="text-[#ffa28b] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">
              90% success
            </h3>
            <p className="mb-3 md:text-xl text-base font-medium text-white">
              Drone Development and Exploration
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Discount;
