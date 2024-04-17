
import CardProject from '@/components/CardProject'
import Tag from '@/components/Tag'

import { VscDebugBreakpointLog } from 'react-icons/vsc'
import { IoRemoveOutline } from "react-icons/io5";


export default function ProjectsSection() {
  return (
    <section id='portfolio' className='w-full bg-brancoContraste-100 flex flex-col items-center gap-8 py-32 px-40 text-black'>
      <div className='flex flex-col items-center gap-1'>
        <h2 className='text-4xl font-bold text-center'>PROJETOS</h2>
        <IoRemoveOutline size={64} className="text-info-100" />
      </div>

      <div className='flex flex-col gap-12'>

      </div>
    </section>
  )
}