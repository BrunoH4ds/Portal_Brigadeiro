import { UserProvider } from "@/context/UserContext";
import Footer from "./footer";
import NavBar from "./navBar";
import { TaskProvider } from "@/context/TaskContext";

export interface MainProps {
  children: any;
  className?: string;
  semCabecalho?: boolean;
  semRodape?: boolean;
}

export default function Main(props: MainProps) {
  return (
    <UserProvider>
      <TaskProvider>
        <div className="flex flex-col flex-1 bg-blue-950">
          {props.semCabecalho ? null : <NavBar />}

          {/* Conteúdo */}
          <main className="flex flex-1 min-h-screen min-w-screen justify-center items-center text-white">
            {props.children}
          </main>
          {/* Rodapé */}
          {props.semRodape ? null : <Footer />}
        </div>
      </TaskProvider>
    </UserProvider>
  );
}
