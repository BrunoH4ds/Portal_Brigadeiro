import Link from "next/link";

export default function ButtonsLoginSignUp() {
  return (
    <div className="flex gap-3 items-center">
      <Link href="/Entrar" className="text-white px-4 py-2 rounded-md bg-blue-900 hover:bg-blue-800">Entrar</Link>
    </div>
  );
}
