"use client";
import { useState } from "react";
import Logo from "../shared/Logo";
import LinksTab from "../comp_template/NavBarComp/LinksTab";
import ButtonsLoginSignUp from "../comp_template/NavBarComp/ButtonsLoginSingUp";
import { IconMenu2 } from "@tabler/icons-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/50 text-black px-5 py-0 rounded-b-md backdrop-blur-md z-10">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <Logo Logorounded={false} />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex mx-5">
          <LinksTab/> {/* Passa o estado de admin */}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex">
          <ButtonsLoginSignUp />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black">
            <IconMenu2 />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center mb-4 space-y-4">
          <LinksTab/>
          <ButtonsLoginSignUp/>
        </div>
      )}
    </nav>
  );
}
