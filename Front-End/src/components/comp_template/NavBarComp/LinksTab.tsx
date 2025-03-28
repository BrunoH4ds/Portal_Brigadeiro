import { IconHomeFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function LinksTab() {
  return (
    <ul className="flex items-center font-bold gap-7 mr-9">
      <li className="hover:text-blue-800">
        <Link href="/Noticias">Noticias</Link>
      </li>
      <li className="hover:text-blue-800">
        <Link href="/Nossos-Cursos">Cursos</Link>
      </li>
      <li className="hover:text-blue-800">
        <Link href="/"><IconHomeFilled size={30}/></Link>
      </li>
      <li className="hover:text-blue-800">
        <Link href="/Contato">Contato</Link>
      </li>
      <li className="hover:text-blue-800">
        <Link href="/Faq">Faq</Link>
      </li>
    </ul>
  );
}
