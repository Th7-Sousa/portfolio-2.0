'use client'

import { useState } from 'react'
import CardProject from '@/components/CardProject'
import Tag from '@/components/Tag'
import Image from 'next/image'
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { HiArrowNarrowDown } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { VscDebugBreakpointLog } from 'react-icons/vsc'
import { HiOutlineMail } from 'react-icons/hi'
import Button from '@/components/Button'

import { Link } from 'react-scroll';

import { cinzel } from './fonts'

import './globals.css'
import TextAnimated from '@/components/TextAnimated'
import CursorVagalume from '@/components/CursorVagalume'

export default function Home() {
  const [currentLanguage, setCurrentLanguage] = useState('pt');

  const handleChangeLanguage = (e) => {
    setCurrentLanguage(e.target.value);
  };

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'pt' ? 'en' : 'pt');
  };

  const translations = {
    pt: {
      greeting: 'THIAGO FERNANDES',
      description: 'DESENVOLVEDOR FRONT-END',
      portfolio: 'Portifólio',
      contact: 'Contato',
      email: 'thiagof.profissional@gmail.com',
      whatsapp: '(63)99975-3649',
      copy: 'Th Web Designer 2023 - Alguns direitos resevardos',
    },
    en: {
      greeting: 'THIAGO FERNANDES',
      description: 'FRONT END DEVELOPER',
      portfolio: 'Portfolio',
      contact: 'Contact',
      email: 'thiagof.profissional@gmail.com',
      whatsapp: '(63)99975-3649',
      copy: 'Th Web Designer 2023 - Some rights reserved',
    },
  };

  const handleClick = () => {
    alert('Botão clicado!');
  };
  return (
    <>
      <CursorVagalume />
      <main className="w-full min-h-screen shadow-2xl shadow-violeta-100 bg-transparent flex items-center flex-col gap-12 py-8 px-12 rounded-lg">

        <nav className='w-full flex justify-between'>
          <div className='flex gap-1 items-center'>
            <span className={` ${cinzel.className} text-3xl `}>Th</span>
            <Image
              src="/images/iconth.svg"
              width={40}
              height={40}
              alt="Logotipo Th"
            />
          </div>

          <div className='flex items-center gap-6'>
            <div className='pr-4'>
              <select title='Idioma' value={currentLanguage} onChange={handleChangeLanguage} className='outline-none max-md:hidden cursor-pointer bg-transparent border border-solid border-blue-500 text-blue-500 rounded px-2 py-1'>
                <option value="pt">Português</option>
                <option value="en">English</option>
              </select>
              <button onClick={toggleLanguage} className='hidden max-md:flex cursor-pointer bg-transparent border border-solid border-blue-500 text-blue-500 rounded px-2 py-1'>
                {currentLanguage === 'pt' ? 'EN' : 'PT'}
              </button>
            </div>
            <a className='cursor-pointer' href="https://www.linkedin.com/in/thiago-fernandes-de-sousa/ " title='Linkendin' target='_blank'>
              <BsLinkedin size={32} />
            </a>

            <a className='cursor-pointer' href="https://github.com/Th7-Sousa" title='Github' target='_blank'>
              <FaGithub size={32} />
            </a>
          </div>

        </nav>

        <section className='flex flex-col items-center gap-24 pt-4 pb-12'>
          <div className='flex justify-center'> <TextAnimated /></div>
          <div className='flex flex-col items-center gap-10'>
            <h1 className={` ${cinzel.className} text-8xl font-medium tracking-wider`}>{translations[currentLanguage].greeting}</h1>
            <h2 className='text-2xl tracking-widest'>{translations[currentLanguage].description}</h2>
          </div>

          <Link to="portfolio" smooth={true} spy={true} duration={600} offset={-50} className="cursor-pointer">
            <div className="mouse-scroll mt-10">
              <HiArrowNarrowDown className="arrow-down" size={20} color='#CC3CFF' />
            </div>
          </Link>
        </section>

        <section id='portfolio' className='w-full flex flex-col items-center gap-8'>
          <h2 className='text-6xl text-white'>{translations[currentLanguage].portfolio}</h2>
          <div className='flex flex-col gap-12'>
            <div className='flex flex-wrap gap-28'>
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

        <section className='w-full pt-4 flex flex-col items-center'>
          <div className='flex flex-col gap-8'>
            <h2 className='text-6xl text-white'>{translations[currentLanguage].contact}</h2>
            <div className='flex gap-2 items-center'>
              <HiOutlineMail size={28} />
              <span>{translations[currentLanguage].email}</span>
            </div>
            <div className='flex gap-2 items-center'>
              <BsWhatsapp size={28} />
              <span>{translations[currentLanguage].whatsapp}</span>
              <Button onClick={handleClick}>Clique aqui</Button>
            </div>
          </div>
        </section>

      </main>

      <section className='w-full flex justify-center items-center'>
        <p className='text-sm pt-12'>{translations[currentLanguage].copy}</p>
      </section>
    </>
  )
}
