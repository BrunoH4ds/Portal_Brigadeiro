import Link from "next/link";

export default function LinksTab() {
  return (
    <ul className="flex items-center font-bold gap-7">
      <li className="hover:text-blue-900">
        <Link href="/Noticias">Noticias</Link>
      </li>
      <li className="hover:text-blue-900">
        <Link href="/Contato">Contato</Link>
      </li>
      <li className="hover:text-blue-900">
        <button>cursos</button>
      </li>
      <li className="hover:text-blue-900">
        <Link href="/Faq">Faq</Link>
      </li>
      
    </ul>
  );
}
