'use client'

import { Link } from 'react-scroll'
import { HiArrowNarrowDown } from 'react-icons/hi'
import TextAnimated from '@/components/TextAnimated'
import { Cinzel } from '@/app/fonts'

export default function Hero() {
  return (
    <section className='flex flex-col items-center gap-24 px-8 pt-28 pb-8'>
      <div className='flex justify-center'> <TextAnimated /></div>
      <div className='flex flex-col items-center gap-10'>
        <h1 className={` ${Cinzel.className} text-8xl font-bold text-center tracking-wider`}>THIAGO FERNANDES</h1>
        <h2 className='text-3xl tracking-widest'>EGENHEIRO DE SOFTWARE |  DESENVOLVEDOR</h2>
      </div>


      <Link to="about" smooth={true} spy={true} duration={600} offset={-50} className="cursor-pointer">
        <div className="mouse-scroll mt-10">
          <HiArrowNarrowDown className="arrow-down" size={20} color='#CC3CFF' />
        </div>
      </Link>
    </section>
  )
}