import Link from "next/link";
import Logo from "../shared/Logo";
import FooterNavLinks from "../comp_home/footerComp/FooterNavLinks";
import Social from "../comp_home/footerComp/Social";
import { IconMapPin, IconPhoneCall } from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-50/60 text-black p-5 rounded-t-md backdrop-blur-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-5">
        <Logo logo={false} width={180} />
        {/* Links de Navegação */}
        <div>
          <FooterNavLinks />
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <IconMapPin size={40}/>
            <p className="text-sm">
              R. João Amado Coutinho, 1010 - Conj. Res. Elisio Teixeira Leite,
              São Paulo - SP, 02815-140
            </p>
          </div>
          <div className="flex items-center gap-2">
          <IconPhoneCall size={40}/>
            <p className="text-sm">
            +55 11 3971-2787
            </p>
          </div>
          <Social />
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="container mx-auto gap-10 px-5 flex justify-between flex-col md:flex-row mt-5">
        <div className="flex items-center justify-center">
          <Link href="/auth-pages/pt-br/legal/">
            <p className="text-sm hover:text-blue-900 transition-colors">
              Desenvolvedores
            </p>
          </Link>
          <span className=" mx-2">|</span>
          <Link href="/auth-pages/pt-br/legal/privacy-policy">
            <p className="text-sm hover:text-blue-900 transition-colors">
              Política de Privacidade
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
