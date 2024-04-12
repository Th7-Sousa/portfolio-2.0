import Image from "next/image"

const CardProject = ({ href, src, name, children }) => {
  return (
    <a target="_blank" href={href} className='transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-95 duration-300 flex flex-col'>
      <Image
        className="rounded-t-md"
        src={src}
        width={350}
        height={300}
        alt="Projeto"
      />
      <div className="flex flex-col gap-2 p-4 bg-dark-100 rounded-b-md text-white">
        <h3 className='text-xl font-bold'>{name}</h3>
        <div className="flex items-center gap-1">
          {children}
        </div>
      </div>
    </a>
  )
}

export default CardProject