'use client'

import { IoRemoveOutline } from "react-icons/io5";
import Skill from "./Skill";
import ButtonCuston from "./ButtonCustom";

export default function AboutSection() {

  const skills = {
    html: 'HTML', css: 'CSS', javascript: 'JavaScript', typescript: 'TypeScript', react: 'ReactJS', next: 'Next.js', node: 'Node.js',
    git: 'Git', tailwind: 'Tailwind.CSS', banco: 'Banco de Dados', docker: 'Docker', design: 'UI/UX Design', seo: 'SEO', ageis: 'Metodologias Ágeis'
  }

  return (
    <section id='about' className='w-full pt-32 pb-32 px-40 flex flex-col items-center bg-brancoFosco-100 text-black'>
      <div className='flex flex-col gap-8'>

        <div className='flex flex-col items-center gap-0'>
          <h2 className='text-4xl font-bold text-center'>SOBRE MIM</h2>
          <IoRemoveOutline size={64} className="text-violeta-100" />
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2 w-1/2">
            <h3 className="text-2xl mb-3 font-semibold">Quem sou eu?</h3>
            <p className="text-black text-lg font-medium">
              Como um especialista em <b>Desenvolvimento Web Full-Stack</b>, dedico-me a criar e gerenciar sites e aplicativos web,
              contribuindo significativamente para o sucesso global do produto. Acesse a seção <b>Projetos</b> para uma amostra do meu trabalho.
            </p>
            <p>

            </p>
            <p className="text-black text-lg font-medium mb-8">
              Estou ativamente buscando <b>Oportunidades de emprego</b> que me permitam contribuir, expandir meu conhecimento e
              avançar na minha carreira. Se você tem uma posição que se alinha com minhas habilidades e experiência, fique
              à vontade para entrar em contato comigo.
            </p>
            <ButtonCuston text="CONTATO" />
          </div>

          <div className=" w-5/12 flex flex-col gap-3">
            <h3 className="text-2xl mb-3 font-semibold">Minhas Skills</h3>
            <div className="flex flex-wrap gap-6 border-1">
              {
                Object.entries(skills).map(([key, value]) => {
                  return <Skill skillName={value} key={key} />
                })
              }

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}