export default function UserInfoCard({ user }: { user: any }) {
  return (
    <div className="bg-white/50 p-6 rounded-lg shadow-md space-y-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center">Dados Pessoais</h1>

      <h2 className="text-2xl font-semibold text-gray-800">Email:</h2>
      <p className="text-lg text-gray-700">{user.email}</p>

      {(user.Ra || user.Rg) && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800">{user.Ra ? "Ra:" : "Rg:"}</h2>
          <p className="text-lg text-gray-700">{user.Ra || user.Rg}</p>
        </>
      )}

      {(user.curso || user.materia) && (
        <>
          <h2 className="text-2xl font-semibold text-gray-800">
            {user.curso ? "Curso:" : "Matéria:"}
          </h2>
          <p className="text-lg text-gray-700">{user.curso || user.materia}</p>
        </>
      )}
    </div>
  );
}
