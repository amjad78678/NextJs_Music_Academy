import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'

const HeroSection = () => {
  return (
    <div
    className='h-auto md:h-[40rem] w-full rouded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py:0'
    >
 <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className='p-4 relative z-10 w-full text-center'>

<h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Mohammed Amjad Ali</h1>
<p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
A Full Stack Developer specializing in MERN. Crafting dynamic web applications with React, Next.js, Node.js, Express, and MongoDB. Bridging frontend and backend for seamless user experiences.
</p>
<div className='mt-4'>
<Link href={'/projects'}>Explore Projects</Link>
</div>

        </div>
    </div>
  )
}

export default HeroSection