import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-50/60 text-black p-5 rounded-t-md backdrop-blur-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-5">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
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
        </div>

        {/* Links de Navegação */}
        <div>
          <ul className="flex gap-5">
            <li>
              <h1>Home</h1>
              <p>pag 1</p>
            </li>
            <li>
              <h1>Sobre</h1>
              <p>sobre nós</p>
            </li>
            <li>
              <h1>Contato</h1>
              <p>fale conosco</p>
            </li>
            <li>
              <h1>FAQ</h1>
              <p>perguntas frequentes</p>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div className="flex gap-5 justify-center">
          <Link
            href="https://www.instagram.com/eebrigadeiroeduardo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-zinc-700/40 p-2 rounded-md hover:bg-blue-500 transition-colors "
          >
            <IconBrandInstagram size={40} />
          </Link>
          <Link
            href="https://www.facebook.com/EE.BrigadeiroEduardoGomes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="bg-zinc-700/40 p-2 rounded-md hover:bg-blue-500 transition-colors"
          >
            <IconBrandFacebook size={40} />
          </Link>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="container mx-auto gap-10 px-5 flex justify-between flex-col md:flex-row mt-5">
        <div className="flex items-center justify-center">
          <Link href="/auth-pages/pt-br/legal/">
            <p className="text-sm hover:text-blue-500 transition-colors">
              Legal
            </p>
          </Link>
          <span className=" mx-2">|</span>
          <Link href="/auth-pages/pt-br/legal/privacy-policy">
            <p className="text-sm hover:text-blue-500 transition-colors">
              Política de Privacidade
            </p>
          </Link>
          <span className="mx-2">|</span>
          <Link href="/auth-pages/pt-br/legal/end-user-agreement">
            <p className="text-sm hover:text-blue-500 transition-colors">
              Termos de Uso
            </p>
          </Link>
          <span className="mx-2">|</span>
          <Link href="/auth-pages/pt-br/accessibility">
            <p className="text-sm hover:text-blue-500 transition-colors">
              Acessibilidade
            </p>
          </Link>
        </div>
        <div className="flex justify-center">
          <p className="text-sm ">
            &copy; {currentYear} PortalBeg.com - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
