"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import HoverCard from "@/components/Productivity/HoverCard";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1280px] mx-auto font-roboto md:mt-20 mt-5 px-8">
        <div className="flex md:pl-7 space-x-3 md:space-x-10">
          <div className="flex flex-col items-center">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>

              <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-3 z-3"></span>
            </div>
            <div className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent"></div>
          </div>
          <div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: "tween" }}
            className="md:w-10/12 mb-24"
          >
            <h2
              className="text-[20px] md:text-2xl mb-7  text-white js-build-in-item build-in-slideX-left build-in-animate font-bold"
              style={{ transitionDelay: "200ms" }}
            >
              About Us
            </h2>
            <h3
              className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-[#939aff]">
                Introducing Pleiades Technologies,{" "}
              </p>
              where technological brilliance converges with innovation to
              reshape industries and redefine progress.
            </h3>
          </div>
        </div>
        <div>
          <HoverCard
            backgroundColor="#939aff"
            direction="flex-row"
            left="-400px"
          >
            <div className="md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 ">
              <p className=" text-sm md:text-2xl mb-6 font-medium text-[#7d8590]">
                <span className="text-white font-semibold">
                  Established on October 29, 2021, our mantra—Innovate,
                  Collaborate, Excel—is not just a slogan; it is our guiding
                  principle.{" "}
                </span>
                At Pleiades, we transcend the traditional boundaries of
                technology, setting new standards that are not just cutting-edge
                but transformative. We don&apos;t just offer services; we craft
                tailored solutions that stand as the epitome of technological
                artistry. Every algorithm, every line of code, and every system
                developed is meticulously curated to reflect our commitment to
                exceptional quality.
                <br />
                <br />
                Our commitment remains steadfast: Pleiades embodies only what is
                advanced, exceptional, and groundbreaking. We don&apos;t follow
                trends; we establish them. Our projects go beyond mere
                technology; they represent pioneering statements of unmatched
                craftsmanship and technological brilliance.
                <br />
                <br />
                With a focus on sustainability and innovation, we integrate the
                latest advancements in artificial intelligence and data science,
                ensuring that our clients experience the pinnacle of efficiency
                and precision. From advanced analytics that empower
                decision-making to security forensics that safeguard
                information, Pleiades Technologies is at the forefront of
                reshaping the future.
                <br />
                <br />
                Our mission is to provide exceptional technological tools for
                industries, sectors, and governments, helping them achieve
                greater efficiency, productivity, and economic growth. We
                carefully analyze each client&apos;s needs through system
                studies, feasibility assessments, and business evaluations. This
                customized approach ensures that our solutions meet their
                specific requirements. We then define the project, create a
                conceptual design, and develop prototypes to prepare for
                developing and implementing tailored software solutions that go
                beyond expectations.
                <br />
                <br />
                However, our efforts extend further. Pleiades disrupts the
                technology sector, questioning norms and envisioning new
                possibilities. Our solutions go beyond mere products; they serve
                as strategic assets, transforming operations and accelerating
                progress. We lead, and others follow—because, at Pleiades,
                we&apos;re not just delivering solutions; we&apos;re expanding
                the possibilities of technological excellence.
                <br />
                <br />
                Join us on a journey where innovation, collaboration, and
                excellence converge. Pleiades Technologies is more than a
                company; we are the architects of your future, the innovators of
                your experience, and the disruptors of the ordinary.
                <br />
                <br />
                Welcome to Pleiades Technologies, where excellence is not an
                option—it&apos;s our standard.
              </p>
              <br />
              <div>
                <Link href="./founder">
                  <span
                    onMouseEnter={() => setHovered2(true)}
                    onMouseLeave={() => setHovered2(false)}
                    className="py-1 inline-block text-xl text-white font-semibold"
                  >
                    Meet Our Founder
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={` mb-[2px] text-white transition inline-block ml-3 ease-in duration-300 `}
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
                        className={` text-black transition ease-in duration-150 `}
                        stroke="currentColor"
                        d="M1.75 8H11"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <div
                      className={`origin-left  transition ease-in duration-300 h-[2.5px] bg-black rounded-full`}
                    ></div>
                  </span>
                </Link>
              </div>
            </div>
          </HoverCard>
        </div>
      </div>
    </>
  );
};

export default About;
