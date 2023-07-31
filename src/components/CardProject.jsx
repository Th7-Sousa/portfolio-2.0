import Image from "next/image"

const CardProject = ({ href, src, name, children }) => {
  return (
    <a target="_blank" href={href} className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300 flex flex-col gap-1'>
      <Image
        src={src}
        width={300}
        height={300}
        alt="Projeto"
      />
      <h3 className='text-xl font-bold'>{name}</h3>
      <div className="flex items-center gap-1">
        {children}
      </div>
    </a>
  )
}

export default CardProject