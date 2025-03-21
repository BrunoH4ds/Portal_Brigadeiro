import Link from "next/link";

export default function ButtonsLoginSignUp() {
  return (
    <div className="flex gap-3 items-center">
      <Link href="/Entrar" className="hover:text-blue-900">Entrar</Link>
    </div>
  );
}
