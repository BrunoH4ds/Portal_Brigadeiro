"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importando useRouter para redirecionamento
import { IconSchool, IconUser } from "@tabler/icons-react";
import { UsersArrayAluno } from "@/database/UsersArrayAluno"; // Importando array de alunos
import { UsersArrayProfessor } from "@/database/UsersArrayProfessor"; // Importando array de professores
import { useUser } from "@/context/UserContext"; // Importando contexto

interface ButtonsTypeAccountProps {
  email: string;
  password: string;
}

export default function ButtonsTypeAccount({
  email,
  password,
}: ButtonsTypeAccountProps) {
  const router = useRouter();
  const { setUser, setIsLoggedIn, setIsAdmin } = useUser(); // Desestruturando funções do contexto
  const [selectedType, setSelectedType] = useState<string>(""); // Tipo de usuário (aluno ou professor)
  const [error, setError] = useState<string>(""); // Estado de erro (caso o login falhe)

  // Função para selecionar o tipo (aluno ou professor)
  const handleTypeSelection = (type: string) => {
    setSelectedType(type);
  };

  // Função de login
  const handleLogin = () => {
    if ((email === undefined || email === null || email === "") || (password === undefined || password === null || password === "")) {
      setError("Não esqueça de preencher todos os campos");
      return;
    }    

    if (!selectedType) {
      setError("Selecione o tipo de usuário");
      return;
    }

    let user;
    if (selectedType === "aluno") {
      // Filtra o usuário no array de alunos
      user = UsersArrayAluno.find(
        (user) => user.email === email && user.password === password
      );
    } else if (selectedType === "professor") {
      // Filtra o usuário no array de professores
      user = UsersArrayProfessor.find(
        (user) => user.email === email && user.password === password
      );
    }

    if (user) {
      // Atualiza o estado do contexto
      setUser(user);
      setIsLoggedIn(true);
      setIsAdmin(user.admin);
      router.push(`/${user.type}/${user._id}`);
    } else {
      setError("Email ou senha incorretos");
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-1">
      {/* Exibe erro se houver */}
      {error && (
        <p className="text-red-600 mb-1">
          {error}
        </p>
      )}
      {/* Botões para selecionar tipo de usuário */}
      <div className="flex flex-col items-center sm:flex-row gap-5">
        <button
          className={`flex items-center gap-2 p-2 border border-blue-900 rounded-3xl cursor-pointer ${
            selectedType === "aluno"
              ? "bg-blue-900 text-white"
              : "bg-zinc-800/40 hover:bg-blue-900 hover:border-blue-800"
          }`}
          onClick={() => handleTypeSelection("aluno")}
        >
          <IconUser /> Aluno
        </button>
        <button
          className={`flex items-center gap-2 p-2 border border-blue-900 rounded-3xl cursor-pointer ${
            selectedType === "professor"
              ? "bg-blue-900 text-white"
              : "bg-zinc-800/40 hover:bg-blue-900 hover:border-blue-800"
          }`}
          onClick={() => handleTypeSelection("professor")}
        >
          <IconSchool /> Professor
        </button>
      </div>

      {/* Botão de login */}
      <button
        className="mt-2 w-4/5 p-2 rounded-md bg-blue-900 hover:bg-blue-800 text-white cursor-pointer"
        onClick={handleLogin}
      >
        Entrar
      </button>
    </div>
  );
}
