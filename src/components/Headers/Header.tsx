"use client";

import { useState } from "react";
import Image from "next/image";
import HeaderTopBar from "./HeaderTopBar";
import HeaderDesktopMenu from "./HeaderDesktopMenu";
import HeaderMobileMenu from "./HeaderMobileMenu";
import { menuItems } from "./menuConfig";

type HeaderProps = {
  openContactModal: () => void; // << nueva prop
};

export default function Header({ openContactModal }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveMenu(null);
  };

  return (
    <header className="w-full text-white font-satoshi relative z-50">
      {/* TopBar */}
      <HeaderTopBar />

      {/* Bloque principal */}
      <div className="bg-oxford relative">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logos/COLOR_1.png"
              alt="DF Global Consulting Logo"
              width={160}
              height={40}
              priority
              className="h-auto w-auto max-h-12 md:max-h-14 lg:max-h-16"
            />
          </div>

          {/* Menú escritorio */}
          <HeaderDesktopMenu
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
            // aquí también puedes pasar openContactModal si quieres que el desktop abra el modal
            openContactModal={openContactModal}
          />

          {/* Botón hamburguesa móvil */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  className="h-6 w-6 text-mint"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-mint"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <HeaderMobileMenu
          menuOpen={menuOpen}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          closeMenu={closeMenu}
          openContactModal={openContactModal} // << aquí
        />
      </div>
    </header>
  );
}