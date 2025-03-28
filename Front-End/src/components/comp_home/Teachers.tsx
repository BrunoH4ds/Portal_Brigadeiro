import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";

export default function Teachers() {
  return (
    <section className="flex text-white flex-col justify-around p-5 gap-10">
      {/* Texto */}
      <h1 className="text-3xl font-bold bg-white/50 rounded-md p-2 text-blue-800">
        Conheça alguns de nossos professores
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="flex flex-col items-center bg-white/50 backdrop-blur-md rounded-md p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full lg:w-[350px] h-[250px] lg:h-[300px]">
            <Image
              src="/home/teachers/teacher1.png"
              alt="Escola"
              width={500}
              height={400}
              draggable={false}
              className="object-cover w-full h-full border-b-4 border-blue-800"
            />
            <div className="absolute flex justify-end top-2.5 right-2.5">
              <div className="flex gap-0.5 text-amber-300">
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
              </div>
            </div>
          </div>
          <h1 className="text-blue-800 text-2xl font-bold mt-4">
            Higor Bernardez
          </h1>
          <p className="mt-4 text-center">
            Sou graduado em Educação Física pela Universidade de São Paulo, com
            mais de 10 anos de experiência no ensino técnico. Minha abordagem
            pedagógica foca em metodologias ativas, buscando sempre integrar
            teoria e prática para engajar os alunos de forma dinâmica e
            colaborativa.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white/50 backdrop-blur-md rounded-md p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full lg:w-[350px] h-[250px] lg:h-[300px]">
            <Image
              src="/home/teachers/teacher1.png"
              alt="Escola"
              width={500}
              height={400}
              draggable={false}
              className="object-cover w-full h-full border-b-4 border-blue-800"
            />
            <div className="absolute flex justify-end top-2.5 right-2.5">
              <div className="flex gap-0.5 text-amber-300">
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
              </div>
            </div>
          </div>
          <h1 className="text-blue-800 text-2xl font-bold mt-4">Joana Silva</h1>
          <p className=" mt-4 text-center">
            Sou mestre em Matemática pela Universidade Estadual de Campinas
            (UNICAMP) e tenho 8 anos de experiência no ensino de álgebra e
            cálculo. Acredito que a aprendizagem deve ser desafiadora e
            envolvente, promovendo a autonomia dos alunos e o desenvolvimento do
            pensamento lógico.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white/50 backdrop-blur-md rounded-md p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative w-full lg:w-[350px] h-[250px] lg:h-[300px]">
            <Image
              src="/home/teachers/teacher1.png"
              alt="Escola"
              width={500}
              height={400}
              draggable={false}
              className="object-cover w-full h-full border-b-4 border-blue-800"
            />
            <div className="absolute flex justify-end top-2.5 right-2.5">
              <div className="flex gap-0.5 text-amber-300">
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
                <IconStarFilled />
              </div>
            </div>
          </div>
          <h1 className="text-blue-800 text-2xl font-bold mt-4">
            Carlos Oliveira
          </h1>
          <p className=" mt-4 text-center">
            Como graduado em História pela Universidade Federal de São Carlos,
            com mais de 15 anos de experiência, busco promover um ensino
            crítico, que permita aos alunos compreenderem a História como um
            processo dinâmico, interligado com as questões sociais atuais.
          </p>
        </div>
      </div>
    </section>
  );
}
