import React from 'react'
import { word } from '../constants'

const Hero = () => {
  return (
    <>
   < section id='hero' className='relative overflow-hidden'>
   <div className='absolute top-0 left-0 z-10'>
    <img src='/images/bg.png' alt='background' />
   </div>
   <div className='hero-layout'>
    {/* left hero content*/}
    <header className='flex flex-col justify-center md:w-full w-screen
    md:px-20 px-5'>
      <div className='hero-text'>
        <h1> Shaping 
          <span className='silde'>
            <span className='wrapper'>
              {word.map((word)=>(
                <span key={word.text} className='flex items-center md:gap-3
                gap-1 pb-2'>
                
                <img
                src={word.imagePath}
                alt={word.text}
                className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full
                bg-white-50'/>
                 
                  </span>
              ))}

            </span>

          </span>
        </h1>
        <h2> into Real Projects</h2>
        <h2> that Deliver Results</h2>
      </div>

    </header>
    {/* right hero content */}

   </div>
   
   
   </section>
   </>
  )
}

export default Hero
