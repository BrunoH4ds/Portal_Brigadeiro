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

  const [modalData, setModalData] = useState<any | null>(null); // Dados do modal (edição ou criação)
  const [isEditing, setIsEditing] = useState(false);

  const openModal = (user?: any) => {
    if (user) {
      setModalData(user);
      setIsEditing(true);
    } else {
      setModalData({}); // Define algo não-nulo, ex: um objeto vazio
      setIsEditing(false);
    }
  };

  const closeModal = () => {
    setModalData(null);
    setIsEditing(false);
  };

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

  const allFilteredUsers =
    filterType === "Professor" ? filterUsers(professores) : filterUsers(alunos);
  const usersToDisplay = allFilteredUsers.slice(0, visibleCount);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Gerenciar Usuários
      </h2>
      <div className="bg-white/50 p-6 rounded-lg shadow-md">
        <div className="mb-6 flex flex-col gap-4 w-full">
          <div className="flex flex-wrap gap-4 w-full">
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
          <input
            type="text"
            placeholder="Buscar por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border-2 border-blue-900 rounded-md bg-zinc-800/40 text-white"
          />
        </div>

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

      {modalData !== null && (
        <UserModal
          isOpen={modalData !== null}
          closeModal={closeModal}
          user={modalData}
          isEditing={isEditing}
        />
      )}
    </div>
  );
}
