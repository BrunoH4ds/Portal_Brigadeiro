import Link from "next/link";

export default function ButtonsLoginSignUp() {
  return (
    <div className="flex gap-3 items-center">
      <Link href="/login" className="hover:text-blue-900">Login</Link>
      <Link href="/cadastro" className="text-white bg-blue-900 hover:bg-blue-800 p-1 rounded-md">Cadastro</Link>
    </div>
  );
}
