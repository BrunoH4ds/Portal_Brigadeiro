import { IconX } from "@tabler/icons-react";
import Link from "next/link";

export default function NotFoundError() {
  return (
    <div className="flex justify-center items-center rounded-md bg-white/50 text-gray-800 mt-28 mb-8 mx-8">
      <div className="flex flex-col md:flex-row items-center p-8 justify-center ">
        <IconX size={150} className="text-blue-800" />
        <div className="flex flex-col text-center items-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Página Não Encontrada
          </h1>
          <p className="text-lg w-3/4 text-gray-700 mb-5">
            A página que você está procurando não existe ou foi removida.
          </p>
          <Link href="/" passHref>
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg cursor-pointer">
              Voltar para a Página Inicial
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
