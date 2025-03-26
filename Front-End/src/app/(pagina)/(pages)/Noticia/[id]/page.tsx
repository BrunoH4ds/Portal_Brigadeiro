// /app/Noticea/[id]/page.tsx

import React from "react";
import NewsArray from "@/database/News";
import Header from "@/components/optional/header";

interface NoticePageProps {
  params: { id: string };
}

export default function Notice({ params }: NoticePageProps) {
  const { id } = React.use(params); // Pegamos o 'id' diretamente de 'params'

  const NoticeOBJ = NewsArray.find(
    (currentNoticeObj) => currentNoticeObj._id === id
  );

  if (!NoticeOBJ) {
    return <h1>n foi possivel encontrar</h1>;
  }

  return (
    <div className="flex flex-1 flex-col">
      <Header
        titulo={NoticeOBJ.title}
        image_URl={NoticeOBJ.image}
        data={NoticeOBJ.date}
        author={NoticeOBJ.author}
      />
      <div className="flex p-5 bg-blue-900/50 backdrop-blur-sm rounded-md mx-12 mt-10">
        <div className="flex flex-col w-full justify-between sm:flex-col sm:items-center md:flex-row md:items-stretch">
          <div className="flex flex-col justify-end w-full">
            {NoticeOBJ.content.map((section, index) => (
              <div key={index}>
                {/* Título */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-2">
                  {section.title}
                </h2>

                {/* Texto */}
                <p className="text-lg sm:text-xl md:text-2xl text-white text-justify">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5 bg-blue-900/50 rounded-md backdrop-blur-sm mx-12 mt-5 mb-10">
        {/* Seção de Comentários */}
        <div className="flex mb-5">
          <input
            className="bg-white/50 w-full text-black px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-white placeholder-gray-500"
            placeholder="O que você gostaria de comentar?"
          />
          <button className="text-white font-semibold text-lg border border-white bg-blue-900 hover:bg-blue-800 py-3 px-5 rounded-md ml-3">
            Comentar
          </button>
        </div>

        {/* Comentários */}
        <div className="flex flex-col space-y-4 mb-5">
          <div className=" border border-white mb-4" />
          <div className="flex items-center justify-between space-x-4">
            <h1 className="text-white font-bold text-xl">João Silva</h1>
            <p className="text-gray-300 text-xl">26 de março de 2025</p>
          </div>
          <p className="text-white text-lg px-4 py-2">
            Este é um exemplo de comentário! A tecnologia está transformando
            rapidamente o mercado de trabalho, com a inteligência artificial e a
            automação ganhando cada vez mais espaço nas empresas. Com isso,
            surgem novos desafios, mas também grandes oportunidades para a
            evolução do setor.
          </p>
          <div className="flex justify-end">
            <button className="bg-red-600 p-2 rounded-md hover:bg-red-500 cursor-pointer">
              Excluir Comentario
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-4 mb-5">
          <div className=" border border-white mb-4" />
          <div className="flex items-center justify-between space-x-4">
            <h1 className="text-white font-bold text-xl">João Silva</h1>
            <p className="text-gray-300 text-xl">26 de março de 2025</p>
          </div>
          <p className="text-white text-lg px-4 py-2">
            Este é um exemplo de comentário! A tecnologia está transformando
            rapidamente o mercado de trabalho, com a inteligência artificial e a
            automação ganhando cada vez mais espaço nas empresas. Com isso,
            surgem novos desafios, mas também grandes oportunidades para a
            evolução do setor.
          </p>
          <div className="flex justify-end">
            <button className="bg-red-600 p-2 rounded-md hover:bg-red-500 cursor-pointer">
              Excluir Comentario
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
