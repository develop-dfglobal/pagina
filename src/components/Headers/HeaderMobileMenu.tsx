"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ScrollLink } from "../ScrollLink";
import { menuItems } from "./menuConfig";

interface HeaderMobileMenuProps {
  menuOpen: boolean;
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
  closeMenu: () => void;
  openContactModal: () => void; // << nueva prop
}

export default function HeaderMobileMenu({
  menuOpen,
  activeMenu,
  setActiveMenu,
  closeMenu,
  openContactModal,
}: HeaderMobileMenuProps) {
  const handleSubmenuToggle = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  if (!menuOpen) return null;

  return (
    <>
      {/* Overlay para cerrar menú */}
      <div className="fixed inset-0 z-40 lg:hidden">
        <button
          aria-label="Cerrar menú"
          onClick={closeMenu}
          className="w-full h-full bg-black/30"
        />
      </div>

      {/* Menú móvil */}
      <nav className="lg:hidden bg-oxford text-white flex flex-col gap-4 p-6 z-50 absolute top-full left-0 right-0">
        {/* Items principales */}
        {menuItems.main.map((item) => (
          <ScrollLink
            key={item.id}
            targetId={item.id}
            className="hover:text-mint transition-colors"
            onClick={closeMenu}
          >
            {item.label}
          </ScrollLink>
        ))}

        {/* SERVICIOS móvil */}
        <div>
          <button
            onClick={() => handleSubmenuToggle("servicios")}
            className="flex items-center gap-1 hover:text-mint transition-colors w-full text-left"
          >
            {menuItems.servicios.label}
            <ChevronDownIcon
              className={`h-4 w-4 text-mint transition-transform duration-300 ${
                activeMenu === "servicios" ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeMenu === "servicios"
                ? "max-h-96 opacity-100 mt-2"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-2 pl-4">
              {menuItems.servicios.items.map((item) => (
                <ScrollLink
                  key={item.id}
                  targetId={item.href.replace("#", "")}
                  className="hover:text-mint transition-colors text-sm py-1.5"
                  onClick={closeMenu}
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>
          </div>
        </div>

        {/* MARCAS móvil */}
        <div>
          <button
            onClick={() => handleSubmenuToggle("marcas")}
            className="flex items-center gap-1 hover:text-mint transition-colors w-full text-left"
          >
            {menuItems.marcas.label}
            <ChevronDownIcon
              className={`h-4 w-4 text-mint transition-transform duration-300 ${
                activeMenu === "marcas" ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeMenu === "marcas"
                ? "max-h-96 opacity-100 mt-2"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-2 pl-4">
              {menuItems.marcas.items.map((item) => (
                <ScrollLink
                  key={item.id}
                  targetId={item.href.replace("#", "")}
                  className="hover:text-mint transition-colors text-sm py-1.5"
                  onClick={closeMenu}
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>
          </div>
        </div>

        {/* CONTACTO */}
        <button
          className="hover:text-mint transition-colors text-left"
          onClick={() => {
            openContactModal(); // abre el modal global
            closeMenu();        // cierra el menú mobile
          }}
        >
          {menuItems.contacto.label}
        </button>

        {/* Botón SOPORTE */}
        <a
          href="https://wa.me/584142005820"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full border border-mint text-mint hover:bg-mint hover:text-oxford transition font-semibold text-center mt-2"
          onClick={closeMenu}
        >
          {menuItems.soporte.label}
        </a>
      </nav>
    </>
  );
}