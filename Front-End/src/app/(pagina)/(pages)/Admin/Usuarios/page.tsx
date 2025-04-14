"use client";

import { useState } from "react";
import SingleItemUsers from "@/components/comp_admin/comp_users/SingleItemUsers";
import { UsersArrayAluno } from "@/database/UsersArrayAluno";
import { UsersArrayProfessor } from "@/database/UsersArrayProfessor";
import { IconX } from "@tabler/icons-react";

export default function UsersAdmin() {
  const [alunos, setAlunos] = useState(UsersArrayAluno);
  const [professores, setProfessores] = useState(UsersArrayProfessor);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filterType, setFilterType] = useState<"Aluno" | "Professor">("Aluno");
  const [adminFilter, setAdminFilter] = useState<
    "todos" | "admin" | "naoAdmin"
  >("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);
  const [newUserType, setNewUserType] = useState<"Aluno" | "Professor">(
    "Aluno"
  );
  const [addAdmin, setAddAdmin] = useState(false);

  // Campos do formulário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ra, setRa] = useState("");
  const [turma, setTurma] = useState("");
  const [curso, setCurso] = useState("");
  const [materia, setMateria] = useState("");
  const [error, setError] = useState("");

  const handleAddUser = () => {
    if (!validateForm()) return;

    // Aqui você adicionaria o usuário ao array de alunos ou professores
    console.log("Usuário válido. Enviar para o banco de dados.");
    setShowAddModal(false);
    resetForm();
  };

  const validateForm = () => {
    if (!name || !email || !password || !ra) {
      setError("Preencha todos os campos obrigatórios.");
      return false;
    }

    if (newUserType === "Aluno" && !turma) {
      setError("Informe a turma do aluno.");
      return false;
    }

    if (newUserType === "Professor" && !materia) {
      setError("Informe a matéria do professor.");
      return false;
    }

    setError(""); // Sem erros
    return true;
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setRa("");
    setTurma("");
    setCurso("");
    setMateria("");
    setAddAdmin(false);
    setError("");
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

  const handleLoadMore = () => setVisibleCount((prev) => prev + 5);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Gerenciar Usuários
      </h2>
      <div className="bg-white/50 p-6 rounded-lg shadow-md">
        {/* Filtros */}
        <div className="mb-6 flex flex-col gap-4 w-full">
          <div className="flex flex-wrap gap-4 w-full">
            <button
              onClick={() => setShowAddModal(true)}
              className="flex-1 cursor-pointer bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            >
              Adicionar
            </button>
            <button
              onClick={() => setFilterType("Aluno")}
              className={`flex-1 py-2 px-4 rounded ${
                filterType === "Aluno"
                  ? "bg-blue-800 text-white"
                  : "bg-blue-900 hover:bg-blue-800 cursor-pointer"
              }`}
            >
              Alunos
            </button>
            <button
              onClick={() => setFilterType("Professor")}
              className={`flex-1 py-2 px-4 rounded ${
                filterType === "Professor"
                  ? "bg-blue-800 text-white"
                  : "bg-blue-900 hover:bg-blue-800 cursor-pointer"
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

        {/* Lista */}
        <div className="flex flex-col">
          {usersToDisplay.map((user) => (
            <SingleItemUsers key={user._id} {...user} />
          ))}
          {visibleCount < allFilteredUsers.length && (
            <button
              onClick={handleLoadMore}
              className="self-center cursor-pointer text-white px-6 py-2 rounded bg-blue-900 hover:bg-blue-800"
            >
              Mostrar mais
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 p-5 flex items-center justify-center backdrop-blur-md bg-black/30">
          <div className="bg-white/80 text-black Card rounded-lg shadow-lg p-6 w-[90%] max-w-md max-h-full overflow-y-auto relative">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Adicionar Usuário</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-xl cursor-pointer font-bold text-gray-500 hover:text-black"
              >
                <IconX size={30} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <label>
                <span className="font-semibold">Nome:</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Bruno Henrique"
                  className="w-full border p-2 rounded mt-1"
                />
              </label>

              <label>
                <span className="font-semibold">Email:</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@aluno.educacao.sp.gov.br"
                  className="w-full border p-2 rounded mt-1"
                />
              </label>

              <label>
                <span className="font-semibold">Senha:</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Defina uma senha segura"
                  className="w-full border p-2 rounded mt-1"
                />
              </label>

              {newUserType === "Aluno" && (
                <label>
                  <span className="font-semibold">RA:</span>
                  <input
                    type="text"
                    value={ra}
                    onChange={(e) => setRa(e.target.value)}
                    placeholder="Ex: 00011035887833SP"
                    className="w-full border p-2 rounded mt-1"
                  />
                </label>
              )}

              {newUserType === "Professor" && (
                <label>
                  <span className="font-semibold">RG:</span>
                  <input
                    type="text"
                    value={ra}
                    onChange={(e) => setRa(e.target.value)}
                    placeholder="Ex: 49.009.298-6"
                    className="w-full border p-2 rounded mt-1"
                  />
                </label>
              )}

              <label>
                <span className="font-semibold">Tipo:</span>
                <select
                  value={newUserType}
                  onChange={(e) =>
                    setNewUserType(e.target.value as "Aluno" | "Professor")
                  }
                  className="w-full border p-2 rounded mt-1"
                >
                  <option value="Aluno">Aluno</option>
                  <option value="Professor">Professor</option>
                </select>
              </label>

              {newUserType === "Aluno" && (
                <>
                  <label>
                    <span className="font-semibold">Turma:</span>
                    <input
                      type="text"
                      value={turma}
                      onChange={(e) => setTurma(e.target.value)}
                      placeholder="Ex: 2º B"
                      className="w-full border p-2 rounded mt-1"
                    />
                  </label>
                  <label>
                    <span className="font-semibold">Curso (opcional):</span>
                    <input
                      type="text"
                      value={curso}
                      onChange={(e) => setCurso(e.target.value)}
                      placeholder="Ex: Desenvolvimento de Sistemas"
                      className="w-full border p-2 rounded mt-1"
                    />
                  </label>
                </>
              )}

              {newUserType === "Professor" && (
                <label>
                  <span className="font-semibold">Matéria:</span>
                  <input
                    type="text"
                    value={materia}
                    onChange={(e) => setMateria(e.target.value)}
                    placeholder="Ex: Matemática, Física..."
                    className="w-full border p-2 rounded mt-1"
                  />
                </label>
              )}

              <label className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => setAddAdmin(!addAdmin)}
                  className={`flex-1 px-6 py-2 text-sm font-semibold rounded-md border-2 transition-all ${
                    addAdmin
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-gray-200 border-gray-400"
                  } hover:bg-blue-500 hover:border-blue-500 cursor-pointer`}
                >
                  Admin
                </button>
              </label>

              <button
                onClick={handleAddUser}
                className="mt-2 cursor-pointer bg-green-600 hover:bg-green-700 text-white py-2 rounded"
              >
                Adicionar Usuário
              </button>

              {error && (
                <p className="text-center text-red-600 text-sm mt-1">{error}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
