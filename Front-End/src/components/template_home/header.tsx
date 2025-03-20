import { IconArrowBadgeDownFilled } from "@tabler/icons-react";

export default function Header() {
  return (
    <header
      className="flex flex-col w-full h-screen bg-cover bg-center bg-blend-darken"
      style={{
        backgroundImage:
          'url("https://www.du.edu.om/wp-content/uploads/2020/08/783px-Test-Logo.svg.png")',
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Cor de fundo com opacidade para escurecer
      }}
    >
      {/* Texto centralizado */}
      <div className="flex flex-col justify-center items-center w-full h-full text-white px-5">
        <h1 className="font-bold text-7xl">Bem-Vindo Ao Portal Brigadeiro</h1>
        <p>
          Aqui você pode encontrar informações sobre a Escola, eventos, horários, e acompanhar nossos alunos.
        </p>
      </div>

      {/* Seta no final da tela */}
      <div className="flex flex-col justify-end items-center text-white mb-8">
        <IconArrowBadgeDownFilled size={50} />
      </div>
    </header>
  );
}
