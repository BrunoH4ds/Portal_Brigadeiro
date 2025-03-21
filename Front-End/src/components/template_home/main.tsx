import Footer from "./footer";
import NavBar from "./navBar";

export interface MainProps {
  children: any;
  className?: string;
  semCabecalho?: boolean;
  semRodape?: boolean;
}

export default function Main(props: MainProps) {
  return (
    <div
      className="flex flex-col bg-cover"
      style={{ backgroundImage: 'url("/background.png")' }}
    >
      {props.semCabecalho ? null : <NavBar />}

      {/* Conteúdo */}
      <main className="flex flex-1 text-white">
        {props.children}
      </main>
      {/* Rodapé */}
      {props.semRodape ? null : <Footer />}
    </div>
  );
}
