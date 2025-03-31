import ImageTextSection from "@/components/comp_cursos/ImageTextSection";
import SectionDescription from "@/components/comp_cursos/SectionDescription";
import Header from "@/components/optional/header";

export default function Developers() {
  return (
    <div className="flex flex-col bg-zinc-50 text-black min-h-screen">
      <Header
        titulo="Desenvolvedores"
        image_URl="https://www.michaelpage.com.au/sites/michaelpage.com.au/files/2022-01/Software%20Developer.jpg"
      />

      <div className="p-4 mx-3 sm:p-8 sm:mx-6 mt-8">
        <div className="flex flex-col sm:flex-col md:flex-row md:space-x-8">
          <div className="flex flex-col w-full justify-between sm:text-center">
            <SectionDescription
              title="Equipe de Desenvolvimento"
              description="Conheça a equipe responsável pela criação deste projeto. Cada membro contribuiu com habilidades únicas para entregar uma solução completa e inovadora."
            />

            <div className="space-y-8 mt-8">
              <ImageTextSection
                background
                imageSrc="/home/students/student1.png"
                imageAlt="João Silva"
                title="João Silva - Frontend Developer"
                description="Responsável pela criação de interfaces modernas, navegação intuitiva e design responsivo. João tem paixão por transformar ideias em experiências visuais memoráveis."
              />

              <ImageTextSection
                background
                reverse
                imageSrc="/home/students/student1.png"
                imageAlt="Ana Costa"
                title="Ana Costa - Backend Developer"
                description="Especialista em APIs, bancos de dados e integração de sistemas. Ana foi a mente por trás da infraestrutura que garante a estabilidade e performance do projeto."
              />

              <ImageTextSection
                background
                imageSrc="/home/students/student1.png"
                imageAlt="Carlos Mendes"
                title="Carlos Mendes - DevOps"
                description="Responsável pela automação de deploys, integração contínua e infraestrutura em nuvem. Carlos assegurou que o projeto fosse escalável e eficiente desde o início."
              />

              <ImageTextSection
                background
                reverse
                imageSrc="/home/students/student1.png"
                imageAlt="Marina Rocha"
                title="Marina Rocha - UI/UX Designer"
                description="Criadora da identidade visual e da experiência do usuário. Marina trouxe conceitos modernos de design, garantindo que o produto fosse intuitivo e agradável de usar."
              />

              <ImageTextSection
                background
                imageSrc="/home/students/student1.png"
                imageAlt="Lucas Fernandes"
                title="Lucas Fernandes - Fullstack Developer"
                description="Responsável por integrar as diferentes camadas do sistema, Lucas atuou tanto no backend quanto no frontend, garantindo que tudo funcionasse de forma coesa."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
