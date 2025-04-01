import CourseInfoCards from "@/components/comp_cursos/CourseInfoCards";
import ImageTextSection from "@/components/comp_cursos/ImageTextSection";
import SectionDescription from "@/components/comp_cursos/SectionDescription";
import Header from "@/components/optional/header";
import {
  IconBroadcast,
  IconCalendarWeek,
  IconClock,
} from "@tabler/icons-react";

export default function Cursos() {
  return (
    <div className="flex flex-1 flex-col text-white">
      <Header
        titulo="Desenvolvimento De Sistemas"
        image_URl="https://blog.marcusoliveiradev.com.br/wp-content/uploads/2022/11/pexels-luis-gomes-546819-1.jpg"
      />

      <div className="flex m-3 mb-8 md:mx-12 mt-8">
        <div className="flex flex-col w-full justify-between sm:flex-col sm:items-center md:flex-row md:items-stretch">
          <div className="flex flex-col items-center p-5 bg-white/50 rounded-md justify-end w-full">
            <SectionDescription
              title="Desenvolvimento de Sistemas"
              description="O curso de desenvolvimento de sistemas é uma formação que prepara
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
            específico."
            />
            <CourseInfoCards
              icon={<IconClock size={50} />}
              title="Carga Horaria"
              description="1200 Hrs"
            />
            <CourseInfoCards
              icon={<IconCalendarWeek size={50} />}
              title="Duração"
              description="4 semestres"
            />
            <CourseInfoCards
              icon={<IconBroadcast size={50} />}
              title="Eixo Tecnológico"
              description="Informação e Comunicação"
            />
            <ImageTextSection
              imageSrc="https://estaticos.animaeducacao.com.br/article/9cdce7a4-c854-466f-b10e-8d4e2685bcb3/2.jpg"
              imageAlt="Design Gráfico"
              title="Conheça Design Gráfico"
              description="Design gráfico é a prática de criar soluções visuais para comunicar mensagens por meio de imagens, textos e gráficos. Os designers gráficos usam ferramentas e técnicas como softwares de design gráfico, tipografia, cor, composição, ilustração e fotografia para criar materiais visuais em projetos que variam desde logotipos e identidades visuais de empresas até materiais de marketing, publicidade, embalagens, livros e revistas. O objetivo é criar uma comunicação visual clara e atraente que transmita uma mensagem de maneira eficaz para o público-alvo, e para isso, os designers devem ter habilidades em comunicação visual, pensamento crítico, solução de problemas e criatividade."
            />
            <ImageTextSection
              reverse
              imageSrc="https://blog.xpeducacao.com.br/wp-content/uploads/2022/10/banco-de-dados-autonomo.jpg"
              imageAlt="Banco de Dados"
              title="Conheça Banco De Dados"
              description="Banco de dados é uma matéria que aborda conceitos e técnicas para gerenciamento de informações em bancos de dados. O objetivo é ensinar a projetar, criar, manipular e manter bancos de dados eficientes e seguros. Os tópicos incluem modelagem de dados, normalização, SQL, programação de aplicativos de banco de dados, administração de bancos de dados, entre outros. A disciplina é importante para áreas como TI e negócios, onde bancos de dados são usados para gerenciar informações em diversos contextos. O conhecimento em banco de dados é essencial para garantir a integridade dos dados e a segurança das informações armazenadas. Ao final da matéria, os alunos devem ser capazes de projetar e implementar bancos de dados eficientes e utilizar as ferramentas disponíveis para manipulação e análise de dados."
            />
            <ImageTextSection
              imageSrc="https://lh7-us.googleusercontent.com/UVEdb5ZmtZi7rwX6kMOfAP7CJQfckceyqHhH03R-2G8gOQ8koagkVVqkoxdJBAUH90A8GU9VcITnh7cd8j-XCGlunfTcjkw9lyM2Fh1TZ4H9qMHI__DHwewovUdn3gPFT_Vdag2RurL_-Ebr0D9Lhes"
              imageAlt="Programação Web"
              title="Conheça Programação Web"
              description="A programação web é uma área de programação que se concentra no desenvolvimento de aplicativos e sites que funcionam na internet. Os desenvolvedores da web usam uma variedade de linguagens de programação, incluindo HTML, CSS, JavaScript, PHP e outras, para criar sites interativos, aplicativos web e outras soluções de TI para a web. Os desenvolvedores da web também são responsáveis pela manutenção e atualização de sites e aplicativos, incluindo o gerenciamento de bancos de dados e a integração com outras tecnologias e serviços da web. O conhecimento em programação web é essencial para os profissionais de TI que desejam trabalhar no desenvolvimento de soluções para a web, incluindo desenvolvedores de front-end, back-end e full-stack."
            />
            <ImageTextSection
              reverse
              imageSrc="https://blog.runrun.it/wp-content/uploads/2023/10/140064-Clusterizacao-Operacoes-Softwares-para-area-de-Operacoes-Artes_enxoval_blog.png"
              imageAlt="Software"
              title="Conheça Operação de software e aplicativos"
              description="A operação de software e aplicativos envolve o gerenciamento,
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
                  do usuário e suporte ao usuário."
            />

            <ImageTextSection
              imageSrc="https://phoenixnap.com/glossary/wp-content/uploads/2024/07/what-is-an-algorithm.jpg"
              imageAlt="Algoritmo"
              title="Conheça Programação e Algoritmo"
              description="Programação é a habilidade de criar software ou programas de computador para executar uma tarefa específica. Essa habilidade é alcançada por meio da escrita de códigos de programação que são interpretados por um computador. Os programas podem ser criados para uma ampla variedade de fins, como automação de tarefas, criação de sites, jogos, aplicativos móveis, softwares empresariais, entre outros. A programação requer conhecimento em linguagens de programação, que são utilizadas para codificar as instruções que um computador precisa seguir para realizar uma tarefa específica. Algumas das linguagens de programação mais populares incluem Java, Python, C++, JavaScript, Ruby e PHP."
            />
          </div>
        </div>
      </div>
      <Header
        titulo="Logistica"
        image_URl="https://media.sankhya.com.br/wp-content/uploads/2017/11/distribuicao-e-logistica.png"
      />
      <div className="flex m-3 mb-8 md:mx-12 mt-8">
        <div className="flex flex-col w-full justify-between sm:flex-col sm:items-center md:flex-row md:items-stretch">
          <div className="flex flex-col items-center p-5 bg-white/50 rounded-md justify-end w-full">
            <SectionDescription
              title="Desenvolvimento de Sistemas"
              description="O curso de desenvolvimento de sistemas é uma formação que prepara
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
            específico."
            />
            <CourseInfoCards
              icon={<IconClock size={50} />}
              title="Carga Horaria"
              description="1200 Hrs"
            />
            <CourseInfoCards
              icon={<IconCalendarWeek size={50} />}
              title="Duração"
              description="4 semestres"
            />
            <CourseInfoCards
              icon={<IconBroadcast size={50} />}
              title="Eixo Tecnológico"
              description="Gestão de Negócios"
            />
            <ImageTextSection
              imageSrc="https://estaticos.animaeducacao.com.br/article/9cdce7a4-c854-466f-b10e-8d4e2685bcb3/2.jpg"
              imageAlt="Design Gráfico"
              title="Conheça Design Gráfico"
              description="Design gráfico é a prática de criar soluções visuais para comunicar mensagens por meio de imagens, textos e gráficos. Os designers gráficos usam ferramentas e técnicas como softwares de design gráfico, tipografia, cor, composição, ilustração e fotografia para criar materiais visuais em projetos que variam desde logotipos e identidades visuais de empresas até materiais de marketing, publicidade, embalagens, livros e revistas. O objetivo é criar uma comunicação visual clara e atraente que transmita uma mensagem de maneira eficaz para o público-alvo, e para isso, os designers devem ter habilidades em comunicação visual, pensamento crítico, solução de problemas e criatividade."
            />
            <ImageTextSection
              reverse
              imageSrc="https://blog.xpeducacao.com.br/wp-content/uploads/2022/10/banco-de-dados-autonomo.jpg"
              imageAlt="Banco de Dados"
              title="Conheça Banco De Dados"
              description="Banco de dados é uma matéria que aborda conceitos e técnicas para gerenciamento de informações em bancos de dados. O objetivo é ensinar a projetar, criar, manipular e manter bancos de dados eficientes e seguros. Os tópicos incluem modelagem de dados, normalização, SQL, programação de aplicativos de banco de dados, administração de bancos de dados, entre outros. A disciplina é importante para áreas como TI e negócios, onde bancos de dados são usados para gerenciar informações em diversos contextos. O conhecimento em banco de dados é essencial para garantir a integridade dos dados e a segurança das informações armazenadas. Ao final da matéria, os alunos devem ser capazes de projetar e implementar bancos de dados eficientes e utilizar as ferramentas disponíveis para manipulação e análise de dados."
            />
            <ImageTextSection
              imageSrc="https://lh7-us.googleusercontent.com/UVEdb5ZmtZi7rwX6kMOfAP7CJQfckceyqHhH03R-2G8gOQ8koagkVVqkoxdJBAUH90A8GU9VcITnh7cd8j-XCGlunfTcjkw9lyM2Fh1TZ4H9qMHI__DHwewovUdn3gPFT_Vdag2RurL_-Ebr0D9Lhes"
              imageAlt="Programação Web"
              title="Conheça Programação Web"
              description="A programação web é uma área de programação que se concentra no desenvolvimento de aplicativos e sites que funcionam na internet. Os desenvolvedores da web usam uma variedade de linguagens de programação, incluindo HTML, CSS, JavaScript, PHP e outras, para criar sites interativos, aplicativos web e outras soluções de TI para a web. Os desenvolvedores da web também são responsáveis pela manutenção e atualização de sites e aplicativos, incluindo o gerenciamento de bancos de dados e a integração com outras tecnologias e serviços da web. O conhecimento em programação web é essencial para os profissionais de TI que desejam trabalhar no desenvolvimento de soluções para a web, incluindo desenvolvedores de front-end, back-end e full-stack."
            />
            <ImageTextSection
              reverse
              imageSrc="https://blog.runrun.it/wp-content/uploads/2023/10/140064-Clusterizacao-Operacoes-Softwares-para-area-de-Operacoes-Artes_enxoval_blog.png"
              imageAlt="Software"
              title="Conheça Operação de software e aplicativos"
              description="A operação de software e aplicativos envolve o gerenciamento,
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
                  do usuário e suporte ao usuário."
            />

            <ImageTextSection
              imageSrc="https://phoenixnap.com/glossary/wp-content/uploads/2024/07/what-is-an-algorithm.jpg"
              imageAlt="Algoritmo"
              title="Conheça Programação e Algoritmo"
              description="Programação é a habilidade de criar software ou programas de computador para executar uma tarefa específica. Essa habilidade é alcançada por meio da escrita de códigos de programação que são interpretados por um computador. Os programas podem ser criados para uma ampla variedade de fins, como automação de tarefas, criação de sites, jogos, aplicativos móveis, softwares empresariais, entre outros. A programação requer conhecimento em linguagens de programação, que são utilizadas para codificar as instruções que um computador precisa seguir para realizar uma tarefa específica. Algumas das linguagens de programação mais populares incluem Java, Python, C++, JavaScript, Ruby e PHP."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
