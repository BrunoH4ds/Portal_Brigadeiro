import { IconPhone } from "@tabler/icons-react";

export default function Contato() {
  return (
    <div className="flex-1 mt-28 mb-8 mx-3 md:mx-12 bg-white/50 p-8 rounded-lg shadow-xl">
      <div className="flex flex-col items-center text-blue-800 justify-center mb-6">
        <IconPhone size={70} className="mb-1" />
        <h1 className="text-5xl font-bold text-center">
          Informações de Contato
        </h1>
      </div>

      <div className="bg-white/50 p-6 rounded-lg shadow-md mb-8 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Telefone</h2>
        <p className="text-lg text-gray-700">+55 11 3971-2787</p>

        <h2 className="text-2xl font-semibold text-gray-800">Email</h2>
        <p className="text-lg text-gray-700">contato@gmail.com</p>

        <h2 className="text-2xl font-semibold text-gray-800">Endereço</h2>
        <p className="text-lg text-gray-700">
          R. João Amado Coutinho, 1010 - Conj. Res. Elisio Teixeira Leite, São
          Paulo - SP, 02815-140
        </p>
      </div>

      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1830.2460011898233!2d-46.7131369401022!3d-23.442711074611818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cefbb5822406e3%3A0xe6a3bfccf86a8ce2!2sE.%20E.%20Brigadeiro%20Eduardo%20Gomes%20Cohab!5e0!3m2!1spt-BR!2sbr!4v1743129799264!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          className="border-0 w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
