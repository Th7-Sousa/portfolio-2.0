
import './globals.css'


import Nav from '@/components/Nav'
import ProjectsSection from '@/components/ProjectsSection'
import Hero from '@/components/Hero'
import ContatoSection from '@/components/ContactSection'
import AboutSection from '@/components/AboutSection'

export default function Home() {

  return (
    <>

      <main className="w-full min-h-screen bg-transparent flex items-center flex-col rounded-lg bg-brancoFosco-100">

        <div className='hero w-full pb-20 flex flex-col gap-12 text-white'>
          <Nav />
          <Hero />
        </div>

        <div id='topics' w-full className='flex flex-col'>
          <AboutSection />

          <ProjectsSection />

          <ContatoSection />

        </div>

      </main >
    </>
  )
}
