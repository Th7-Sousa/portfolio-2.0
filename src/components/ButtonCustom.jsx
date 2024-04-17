export default function ButtonCuston({ text }) {
  return (
    <button className="w-max py-3 px-10 rounded-md font-bold text-white bg-vinho-100
    transition ease-in-out delay-150 hover:-translate-y-1 duration-300 drop-shadow-lg"
    >
      {text}
    </button>
  )
}