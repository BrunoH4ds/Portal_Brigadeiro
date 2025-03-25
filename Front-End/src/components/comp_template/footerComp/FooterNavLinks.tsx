import Link from "next/link";

export default function FooterNavLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-7 text-center md:text-left">
      {/* Seção Links Úteis */}
      <div className="flex flex-col items-center">
        <p className="text-lg text-blue-900">Links úteis</p>
        <Link href="/" className="text-sm my-1 hover:text-blue-900">
          Inicio
        </Link>
        <Link href="/Noticias" className="text-sm my-1 hover:text-blue-900">
          Noticias
        </Link>
        <Link href="/Nossos-Cursos" className="text-sm my-1 hover:text-blue-900">
          Cursos
        </Link>
      </div>

      {/* Seção Planos do Singfy */}
      <div className="flex flex-col items-center">
        <p className="text-lg text-blue-900">Contato</p>
        <Link href="/auth-pages/pt-br/plans/premium" className="text-sm my-1 hover:text-blue-900">
          Telefone
        </Link>
        <Link href="/auth-pages/pt-br/plans/standard" className="text-sm my-1 hover:text-blue-900">
          Localização
        </Link>
        <Link href="/auth-pages/pt-br/plans/free" className="text-sm my-1 hover:text-blue-900">
          Emails
        </Link>
      </div>
    </div>
  );
}
