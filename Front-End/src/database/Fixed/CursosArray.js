import {
  IconClock,
  IconCalendarWeek,
  IconBroadcast,
} from "@tabler/icons-react";

const CursosArray = [
    {
      id: "desenvolvimento",
      titulo: "Desenvolvimento de Sistemas",
      cor: "bg-blue-700",
      HeaderImageSrc:
        "https://blog.marcusoliveiradev.com.br/wp-content/uploads/2022/11/pexels-luis-gomes-546819-1.jpg",
      sections: [
        {
          title: "Desenvolvimento de Sistemas",
          description:
            "O curso de desenvolvimento de sistemas prepara os estudantes para projetar, criar e implementar soluções de software eficientes e funcionais.",
        },
      ],
      infoCards: [
        {
          icon: <IconClock size={50} />,
          title: "Carga Horaria",
          description: "1200 Hrs",
        },
        {
          icon: <IconCalendarWeek size={50} />,
          title: "Duração",
          description: "4 semestres",
        },
        {
          icon: <IconBroadcast size={50} />,
          title: "Eixo Tecnológico",
          description: "Informação e Comunicação",
        },
      ],
      imageSections: [
        {
          imageSrc:
            "https://estaticos.animaeducacao.com.br/article/9cdce7a4-c854-466f-b10e-8d4e2685bcb3/2.jpg",
          imageAlt: "Design Gráfico",
          title: "Conheça Design Gráfico",
          description:
            "Design gráfico é a prática de criar soluções visuais para comunicar mensagens por meio de imagens, textos e gráficos.",
        },
        {
          imageSrc:
            "https://blog.xpeducacao.com.br/wp-content/uploads/2022/10/banco-de-dados-autonomo.jpg",
          imageAlt: "Banco de Dados",
          title: "Conheça Banco De Dados",
          description:
            "Banco de dados é uma matéria que aborda conceitos e técnicas para gerenciamento de informações em bancos de dados.",
        },
      ],
    },
    {
      id: "logistica",
      titulo: "Logística",
      cor: "bg-green-700",
      HeaderImageSrc:
        "https://media.sankhya.com.br/wp-content/uploads/2017/11/distribuicao-e-logistica.png",

      sections: [
        {
          title: "Logística",
          description:
            "A logística envolve o planejamento, implementação e controle do fluxo eficiente de mercadorias, serviços e informações.",
        },
      ],
      infoCards: [
        {
          icon: <IconClock size={50} />,
          title: "Carga Horaria",
          description: "800 Hrs",
        },
        {
          icon: <IconCalendarWeek size={50} />,
          title: "Duração",
          description: "3 semestres",
        },
        {
          icon: <IconBroadcast size={50} />,
          title: "Eixo Tecnológico",
          description: "Gestão e Negócios",
        },
      ],
      imageSections: [
        {
          imageSrc:
            "https://estaticos.animaeducacao.com.br/article/9cdce7a4-c854-466f-b10e-8d4e2685bcb3/2.jpg",
          imageAlt: "Gestão de Logística",
          title: "Conheça Gestão de Logística",
          description:
            "O curso de Logística prepara os profissionais para gerenciar todos os aspectos de armazenamento, transporte e distribuição.",
        },
      ],
    },
  ];

export default CursosArray;