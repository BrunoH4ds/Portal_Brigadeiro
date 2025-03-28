import Header from "@/components/optional/header";
import {
  IconBroadcast,
  IconCalendarWeek,
  IconClock,
} from "@tabler/icons-react";
import Image from "next/image";

export default function Cursos() {
  return (
    <div className="flex flex-1 flex-col text-white">
      <Header
        titulo="Desenvolvimento De Sistemas"
        image_URl="https://blog.marcusoliveiradev.com.br/wp-content/uploads/2022/11/pexels-luis-gomes-546819-1.jpg"
      />

      <div className="flex p-5 mx-12 mt-5">
        <div className="flex flex-col w-full justify-between sm:flex-col sm:items-center md:flex-row md:items-stretch">
          <div className="flex flex-col items-center p-5 bg-white/50 rounded-md justify-end w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 font-semibold mb-4">
              Desenvolvimento de Sistemas
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-justify mb-5">
              O curso de desenvolvimento de sistemas é uma formação que prepara
              os estudantes para projetar, criar e implementar soluções de
              software eficientes e funcionais. O curso geralmente abrange uma
              ampla variedade de tópicos, incluindo programação, bancos de
              dados, design de software, engenharia de software, arquitetura de
              sistemas, segurança de dados e desenvolvimento web. Além disso,
              podem aprender sobre as melhores práticas de segurança cibernética
              e proteção de dados, garantindo que as aplicações que desenvolvem
              sejam seguras e protegidas contra ameaças cibernéticas. Um curso
              de desenvolvimento de sistemas pode ser oferecido em diferentes
              níveis, como técnico, graduação ou pós-graduação, e pode variar em
              duração e intensidade, dependendo da instituição e do programa
              específico.
            </p>
            <div className="bg-white/50 flex flex-col items-center w-1/2 text-blue-800 p-6 rounded-lg shadow-md mb-8 space-y-4">
              <IconClock size={50} />
              <h2 className="text-2xl font-semibold">Carga Horária</h2>
              <p className="text-lg text-gray-700">1200 hrs</p>
            </div>
            <div className="bg-white/50 flex flex-col items-center w-1/2 text-blue-800 p-6 rounded-lg shadow-md mb-8 space-y-4">
              <IconCalendarWeek size={50} />
              <h2 className="text-2xl font-semibold">Duração</h2>
              <p className="text-lg text-gray-700">3 semestres</p>
            </div>
            <div className="bg-white/50 flex flex-col items-center w-1/2 text-blue-800 p-6 rounded-lg shadow-md mb-8 space-y-4">
              <IconBroadcast size={50} />
              <h2 className="text-2xl font-semibold">Eixo Tecnológico</h2>
              <p className="text-lg text-gray-700">Informação e Comunicação</p>
            </div>
            <div className="flex items-center">
              <div className="relative w-full lg:w-[500px] h-[300px] lg:h-[400px] rounded-md  md:mt-0">
                <Image
                  src="https://estaticos.animaeducacao.com.br/article/9cdce7a4-c854-466f-b10e-8d4e2685bcb3/2.jpg"
                  alt="Escola"
                  width={500}
                  height={400}
                  className="rounded-md object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col w-2/3 mx-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 font-semibold mb-4">
                  Conheça Design Gráfico
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl  text-justify mb-5">
                  Design gráfico é a prática de criar soluções visuais para
                  comunicar mensagens por meio de imagens, textos e gráficos. Os
                  designers gráficos usam ferramentas e técnicas como softwares
                  de design gráfico, tipografia, cor, composição, ilustração e
                  fotografia para criar materiais visuais em projetos que variam
                  desde logotipos e identidades visuais de empresas até
                  materiais de marketing, publicidade, embalagens, livros e
                  revistas. O objetivo é criar uma comunicação visual clara e
                  atraente que transmita uma mensagem de maneira eficaz para o
                  público-alvo, e para isso, os designers devem ter habilidades
                  em comunicação visual, pensamento crítico, solução de
                  problemas e criatividade.
                </p>
              </div>
            </div>
            <div className="flex items-center mt-5">
              <div className="flex flex-col w-2/3 mx-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 font-semibold mb-4">
                  Conheça Banco De Dados
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl  text-justify mb-5">
                  Banco de dados é uma matéria que aborda conceitos e técnicas
                  para gerenciamento de informações em bancos de dados. O
                  objetivo é ensinar a projetar, criar, manipular e manter
                  bancos de dados eficientes e seguros. Os tópicos incluem
                  modelagem de dados, normalização, SQL, programação de
                  aplicativos de banco de dados, ../pages/administração de
                  bancos de dados, entre outros. A disciplina é importante para
                  áreas como TI e negócios, onde bancos de dados são usados para
                  gerenciar informações em diversos contextos. O conhecimento em
                  banco de dados é essencial para garantir a integridade dos
                  dados e a segurança das informações armazenadas. Ao final da
                  matéria, os alunos devem ser capazes de projetar e implementar
                  bancos de dados eficientes e utilizar as ferramentas
                  disponíveis para manipulação e análise de dados.
                </p>
              </div>
              <div className="relative w-full lg:w-[500px] h-[300px] lg:h-[400px] rounded-md  md:mt-0">
                <Image
                  src="https://blog.xpeducacao.com.br/wp-content/uploads/2022/10/banco-de-dados-autonomo.jpg"
                  alt="Escola"
                  width={500}
                  height={400}
                  className="rounded-md object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex items-center mt-5">
              <div className="relative w-full lg:w-[500px] h-[300px] lg:h-[400px] rounded-md  md:mt-0">
                <Image
                  src="https://lh7-us.googleusercontent.com/UVEdb5ZmtZi7rwX6kMOfAP7CJQfckceyqHhH03R-2G8gOQ8koagkVVqkoxdJBAUH90A8GU9VcITnh7cd8j-XCGlunfTcjkw9lyM2Fh1TZ4H9qMHI__DHwewovUdn3gPFT_Vdag2RurL_-Ebr0D9Lhes"
                  alt="Escola"
                  width={500}
                  height={400}
                  className="rounded-md object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col w-2/3 mx-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 font-semibold mb-4">
                  Conheça Programação Web
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl  text-justify mb-5">
                  A programação web é uma área de programação que se concentra
                  no desenvolvimento de aplicativos e sites que funcionam na
                  internet. Os desenvolvedores da web usam uma variedade de
                  linguagens de programação, incluindo HTML, CSS, JavaScript,
                  PHP e outras, para criar sites interativos, aplicativos web e
                  outras soluções de TI para a web.s desenvolvedores da web
                  também são responsáveis pela manutenção e atualização de sites
                  e aplicativos, incluindo o gerenciamento de bancos de dados e
                  a integração com outras tecnologias e serviços da web. O
                  conhecimento em programação web é essencial para os
                  profissionais de TI que desejam trabalhar no desenvolvimento
                  de soluções para a web, incluindo desenvolvedores de
                  front-end, back-end e full-stack.
                </p>
              </div>
            </div>
            <div className="flex items-center mt-5">
              <div className="flex flex-col w-2/3 mx-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 font-semibold mb-4">
                  Conheça Operação de software e aplicativos
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl  text-justify mb-5">
                  A operação de software e aplicativos envolve o gerenciamento,
                  manutenção e atualização de softwares e aplicativos em um
                  sistema ou rede de computadores. O processo inclui a
                  instalação e configuração de softwares e aplicativos,
                  monitoramento de desempenho, solução de problemas, aplicação
                  de patches de segurança e atualizações, backup e recuperação
                  de dados, entre outras atividades.Os aplicativos são softwares
                  específicos que são projetados para executar uma tarefa
                  específica ou para atender a uma necessidade específica de um
                  usuário. Eles podem ser criados para uso em desktops, laptops,
                  tablets e dispositivos móveis, como smartphones. A operação de
                  aplicativos envolve a instalação e configuração de
                  aplicativos, testes de funcionalidade, atualização e
                  manutenção, gerenciamento de licenças, gerenciamento de dados
                  do usuário e suporte ao usuário.
                </p>
              </div>
              <div className="relative w-full lg:w-[500px] h-[300px] lg:h-[400px] rounded-md  md:mt-0">
                <Image
                  src="https://blog.runrun.it/wp-content/uploads/2023/10/140064-Clusterizacao-Operacoes-Softwares-para-area-de-Operacoes-Artes_enxoval_blog.png"
                  alt="Escola"
                  width={500}
                  height={400}
                  className="rounded-md object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex items-center mt-5">
              <div className="relative w-full lg:w-[500px] h-[300px] lg:h-[400px] rounded-md  md:mt-0">
                <Image
                  src="https://phoenixnap.com/glossary/wp-content/uploads/2024/07/what-is-an-algorithm.jpg"
                  alt="Escola"
                  width={500}
                  height={400}
                  className="rounded-md object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col w-2/3 mx-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 font-semibold mb-4">
                  Conheça Programação e Algoritmo
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl  text-justify mb-5">
                  Programação é a habilidade de criar software ou programas de
                  computador para executar uma tarefa específica. Essa
                  habilidade é alcançada por meio da escrita de códigos de
                  programação que são interpretados por um computador. Os
                  programas podem ser criados para uma ampla variedade de fins,
                  como automação de tarefas, criação de sites, jogos,
                  aplicativos móveis, softwares empresariais, entre outros. A
                  programação requer conhecimento em linguagens de programação,
                  que são utilizadas para codificar as instruções que um
                  computador precisa seguir para realizar uma tarefa específica.
                  Algumas das linguagens de programação mais populares incluem
                  Java, Python, C++, JavaScript, Ruby e PHP. O desenvolvimento
                  de habilidades em programação é fundamental para profissionais
                  de TI e engenheiros de software que desejam criar soluções
                  personalizadas e automatizar processos em diversas áreas de
                  atuação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header
        titulo="Logistica"
        image_URl="https://media.sankhya.com.br/wp-content/uploads/2017/11/distribuicao-e-logistica.png"
      />
    </div>
  );
}
