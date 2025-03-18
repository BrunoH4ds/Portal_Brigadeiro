import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed w-full bg-zinc-50/60 text-black p-5 rounded-b-md backdrop-blur-md">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="flex w-auto items-center">
            <Image
              src="/next.svg"
              alt="next"
              layout="intrinsic" // Faz com que a imagem tenha suas dimensões automáticas
              width={180} // Defina um valor para a largura para que o layout "intrinsic" funcione
              height={100} // A altura será ajustada automaticamente com base na proporção
            />
          </div>
        </Link>
        <div className="flex gap-5">
          <ul className="flex gap-7">
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
          <div>|</div>
          <div className="flex gap-3">
            <Link href="/login">Login</Link>
            <Link href="/cadastro">Cadastro</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
