import { IoRemoveOutline } from "react-icons/io5";

export default function ContatoSection() {
  return (
    <section id='contact' className='w-full px-40 py-32 flex flex-col items-center bg-brancoFosco-100 text-black'>
      <div className='flex flex-col gap-8'>

        <div className='flex flex-col items-center gap-1'>
          <h2 className='text-4xl font-bold text-center'>CONTATO</h2>
          <IoRemoveOutline size={64} className="text-info-100" />
        </div>

      </div>
    </section>
  )
}