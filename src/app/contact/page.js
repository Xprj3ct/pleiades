import React from 'react'
import { motion } from "framer-motion"
import Navbar from '@/components/Navbar/Navbar';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
    <Navbar/>
        <div className='max-w-[1280px] mx-auto font-roboto md:mt-20 mt-5 px-8'>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='font-roboto font-[800] text-4xl'>Get in Touch</h1>
                <span className='font-xl text-gray-400 font-semibold text-center'>
                    Are you ready to scale up your business?<br/> give us a chat.
                </span>
            </div>

            {/* cards */}
            <div>
                <ContactCard/>
            </div>

            <div>
                <div>
                <div className='flex items-center justify-center flex-col gap-2'>
                <h1 className='font-roboto font-[800] text-4xl'>Message Us</h1>
                <span className='font-xl text-gray-400 font-semibold text-center'>
                    We&apos;ll get back to you within 24 hours.
                </span>
            </div>  
                </div>

                <div>
                    <ContactForm/>
                </div>
            </div>
    </div>
    </>
  )
}

export default Contact;