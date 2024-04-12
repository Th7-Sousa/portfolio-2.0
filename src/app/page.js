'use client'

import './globals.css'
import { useState } from 'react'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { HiArrowNarrowDown } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { VscDebugBreakpointLog } from 'react-icons/vsc'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { Cinzel } from './fonts'

import Button from '@/components/Button'
import TextAnimated from '@/components/TextAnimated'
import CardProject from '@/components/CardProject'
import Tag from '@/components/Tag'
import Cursor from '@/components/Cursor'
import Nav from '@/components/nav'

export default function Home() {

  return (
    <>

      <main className="w-full min-h-screen bg-transparent flex items-center flex-col gap-16 pb-8 rounded-lg">

        <div className='hero w-full pb-20 flex flex-col gap-12 text-white'>

          <Nav />

          <section className='flex flex-col items-center gap-24 px-8 pt-20 pb-12'>
            <div className='flex justify-center'> <TextAnimated /></div>
            <div className='flex flex-col items-center gap-10'>
              <h1 className={` ${Cinzel.className} text-8xl font-bold text-center tracking-wider`}>THIAGO FERNANDES</h1>
              <h2 className='text-3xl tracking-widest'>SOFTWARE ENGINEER</h2>
            </div>


            <Link to="portfolio" smooth={true} spy={true} duration={600} offset={-50} className="cursor-pointer">
              <div className="mouse-scroll mt-10">
                <HiArrowNarrowDown className="arrow-down" size={20} color='#CC3CFF' />
              </div>
            </Link>
          </section>

        </div>

        <section id='portfolio' className='w-full flex flex-col items-center gap-8 pt-4 text-black'>
          <h2 className='text-5xl font-medium text-center'>Portifólio</h2>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-wrap gap-16'>
              <CardProject href="https://th7-sousa.github.io/Eleicoes-Democraticas/" src="/images/eleicoes.png" name="Eleições Democráticas">
                <Tag tagname="Html" />
                <VscDebugBreakpointLog />
                <Tag tagname="Javascript" />
                <VscDebugBreakpointLog />
                <Tag tagname="Bootstrap" />
              </CardProject>

              <CardProject href="#" src="/images/fast-service.png" name="Fast services (em progresso)">
                <Tag tagname="Next.js" />
                <VscDebugBreakpointLog />
                <Tag tagname="React.js" />
                <VscDebugBreakpointLog />
                <Tag tagname="TailwindCSS" />
              </CardProject>

              <CardProject href="#" src="/images/odonto-admin.png" name="Odonto Admin (em progresso)">
                <Tag tagname="Next.js" />
                <VscDebugBreakpointLog />
                <Tag tagname="React.js" />
                <VscDebugBreakpointLog />
                <Tag tagname="TailwindCSS" />
              </CardProject>
            </div>
          </div>
        </section>

        <section id='contact' className='w-full pt-4 flex flex-col items-center text-black'>
          <div className='flex flex-col gap-8'>
            <h2 className='text-5xl font-medium text-center'>Contato</h2>
            <div className='flex gap-2 items-center'>
              <HiOutlineMail size={28} />
              <span>Email</span>
            </div>
            <div className='flex gap-2 items-center'>
              <BsWhatsapp size={28} />
              <span>Whatsapp</span>

            </div>
            <a className='cursor-pointer' href="https://www.linkedin.com/in/thiago-fernandes-de-sousa/ " title='Linkendin' target='_blank'>
              <BsLinkedin size={32} />
            </a>

            <a className='cursor-pointer' href="https://github.com/Th7-Sousa" title='Github' target='_blank'>
              <FaGithub size={32} />
            </a>
          </div>
        </section>

        <section className='w-full flex justify-center items-center'>
          <p className='text-sm pt-12'>copy</p>
        </section>

      </main >
    </>
  )
}
