import Link from "next/link";

export default function LinksTab() {
  return (
    <ul className="flex items-center font-bold gap-7">
      <li className="hover:text-blue-900">
        <Link href="/sobre">Sobre</Link>
      </li>
      <li className="hover:text-blue-900">
        <Link href="/contato">Contato</Link>
      </li>
    </ul>
  );
}
