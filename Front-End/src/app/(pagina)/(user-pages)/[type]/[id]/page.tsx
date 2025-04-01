"use client";

import React, { useEffect } from "react";
import { UsersArrayAluno } from "@/database/UsersArrayAluno"; // Importando array de alunos
import { UsersArrayProfessor } from "@/database/UsersArrayProfessor"; // Importando array de professores
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { IconClipboard, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/optional/Loading";
import NotFoundError from "@/components/optional/NotFoundError";

interface StudentPageProps {
  params: { id: string; type: string };
}

export default function StudentPage({ params }: StudentPageProps) {
  const { id, type } = React.use(params); // Aqui aguardamos a resolução dos params
  const { logout, isAdmin, isLoggedIn } = useUser(); // Obtemos o usuário diretamente do contexto
  const router = useRouter();

  let AccountOBJ: any = null;

  // Certifique-se de que o 'id' seja convertido para o tipo correto se necessário
  if (type === "Aluno") {
    // Filtra o usuário no array de alunos
    AccountOBJ = UsersArrayAluno.find(
      (currentAccountOBJ) => currentAccountOBJ._id === parseInt(id) // Comparação correta com o tipo correto
    );
  } else if (type === "Professor") {
    // Filtra o usuário no array de professores
    AccountOBJ = UsersArrayProfessor.find(
      (currentAccountOBJ) => currentAccountOBJ._id === parseInt(id) // Comparação correta com o tipo correto
    );
  }

  // Se o AccountOBJ não existir, exibe o NotFoundError
  if (!AccountOBJ) {
    return <NotFoundError />;
  }

  useEffect(() => {
    // Só faz a navegação após a renderização
    if (isLoggedIn) {
      // Redireciona para a página do usuário
      router.push(`/${type}/${id}`);
    } else {
      // Se o usuário não estiver logado, redireciona para a página de login
      router.push("/Entrar");
    }
  }, [isLoggedIn, router, id, type]); // Apenas dispara quando a login estiver alterado

  if (!isLoggedIn) {
    return <Loading />; // Exibe o Loading enquanto o login não estiver validado
  }

  // Lógica de logout
  const handleLogout = () => {
    logout(); // Limpa o estado do usuário no contexto
  };

  return (
    <div className="flex-col lg:flex-row flex-1 mt-28 mb-8 mx-3 gap-8 lg:gap-0 p-8 lg:p-0 lg:mx-12 bg-white/50 rounded-lg shadow-xl flex">
      {/* Barra lateral com nome e botão Sair */}
      <div className="w-full lg:w-1/4 lg:p-6 border-0 lg:border-r border-white/50 transition-all duration-300 ease-in-out">
        {/* Ícone do usuário */}
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <span className="flex justify-center items-center">
                <IconUser
                  size={70}
                  className="text-blue-800 w-50 h-auto bg-white/50 rounded-full p-3"
                />
                {AccountOBJ && AccountOBJ.turma && (
                  <p className="absolute right-9 bottom-5 text-5xl font-semibold bg-white/50 backdrop-blur-md text-gray-800 rounded-full p-2 translate-x-1/2 translate-y-1/2">
                    {AccountOBJ.turma}
                  </p>
                )}
              </span>
            </div>

            {/* Nome do usuário */}
            <h1 className="text-3xl font-bold text-gray-800 text-center mt-5">
              {AccountOBJ.name}
            </h1>
            <p className="text-2xl font-bold text-blue-800 text-center mb-6">
              {type}
            </p>
          </div>

          <div className="flex justify-end">
            {/* Botão de logout */}
            {isLoggedIn && (
              <button
                className="bg-red-700 hover:bg-red-600 cursor-pointer py-2 px-6 text-white rounded-md w-full mt-4 transition-all duration-300 ease-in-out"
                onClick={handleLogout}
              >
                Sair
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Informações do usuário à direita */}
      <div className="flex flex-1 flex-col lg:m-8 gap-8">
        <div className="bg-white/50 p-6 rounded-lg shadow-md space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Dados Pessoais
          </h1>
          {/* Condicionando a exibição do curso */}
          {AccountOBJ && AccountOBJ.curso && (
            <>
              <h2 className="text-2xl font-semibold text-gray-800">Curso:</h2>
              <p className="text-lg text-gray-700">{AccountOBJ.curso}</p>
            </>
          )}

          <h2 className="text-2xl font-semibold text-gray-800">Email:</h2>
          <p className="text-lg text-gray-700">{AccountOBJ.email}</p>

          <h2 className="text-2xl font-semibold text-gray-800">Ra:</h2>
          <p className="text-lg text-gray-700">{AccountOBJ.Ra}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isAdmin && isLoggedIn && (
            <Link
              href="/Admin"
              className="text-2xl font-semibold text-gray-800"
            >
              <div className="w-full h-full md:w-auto bg-white/50 hover:bg-blue-900/50 hover:text-white p-6 rounded-lg shadow-md space-y-4">
                <div className="flex items-center gap-2">
                  <IconClipboard size={50} /> Administração
                </div>
              </div>
            </Link>
          )}
          <Link
            href="https://saladofuturo.educacao.sp.gov.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold text-gray-800"
          >
            <div className="w-full md:w-auto bg-white/50 hover:bg-blue-900/50 hover:text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <Image
                  src="https://images.sftcdn.net/images/t_app-icon-m/p/9ba2a0a6-dd15-4dcf-a5bb-9edba5d219ff/3011115403/sala-do-futuro-professor-logo"
                  width={70}
                  height={50}
                  alt="Sala Do Futuro"
                  className="rounded-md"
                />
                <span className="truncate max-w-full text-wrap">
                  Sala Do Futuro
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="https://cmspweb.ip.tv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold text-gray-800"
          >
            <div className="w-full md:w-auto bg-white/50 hover:bg-blue-900/50 hover:text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <Image
                  src="https://s3.sa-east-1.amazonaws.com/edusp-static.ip.tv/room/cards/edusp/julianasanche3225895-sp/pc5HVEaryskRc7tqNGZ0ZhlMscseYU.png"
                  width={70}
                  height={50}
                  alt="Cmsp"
                  className="rounded-md"
                />
                <span className="truncate max-w-full text-wrap">Cmsp</span>
              </div>
            </div>
          </Link>

          <Link
            href="https://educacaoprofissional.educacao.sp.gov.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold text-gray-800"
          >
            <div className="w-full md:w-auto bg-white/50 hover:bg-blue-900/50 hover:text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <Image
                  src="https://s3.sa-east-1.amazonaws.com/edusp-static.ip.tv/room/cards/edusp/elianemararod3272389-sp/IMwuZGs5eI7GuXy0bXz2ZwvprMIvR1.png"
                  width={70}
                  height={50}
                  alt="Educação Profissional"
                  className="rounded-md"
                />
                <span className="truncate max-w-full text-wrap">
                  Educação Profissional
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="https://cursos.alura.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold text-gray-800"
          >
            <div className="w-full md:w-auto bg-white/50 hover:bg-blue-900/50 hover:text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <Image
                  src="https://s3.sa-east-1.amazonaws.com/edusp-static.ip.tv/room/cards/edusp/julianasanche3225895-sp/Y6ZcJcrUQRv6ZeIN3uw3Bpb751VErX.png"
                  width={70}
                  height={50}
                  alt="Alura"
                  className="rounded-md"
                />
                <span className="truncate max-w-full text-wrap">Alura</span>
              </div>
            </div>
          </Link>

          <Link
            href="learn.corporate.ef.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold text-gray-800"
          >
            <div className="w-full md:w-auto bg-white/50 hover:bg-blue-900/50 hover:text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <Image
                  src="https://s3.sa-east-1.amazonaws.com/edusp-static.ip.tv/room/cards/edusp/julianasanche3225895-sp/ymjt4ZTmCK2SAc6UNNNOVnwedAmcF8.png"
                  width={70}
                  height={50}
                  alt="Speak"
                  className="rounded-md"
                />
                <span className="truncate max-w-full text-wrap">Speak</span>
              </div>
            </div>
          </Link>

          <Link
            href="https://livros.arvore.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-semibold text-gray-800"
          >
            <div className="w-full md:w-auto md:h-full bg-white/50 hover:bg-blue-900/50 hover:text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <Image
                  src="https://s3.sa-east-1.amazonaws.com/edusp-static.ip.tv/room/cards/edusp/julianasanche3225895-sp/RbJxeFVGxD8ioStvVh3UvdJEgMQZWI.png"
                  width={70}
                  height={50}
                  alt="LeiaSP"
                  className="rounded-md"
                />
                <span className="truncate max-w-full text-wrap">LeiaSP</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
