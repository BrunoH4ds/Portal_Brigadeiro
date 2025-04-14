"use client";

import { IconX } from "@tabler/icons-react";
import { useState } from "react";

interface SingleItemUsersProps {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  Ra: string;
  admin: boolean;
  type: "Aluno" | "Professor";
  turma?: string; // Adicionado para "Aluno"
  curso?: string; // Adicionado para "Aluno"
  materia?: string; // Adicionado para "Professor"
}

export default function SingleItemUsers({
  _id,
  name,
  email,
  password,
  createdAt,
  Ra,
  admin,
  type,
  turma,
  curso,
  materia,
}: SingleItemUsersProps) {
  const [showModal, setShowModal] = useState(false);

  // Estados para edição
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPassword, setEditedPassword] = useState(password);
  const [editedRa, setEditedRa] = useState(Ra);
  const [editedIsAdmin, setEditedIsAdmin] = useState(admin);
  const [editedType, setEditedType] = useState<"Aluno" | "Professor">(type);
  const [editedTurma, setEditedTurma] = useState(turma || "");
  const [editedCurso, setEditedCurso] = useState(curso || "");
  const [editedMateria, setEditedMateria] = useState(materia || "");

  const handleRemove = () => {
    console.log("Usuário removido:", _id);
    setShowModal(false);
  };

  const handleSave = () => {
    const updatedUser = {
      _id,
      name: editedName,
      email: editedEmail,
      password: editedPassword,
      Ra: editedRa,
      admin: editedIsAdmin,
      type: editedType,
      createdAt,
      turma: editedTurma,
      curso: editedCurso,
      materia: editedMateria,
    };
    console.log("Usuário atualizado:", updatedUser);
    setShowModal(false);
  };

  return (
    <>
      {/* Item da lista */}
      <div
        onClick={() => setShowModal(true)}
        className="cursor-pointer bg-blue-900 p-4 rounded-md text-white mb-4 hover:bg-blue-800 transition-colors"
      >
        <div className="flex justify-between items-center">
          <div>
            <span className="font-semibold text-gray-200">Nome:</span> {name}
            <div className="text-sm text-gray-300">
              <span className="font-semibold">Tipo:</span> {type}
              {" | "}
              <span className="font-semibold">Admin:</span>{" "}
              {admin ? "Sim" : "Não"}
            </div>
          </div>
          <div className="text-xs text-gray-300 text-right">
            <span className="block font-semibold">Adicionado em:</span>
            {new Date(createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 p-5 flex items-center justify-center backdrop-blur-md bg-black/30">
          <div className="bg-white/80 text-black Card rounded-lg shadow-lg p-6 w-[90%] max-w-md max-h-full overflow-y-auto relative">
            {/* Botão de fechar */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Editar Usuário</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-xl font-bold text-gray-500 hover:text-black cursor-pointer"
              >
                <IconX size={30} />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <label>
                <span className="font-semibold">Nome:</span>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  placeholder="Ex: Bruno Henrique"
                />
              </label>

              <label>
                <span className="font-semibold">Email:</span>
                <input
                  type="email"
                  className="w-full border p-2 rounded mt-1"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                  placeholder="exemplo@aluno.educacao.sp.gov.br"
                />
              </label>

              <label>
                <span className="font-semibold">Senha:</span>
                <input
                  type="text"
                  className="w-full border p-2 rounded mt-1"
                  value={editedPassword}
                  onChange={(e) => setEditedPassword(e.target.value)}
                  placeholder="Atualize a senha"
                />
              </label>

              {editedType === "Aluno" && (
                <label>
                  <span className="font-semibold">RA:</span>
                  <input
                    type="text"
                
                    placeholder="Ex: 00011035887833SP"
                    className="w-full border p-2 rounded mt-1"
                  />
                </label>
              )}

              {editedType === "Professor" && (
                <label>
                  <span className="font-semibold">RG:</span>
                  <input
                    type="text"
                   
                    placeholder="Ex: 49.009.298-6"
                    className="w-full border p-2 rounded mt-1"
                  />
                </label>
              )}

              <label>
                <span className="font-semibold">Tipo:</span>
                <select
                  value={editedType}
                  onChange={(e) =>
                    setEditedType(e.target.value as "Aluno" | "Professor")
                  }
                  className="w-full border p-2 rounded mt-1"
                >
                  <option value="Aluno">Aluno</option>
                  <option value="Professor">Professor</option>
                </select>
              </label>

              {/* Campos específicos de Aluno */}
              {editedType === "Aluno" && (
                <>
                  <label>
                    <span className="font-semibold">Turma:</span>
                    <input
                      type="text"
                      className="w-full border p-2 rounded mt-1"
                      value={editedTurma}
                      onChange={(e) => setEditedTurma(e.target.value)}
                      placeholder="Ex: 2º B"
                    />
                  </label>

                  <label>
                    <span className="font-semibold">Curso:</span>
                    <input
                      type="text"
                      className="w-full border p-2 rounded mt-1"
                      value={editedCurso}
                      onChange={(e) => setEditedCurso(e.target.value)}
                      placeholder="Ex: Desenvolvimento de Sistemas"
                    />
                  </label>
                </>
              )}

              {/* Campos específicos de Professor */}
              {editedType === "Professor" && (
                <label>
                  <span className="font-semibold">Matéria:</span>
                  <input
                    type="text"
                    className="w-full border p-2 rounded mt-1"
                    value={editedMateria}
                    onChange={(e) => setEditedMateria(e.target.value)}
                    placeholder="Ex: Matemática, Física, etc."
                  />
                </label>
              )}

              <label className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => setEditedIsAdmin(!editedIsAdmin)}
                  className={`flex-1 cursor-pointer inline-block px-6 py-2 text-sm font-semibold rounded-md border-2 transition-all 
            ${
              editedIsAdmin
                ? "bg-blue-600 border-blue-600 text-white"
                : "bg-gray-200 border-gray-400"
            } 
            hover:bg-blue-500 hover:border-blue-500`}
                >
                  Admin
                </button>
              </label>

              <div className="text-sm text-gray-500 mt-2">
                <span className="font-semibold">Adicionado em:</span>{" "}
                {new Date(createdAt).toLocaleDateString()}
                <br />
                <span className="font-semibold">ID:</span> {_id}
              </div>

              {/* Botões */}
              <div className="flex flex-col gap-2 mt-4">
                <button
                  onClick={handleSave}
                  className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
                >
                  Salvar Alterações
                </button>
                <button
                  onClick={handleRemove}
                  className="w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white py-2 rounded"
                >
                  Remover Usuário
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
