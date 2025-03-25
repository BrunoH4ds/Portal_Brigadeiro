import AboutSection from "@/components/comp_home/AboutSection";
import Avaliation from "@/components/comp_home/Avaliation";
import History from "@/components/comp_home/History";
import Methodology from "@/components/comp_home/Methodology";
import Teachers from "@/components/comp_home/Teachers";
import Header from "@/components/optional/header";

export default function Home() {
  return (
    <div className="w-full">
      {/* Renderizando o Header com a largura total da tela */}
      <Header
        titulo="Bem-Vindo Ao Portal Brigadeiro"
        sub_titulo="Aqui você pode encontrar informações sobre a Escola, eventos, horários, e acompanhar nossos alunos."
        image_URl="/home/Header.jpg"
      />
      <div className="">
        <AboutSection />
        <Methodology/>
        <History />
        <Teachers/>
        <Avaliation/>
      </div>
    </div>
  );
}
