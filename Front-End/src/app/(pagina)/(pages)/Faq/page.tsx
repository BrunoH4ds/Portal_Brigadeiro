import { IconBook } from "@tabler/icons-react";

export default function Faq() {
  return (
    <div className="flex-1 mt-28 mb-8 mx-3 md:mx-12 bg-white/50 p-8 rounded-lg shadow-xl">
      <div className="flex flex-col items-center text-blue-800 justify-center mb-6">
        <IconBook size={70} className="mb-1" />
        <h1 className="text-5xl font-bold mb-2 text-center">
          Perguntas Frequentes
        </h1>
        <p className="text-xl text-white text-center">
          Aqui você encontra algumas das perguntas mais comuns sobre a
          Brigadeiro.
        </p>
      </div>

      <div className="bg-white/50 p-6 rounded-lg shadow-md space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Sobre a Escola Brigadeiro Eduardo Gomes:
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-800 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">
                O que a Escola Estadual Brigadeiro Eduardo Gomes Oferece?
              </h3>
              <p className="text-lg text-gray-700">
                Ensino médio e cursos técnicos.
              </p>
            </div>

            <div className="border-l-4 border-blue-800 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Quais cursos a Escola Estadual Brigadeiro Eduardo Gomes oferece?
              </h3>
              <p className="text-lg text-gray-700">
                Até o momento são 2 cursos técnicos, exclusivos para o ensino
                médio (Educação Profissional).
              </p>
            </div>

            <div className="border-l-4 border-blue-800 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">Endereço</h3>
              <p className="text-lg text-gray-700">
                R. João Amado Coutinho, 1010 - Conj. Res. Elisio Teixeira Leite,
                São Paulo - SP, 02815-140
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
