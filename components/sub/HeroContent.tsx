'use client'

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'


function HeroContent() {
  return (
    <motion.div 
    initial= 'hidden'
    animate= 'visible'
    transition={{ duration: 1 }}
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
        <div className='w-full h-full flex flex-col justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
         variants={slideInFromLeft(0.5)}
         className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
        >
            Providing
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>the beat</span>
            project experience  
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
            &apos;I am a fullstack developer with a passion for creating beautiful and functional web applications. I am always looking for new opportunities to learn and grow as a developer. I am proficient in JavaScript, React, Node.js, and SQL. I am also familiar with C#, .Net, and REST APIs. I am currently seeking a full-time position as a fullstack developer.
        </motion.p>
        <motion.a
        variants={slideInFromLeft(1)}
        className='py-2 button-primary text-white text-center rounded-lg cursor-pointer max-w-[200px]'
        >
            Learn More!
        </motion.a>
        </div>
    </motion.div>
  )
}

export default HeroContent