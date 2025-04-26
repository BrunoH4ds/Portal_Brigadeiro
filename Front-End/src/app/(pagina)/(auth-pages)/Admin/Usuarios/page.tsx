"use client";

import { useState } from "react";
import { UsersArrayAluno } from "@/database/UsersArrayAluno";
import { UsersArrayProfessor } from "@/database/UsersArrayProfessor";
import UserModal from "@/components/Page_Components/comp_admin/comp_users/UserModal";
import UserList from "@/components/Page_Components/comp_admin/comp_users/UserList";

export default function UsersAdmin() {
  const [alunos, setAlunos] = useState(UsersArrayAluno);
  const [professores, setProfessores] = useState(UsersArrayProfessor);
  const [filterType, setFilterType] = useState<"Aluno" | "Professor">("Aluno");
  const [adminFilter, setAdminFilter] = useState<
    "todos" | "admin" | "naoAdmin"
  >("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<any | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Função para abrir o Card
  const openModal = (user?: any) => {
    if (user) {
      setModalData(user);
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  // Função para fechar o Card
  const closeModal = () => {
    setModalData(null);
    setIsModalOpen(false);
    setIsEditing(false);
  };

  // Função para Filtrar a lista entre alunos e professores com o tipo admin ou nao
  const filterUsers = (list: typeof alunos | typeof professores) => {
    return list.filter((user) => {
      const matchesSearch = user.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesAdmin =
        adminFilter === "todos"
          ? true
          : adminFilter === "admin"
          ? user.admin
          : !user.admin;
      return matchesSearch && matchesAdmin;
    });
  };

  // Função que filtra todos os usuários entre professor ou aluno
  const allFilteredUsers =
    filterType === "Professor" ? filterUsers(professores) : filterUsers(alunos);

  // Função para exibir mais de 5 usuários
  const usersToDisplay = allFilteredUsers.slice(0, visibleCount);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Gerenciar Usuários
      </h2>

      {!isModalOpen && (
        <div className="bg-white/50 p-6 rounded-lg shadow-md">
          <div className="mb-6 flex flex-col gap-4 w-full">
            <div className="flex flex-wrap gap-4 w-full">
              {/* botoes de adicionar e alterar lista */}
              <button
                onClick={() => openModal()}
                className="flex-1 cursor-pointer bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
              >
                Adicionar
              </button>
              <button
                onClick={() => setFilterType("Aluno")}
                className={`flex-1 py-2 px-4 rounded ${
                  filterType === "Aluno"
                    ? "bg-blue-800 text-white"
                    : "bg-white/50 text-blue-800 border cursor-pointer"
                }`}
              >
                Alunos
              </button>
              <button
                onClick={() => setFilterType("Professor")}
                className={`flex-1 py-2 px-4 rounded ${
                  filterType === "Professor"
                    ? "bg-blue-800 text-white"
                    : "bg-white/50 text-blue-800 border cursor-pointer"
                }`}
              >
                Professores
              </button>
              {/* Botao de filtrar usuarios por admin ou nao */}
              <select
                value={adminFilter}
                onChange={(e) => setAdminFilter(e.target.value as any)}
                className="flex-1 cursor-pointer p-2 rounded min-w-[140px] bg-gray-800 text-white"
              >
                <option value="todos">Todos</option>
                <option value="admin">Admins</option>
                <option value="naoAdmin">Não Admins</option>
              </select>
            </div>
                {/* Barra de Busca */}
            <input
              type="text"
              placeholder="Buscar por nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border-2 border-blue-900 rounded-md bg-zinc-800/40 text-white"
            />
          </div>
          {/* Lista de Usuarios */}
          <div className="flex flex-col">
            <UserList
              usersToDisplay={usersToDisplay}
              visibleCount={visibleCount}
              setVisibleCount={setVisibleCount}
              openModal={openModal}
              allFilteredUsers={allFilteredUsers}
            />
          </div>
        </div>
      )}
      {/* Card De Adicionar/Editar Usuários */}
      <UserModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        user={modalData}
        isEditing={isEditing}
      />
    </div>
  );
}
