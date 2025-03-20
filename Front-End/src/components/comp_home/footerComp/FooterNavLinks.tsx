import Link from "next/link";

export default function FooterNavLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-7 text-center md:text-left">
      {/* Seção Empresa */}
      <div className="flex flex-col items-center">
        <p className="text-lg text-blue-900">Empresa</p>
        <Link href="/auth-pages/pt-br/legal/about" className="text-sm my-1 hover:text-blue-900">
          Sobre
        </Link>
        <Link href="/auth-pages/pt-br/legal/jobs" className="text-sm my-1 hover:text-blue-900">
          Empregos
        </Link>
      </div>

      {/* Seção Comunidades */}
      <div className="flex flex-col items-center">
        <p className="text-lg text-blue-900">Comunidades</p>
        <Link href="/auth-pages/pt-br/communities/for-artists" className="text-sm my-1 hover:text-blue-900">
          Para Artistas
        </Link>
        <Link href="/auth-pages/pt-br/communities/developers" className="text-sm my-1 hover:text-blue-900">
          Desenvolvedores
        </Link>
        <Link href="/auth-pages/pt-br/communities/advertising" className="text-sm my-1 hover:text-blue-900">
          Publicidade
        </Link>
        <Link href="/auth-pages/pt-br/communities/investors" className="text-sm my-1 hover:text-blue-900">
          Investidores
        </Link>
        <Link href="/auth-pages/pt-br/communities/suppliers" className="text-sm my-1 hover:text-blue-900">
          Fornecedores
        </Link>
      </div>

      {/* Seção Links Úteis */}
      <div className="flex flex-col items-center">
        <p className="text-lg text-blue-900">Links úteis</p>
        <Link href="/auth-pages/pt-br/legal/support" className="text-sm my-1 hover:text-blue-900">
          Suporte
        </Link>
        <Link href="/auth-pages/pt-br/legal/home" className="text-sm my-1 hover:text-blue-900">
          Home
        </Link>
        <Link href="/auth-pages/pt-br/legal/mobile-app" className="text-sm my-1 hover:text-blue-900">
          Aplicativo Móvel
        </Link>
      </div>

      {/* Seção Planos do Singfy */}
      <div className="flex flex-col items-center">
        <p className="text-lg text-blue-900">Planos do Singfy</p>
        <Link href="/auth-pages/pt-br/plans/premium" className="text-sm my-1 hover:text-blue-900">
          Plano Premium
        </Link>
        <Link href="/auth-pages/pt-br/plans/standard" className="text-sm my-1 hover:text-blue-900">
          Plano Standard
        </Link>
        <Link href="/auth-pages/pt-br/plans/free" className="text-sm my-1 hover:text-blue-900">
          Plano Gratuito
        </Link>
      </div>
    </div>
  );
}
