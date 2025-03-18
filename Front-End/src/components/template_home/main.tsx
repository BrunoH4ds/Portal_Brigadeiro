import Footer from "./footer";
import Header from "./header";
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
      style={{ backgroundImage: 'url("/background.jpg")' }}
    >
      {props.semCabecalho ? null : <NavBar />}

      {/* Restante da página */}
      <div className="flex">
        <Header />
      </div>
      {/* Conteúdo */}
      <main className="flex flex-1">{props.children}</main>
      {/* Rodapé */}
      {props.semRodape ? null : <Footer />}
    </div>
  );
}
