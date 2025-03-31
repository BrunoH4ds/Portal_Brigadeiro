import { useUser } from "@/context/UserContext"; // Importando o contexto
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";

export default function ButtonsLoginSignUp() {
  const { user, isLoggedIn } = useUser(); // Acessando o contexto

  return (
    <div className="flex items-center">
      {/* Se o usuário estiver logado, exibe o nome e foto */}
      {isLoggedIn && user ? (
        <div className="flex items-center gap-3">
          {/* Link para o perfil do usuário */}
          <Link
            className="flex items-center gap-3 rounded-md  "
            href={`/${user.type}/${user._id}`} // URL do perfil
          >
            <h1>Olá,<strong>{user.name}</strong></h1>
            <span className="bg-white/20 rounded-full p-1">
              <IconUser size={30}/>
            </span>
          </Link>
        </div>
      ) : (
        <Link
          href="/Entrar"
          className="text-white px-4 py-2 rounded-md bg-blue-900 hover:bg-blue-800"
        >
          Entrar
        </Link>
      )}
    </div>
  );
}
