export default function Skill({ skillName }) {
  return (
    <div className="px-5 py-2 bg-zinc-200 cursor-default text-gray-800 font-bold rounded-sm w-max shadow-md
    transition ease-in-out delay-50 hover:scale-110 duration-300"
    >
      {skillName}
    </div>
  )
}