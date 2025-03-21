import Header from "@/components/template_home/header";

export default function Home() {
  return (
    <div className="w-full">
      {/* Renderizando o Header com a largura total da tela */}
      <Header
        titulo="Bem-Vindo Ao Portal Brigadeiro"
        sub_titulo="Aqui você pode encontrar informações sobre a Escola, eventos, horários, e acompanhar nossos alunos."
        image_URl="https://www.du.edu.om/wp-content/uploads/2020/08/783px-Test-Logo.svg.png"
      />

      <section>
        <div>
          <h1>
            Quem nos somos
          </h1>
        </div>
      </section>
      <section>
        <div>
          <h1>
            Nossa Historia
          </h1>
        </div>
      </section>
      <section>
        <div>
          <h1>
            Nossa Metodologia
          </h1>
        </div>
      </section>
      <section>
        <div>
          <h1>
            Conheça alguns de nossos professores
          </h1>
        </div>
      </section>
      <section>
        <div>
          <h1>
            Avaliaçao de nossos alunos
          </h1>
        </div>
      </section>
    </div>
  );
}
