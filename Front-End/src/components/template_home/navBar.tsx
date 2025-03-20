import Logo from "../shared/Logo";
import LinksTab from "../comp_home/NavBarComp/LinksTab";
import ButtonsLoginSignUp from "../comp_home/NavBarComp/ButtonsLoginSingUp";

export default function NavBar() {
  return (
    <nav className="fixed w-full bg-white/50 text-black px-5 py-0 rounded-b-md backdrop-blur-md">
      <div className="flex justify-between items-center">
        <Logo Logorounded={false}/>
        <div className="flex items-center gap-5">
          <LinksTab/>
          <div className="border h-6"/>
          <ButtonsLoginSignUp/>
        </div>
      </div>
    </nav>
  );
}
