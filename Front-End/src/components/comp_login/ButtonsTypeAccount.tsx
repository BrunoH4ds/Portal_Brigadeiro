import {
  IconSchool,
  IconUser,
} from "@tabler/icons-react";

export default function ButtonsTypeAccount() {
  return (
    <div className="flex items-center gap-5">
      <button className="flex items-center gap-2 p-2 border border-blue-900 hover:bg-blue-900 hover:border-blue-800 rounded-3xl bg-zinc-800/40 cursor-pointer">
        <IconUser /> Aluno
      </button>
      <button className="flex items-center gap-2 p-2 border border-blue-900 hover:bg-blue-900 hover:border-blue-800 rounded-3xl bg-zinc-800/40 cursor-pointer">
        <IconSchool /> Professor
      </button>
    </div>
  );
}
