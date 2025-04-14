import Link from "next/link";

export default function SideBar() {
  return (
    <div className="flex flex-col items-center w-full mb-8 lg:w-1/5 lg:pl-8 transition-all duration-300 ease-in-out">
      <div className="flex flex-col w-full lg:w-auto items-center bg-white/50 shadow-lg rounded-md">
        <h1 className="text-xl bg-blue-900 w-full text-center p-2 rounded-t-md font-semibold">
          Painel de Administração
        </h1>
        <ul className="flex flex-col w-full p-5 space-y-2 text-center">
          <Link href="/Admin">
            <li className="bg-blue-900/50 hover:bg-blue-800/50 rounded-md p-2 cursor-pointer">
              <span className="text-lg">Home</span>
            </li>
          </Link>
          <Link href="/Admin/Usuarios">
            <li className="bg-blue-900/50 hover:bg-blue-800/50 rounded-md p-2 cursor-pointer">
              <span className="text-lg">Usuários</span>
            </li>
          </Link>
          <Link href="/Admin/Noticias">
            <li className="bg-blue-900/50 hover:bg-blue-800/50 rounded-md p-2 cursor-pointer">
              <span className="text-lg">Notícias</span>
            </li>
          </Link>
          <Link href="/Admin/Contato">
            <li className="bg-blue-900/50 hover:bg-blue-800/50 rounded-md p-2 cursor-pointer">
              <span className="text-lg">Contato</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
