'use client'

import { Link } from 'react-scroll'
import { HiArrowNarrowDown } from 'react-icons/hi'
import TextAnimated from '@/components/TextAnimated'
import { Cinzel } from '@/app/fonts'

export default function Hero() {
  return (
    <section className=' h-screen flex flex-col items-center gap-28 px-8 pt-32 pb-8'>
      <div className='flex justify-center'> <TextAnimated /></div>
      <div className='flex flex-col items-center gap-10'>
        <h1 className={` ${Cinzel.className} text-8xl font-bold text-center tracking-wider
         max-[1130px]:text-7xl
         max-[864px]:text-6xl
         max-md:text-5xl
         max-[330px]:text-[36px]
        `}
        >THIAGO FERNANDES
        </h1>
        <h2 className='text-3xl text-center tracking-widest
        max-[1130px]:text-2xl
        max-md:text-xl
        '>
          DESENVOLVEDOR DE SOFTWARE
        </h2>
      </div>


      <Link to="about" smooth={true} spy={true} duration={600} offset={-50} className="cursor-pointer ">
        <div className="mouse-scroll mt-10">
          <HiArrowNarrowDown className="arrow-down" size={20} color='#4B6ED5' />
        </div>
      </Link>
    </section>
  )
}