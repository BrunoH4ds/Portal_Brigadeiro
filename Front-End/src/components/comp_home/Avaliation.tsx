import {
  IconArrowBadgeLeftFilled,
  IconArrowBadgeRightFilled,
  IconStarFilled,
} from "@tabler/icons-react";
import Image from "next/image";

export default function Avaliation() {
  return (
    <section className="flex flex-col p-5 gap">
      {/* Texto */}
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <h1 className="text-6xl font-bold p-2">
          Avaliação de nossos estudantes
        </h1>
        <div className="flex items-center my-5 gap-5">
          <button className="p-1 text-white bg-white/50 hover:bg-blue-800 rounded-full cursor-pointer">
            <IconArrowBadgeLeftFilled size={50} />
          </button>
          <button className="p-1 text-white bg-white/50 hover:bg-blue-800 rounded-full cursor-pointer">
            <IconArrowBadgeRightFilled size={50} />
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between p-5 gap-5">
        <div className="flex flex-col justify-center md:w-1/2">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold mt-4">Pedro Henrique</h1>
            <p className="mt-4 text-justify text-lg max-w-3xl">
              Minha experiência na Brigadeiro foi extremamente positiva. O curso
              foi bem estruturado, com uma abordagem prática que me permitiu
              aplicar o conhecimento teórico em situações reais. Os professores
              são altamente qualificados e sempre dispostos a ajudar, criando um
              ambiente de aprendizado colaborativo e dinâmico.
            </p>
            <p className="mt-4 text-justify text-lg max-w-3xl">
              A infraestrutura da escola também foi um ponto forte, com recursos
              que facilitam o aprendizado e a vivência prática. A formação que
              recebi me preparou de maneira sólida para os desafios da
              profissão, e estou confiante de que a Escola Técnica Brigadeiro
              desempenhou um papel fundamental na minha preparação para o
              mercado de trabalho.
            </p>
          </div>
        </div>
        <div className="relative max-w-[400px] h-[350px]">
          <Image
            src="/home/students/student1.png"
            alt="Escola"
            width={500}
            height={400}
            className="object-cover w-full h-full"
          />
          <div className="absolute flex justify-end bottom-2.5 left-2.5">
            <div className="flex gap-0.5 text-amber-300">
              <IconStarFilled />
              <IconStarFilled />
              <IconStarFilled />
              <IconStarFilled />
              <IconStarFilled />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
