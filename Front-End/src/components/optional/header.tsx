import { IconArrowBadgeDownFilled } from "@tabler/icons-react";

export interface HeaderProps {
  titulo: string;
  sub_titulo?: string; // Propriedade opcional
  data?: string;
  author?: string;
  image_URl: string; // URL da imagem de fundo
}

export default function Header({
  titulo,
  sub_titulo,
  author,
  data,
  image_URl,
}: HeaderProps) {
  return (
    <header
      className="flex flex-col w-full h-screen bg-cover bg-center bg-blend-darken rounded-b-md"
      style={{
        backgroundImage: `url(${image_URl})`, // Usa a URL da imagem recebida via props
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Cor de fundo com opacidade para escurecer
      }}
    >
      {/* Texto centralizado */}
      <div className="flex flex-col justify-center items-center w-full h-full text-white px-12">
        <h1 className="font-bold text-5xl sm:text-7xl">{titulo}</h1>

        {/* Exibe o subtítulo, se ele existir */}
        {sub_titulo && <p className="mt-2  text-lg">{sub_titulo}</p>}
      </div>
      <div className="flex flex-col justify-end items-center text-white">
        <div
          className={`flex ${
            !author && !data ? "justify-center" : "justify-between"
          } w-full items-center text-white mb-8 px-12`}
        >
          {author && <p className="mt-2 text-lg font-bold">Autor: {author}</p>}
          <IconArrowBadgeDownFilled size={50} />
          {data && <p className="mt-2 text-lg font-bold">Publicação: {data}</p>}
        </div>
      </div>
    </header>
  );
}
